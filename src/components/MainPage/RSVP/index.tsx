import {
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import styled from 'styled-components'
import { firebaseApp } from './firebase'

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${p => p.theme.spacing(4)}px;
  }
`

const Spinner = styled(CircularProgress)`
  margin-left: ${p => p.theme.spacing(2)}px;
  color: white;
`

const nonemptyRX = /\w+/

export const RVSP = () => {
  const [formState, setFormState] = useState(
    'init' as 'init' | 'pending' | 'done' | 'error',
  )

  const formik = useFormik({
    initialValues: {
      name: '',
      willAttend: '',
      openToCarpool: '',
      accomodation: '',
      note: '',
    },
    validate: values => {
      const errs = {} as any
      if (!nonemptyRX.test(values.name)) {
        errs.name = `Povinný údaj`
      }
      if (values.willAttend === '') {
        errs.willAttend = `Povinný údaj`
      }
      if (values.accomodation === '') {
        errs.accomodation = `Povinný údaj`
      }
      return errs
    },
    onSubmit: async values => {
      setFormState('pending')
      try {
        await firebaseApp
          .database()
          .ref(`/registration/${new Date().getTime()}`)
          .set(values)
        setFormState('done')
      } catch (e) {
        setFormState('error')
      }
    },
  })

  if (formState === 'done') {
    return <div>'nice'</div>
  }
  if (formState === 'error') {
    return <div>'ay no'</div>
  }

  return (
    <Form onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        label="Jméno a příjmení"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={!!formik.errors.name}
        helperText={formik.errors.name}
        required
      />
      <FormControl error={!!formik.errors.willAttend}>
        <FormLabel component="legend">Dorazíš?</FormLabel>
        <FormHelperText>{formik.errors.willAttend}</FormHelperText>
        <RadioGroup
          name="willAttend"
          onChange={formik.handleChange}
          value={formik.values.willAttend}
          row
        >
          <FormControlLabel
            value="yes"
            control={<Radio required />}
            label="Ano"
          />
          <FormControlLabel
            value="no"
            control={<Radio required />}
            label="Ne"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel component="legend">
          Můžeš někoho na Velehrad dovézt?
        </FormLabel>
        <RadioGroup
          name="openToCarpool"
          onChange={formik.handleChange}
          value={formik.values.openToCarpool}
          row
        >
          <FormControlLabel value="yes" control={<Radio />} label="Ano" />
          <FormControlLabel value="no" control={<Radio />} label="Ne" />
        </RadioGroup>
      </FormControl>
      <TextField
        id="name"
        label="Odkud, kolik lidí?"
        helperText="například: z Prahy, 2 lidi autem"
      />
      <FormControl error={!!formik.errors.accomodation}>
        <FormLabel component="legend">
          Ubytování (Možnosti popisujeme níže na stránkách)
        </FormLabel>
        <FormHelperText>{formik.errors.accomodation}</FormHelperText>
        <RadioGroup
          name="accomodation"
          onChange={formik.handleChange}
          value={formik.values.accomodation}
          row
        >
          <FormControlLabel
            value="zaridimSiSam"
            control={<Radio required />}
            label="Zařídím si sám."
          />
          <FormControlLabel
            value="konirna"
            control={<Radio required />}
            label="Konírna ve spacáku na karimatce."
          />
          <FormControlLabel
            value="stojanovoGymnazium"
            control={<Radio required />}
            label="Stojanovo gymnázium v 3–4lůžkovém pokoji."
          />
        </RadioGroup>
      </FormControl>
      <TextField
        id="note"
        label="Máš-li jakoukoli poznámku – tady máš prostor"
        multiline
        onChange={formik.handleChange}
        value={formik.values.note}
      />
      <Button
        type="submit"
        color="primary"
        variant="contained"
        disabled={formState === 'pending'}
      >
        Odeslat
        {formState === 'pending' && <Spinner size={20} />}
      </Button>
    </Form>
  )
}
