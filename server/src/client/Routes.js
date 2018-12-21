import React from 'react'
import Home from './pages/HomePage'
import Other from './pages/OtherPage'
import { Route } from 'react-router-dom'
import styles from './styles.css'

export default () => {
  return (
    <div className={styles.root}>
      <Route exact path='/' component={Home} />
      <Route exact path='/other' component={Other} />
    </div>
  )
}
