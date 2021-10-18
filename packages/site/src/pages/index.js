import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import { Iris } from '../components/logos/iris'
import { irdetoPurple, irdetoGreen } from '../../src/components/logos/colors'

function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.containerFlex)}>
        <div>
          <Iris size={200} />
        </div>
        <div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <div className="hero__image_right">
          <img
            style={{ width: '300px' }}
            src={useBaseUrl('img/Iris/Iris_versicolor_3-alpha.png')}
            alt="Xrobot"
          />
        </div>
      </div>
    </header>
  )
}

export default function Home () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
