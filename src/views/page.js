import React from 'react'
import Helmet from 'react-helmet'

import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>proiect</title>
        <meta property="og:title" content="proiect" />
      </Helmet>
    </div>
  )
}

export default Page
