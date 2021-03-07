import { NoSsr } from '@material-ui/core'
import React, { useEffect } from 'react'
import firebase from 'firebase/app'

const InitAnalytics = () => {
  useEffect(() => {
    import('firebase/analytics').then(() => firebase.analytics())
  }, [])
  return null
}

export const Analytics = () => (
  <NoSsr>
    <InitAnalytics />
  </NoSsr>
)
