import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { firebaseApp } from './firebase'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: ${p => p.theme.spacing(4)}px;
  }
`

export const RVSP = () => {
  return (
    <Container>
      <TextField id="name" label="Jméno a příjmení" />
      <FormControl>
        <FormLabel component="legend">Dorazíš?</FormLabel>
        <RadioGroup
          name="coming"
          value={'yes'}
          row
          // onChange={handleChange}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Ano" />
          <FormControlLabel value="no" control={<Radio />} label="Ne" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel component="legend">
          Můžeš někoho na Velehrad dovézt?
        </FormLabel>
        <RadioGroup
          name="coming"
          value={'yes'}
          row
          // onChange={handleChange}
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
      <FormControl>
        <FormLabel component="legend">
          Ubytování: (Možnosti popisujeme níže na stránkách.)
        </FormLabel>
        <RadioGroup
          name="coming"
          value={'yes'}
          row
          // onChange={handleChange}
        >
          <FormControlLabel
            value="yes"
            control={<Radio />}
            label="Zařídím si sám."
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="Konírna ve spacáku na karimatce."
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="Stojanovo gymnázium v 3–4lůžkovém pokoji."
          />
        </RadioGroup>
      </FormControl>
      <TextField
        id="name"
        label="Máš-li jakoukoli poznámku – tady máš prostor"
        multiline
      />
      <Button
        onClick={async () => {
          console.log('saving')
          await firebaseApp
            .database()
            .ref(`/registration/${new Date().getTime()}`)
            .set('value')
          console.log('done')
        }}
      >
        testicek
      </Button>
    </Container>
  )
}
