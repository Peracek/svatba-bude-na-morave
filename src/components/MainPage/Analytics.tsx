import React from 'react'
import firebase from 'firebase/app'
import { useEffect } from 'react'
import { NoSsr } from '@material-ui/core'

const InitAnalytics = () => {
  useEffect(() => {
    import('firebase/analytics')
  }, [])
  return null
}

export const Analytics = () => (
  <NoSsr>
    <InitAnalytics />
  </NoSsr>
)
