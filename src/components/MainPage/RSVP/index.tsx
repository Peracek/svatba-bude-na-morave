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
  Typography,
} from '@material-ui/core'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import styled from 'styled-components'
import { firebaseApp } from './firebase'

const Form = styled.form`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${p => p.theme.spacing(4)}px !important;
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
      willAttend: 'yes',
      friday: '',
      openToCarpool: '',
      carpoolInfo: '',
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
      if (values.willAttend === 'yes' && values.accomodation === '') {
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
    if (formik.values.willAttend === 'yes') {
      return (
        <Typography align="center">
          Odesláno.
          <br />
          Díky a těšíme se!
        </Typography>
      )
    } else {
      return <Typography align="center">Odesláno.</Typography>
    }
  }
  if (formState === 'error') {
    return (
      <Typography align="center">
        🤦‍♂️ Něco se pokazilo.
        <br />
        Zkuste to prosím později.
      </Typography>
    )
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
      {formik.values.willAttend === 'yes' && (
        <>
          <FormControl>
            <FormLabel component="legend">Přijedeš už v pátek?</FormLabel>
            <RadioGroup
              name="friday"
              onChange={formik.handleChange}
              value={formik.values.friday}
              row
            >
              <FormControlLabel value="yes" control={<Radio />} label="Ano" />
              <FormControlLabel value="no" control={<Radio />} label="Ne" />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel component="legend">
              Pojedeš na Velehrad autem a můžeš někoho vzít?
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
          {formik.values.openToCarpool === 'yes' && (
            <TextField
              id="carpoolInfo"
              label="Odkud, kolik lidí?"
              helperText="například: z Prahy, 2 lidi autem"
            />
          )}
          <FormControl error={!!formik.errors.accomodation}>
            <FormLabel component="legend">
              Ubytování (Možnosti popisujeme níže na stránkách.):
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
                control={
                  <Radio required={formik.errors.willAttend === 'yes'} />
                }
                label="Zařídím si sám."
              />
              <FormControlLabel
                value="konirna"
                control={
                  <Radio required={formik.errors.willAttend === 'yes'} />
                }
                label="Konírna ve spacáku na karimatce."
              />
              <FormControlLabel
                value="stojanovoGymnazium"
                control={
                  <Radio required={formik.errors.willAttend === 'yes'} />
                }
                label="Stojanovo gymnázium v 3–4lůžkovém pokoji."
              />
            </RadioGroup>
          </FormControl>
        </>
      )}
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
