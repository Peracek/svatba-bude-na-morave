import { NoSsr } from '@material-ui/core'
import React, { useEffect } from 'react'

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
