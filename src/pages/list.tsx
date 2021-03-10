import { Box, Button, Grid, Paper, TextField } from '@material-ui/core'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { firebaseApp } from '../components/MainPage/RSVP/firebase'

export default () => {
  const [user, setUser] = useState<firebase.auth.UserCredential | undefined>(
    undefined,
  )
  const [registrations, setRegistrations] = useState(undefined)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async ({ email, password }) => {
      try {
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        setUser(userCredential)
      } catch (error) {
        alert('wrongo')
      }

      try {
        const fetched = await firebaseApp.database().ref('/registration').get()
        console.log(fetched)
        setRegistrations(fetched)
      } catch (e) {
        console.error('nooo', e)
      }
    },
  })

  console.log(JSON.stringify(registrations))

  return (
    <div>
      <Paper style={{ maxWidth: '400px' }} elevation={2}>
        <Box p={2}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container direction="column">
              <TextField
                id="email"
                label="Email"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <Button type="submit">Potvrdit</Button>
            </Grid>
          </form>
        </Box>
      </Paper>

      {user && registrations && (
        <table>
          {Object.values(registrations.val()).map(reg => (
            <tr>
              <td>{reg.accomodation}</td>
              <td>{reg.name}</td>
              <td>{reg.note}</td>
            </tr>
          ))}
        </table>
      )}
    </div>
  )
}
