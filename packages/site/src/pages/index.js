import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'

// import thumbnail from "@site/static/img/Iris/Iris_versicolor_5835374590.jpeg";
import thumbnail from '@site/static/img/Iris/Iris_versicolor_3.jpeg'

function HomepageHeader () {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      // can't figure out how to get bg image url in css module, so here it is as a style prop
        // https://css-tricks.com/tinted-images-multiple-backgrounds/
        style={{
        // backgroundImage: `url(img/Iris/Iris_versicolor_3.jpeg)`,
        // backgroundImage: `url(img/Iris/Iris_versicolor_Quebec_2-crop-right.jpeg)`,
        // backgroundImage: `url(img/Iris/Iris_versicolor_Quebec_2-crop-left.jpeg)`,
        // backgroundImage: `url(img/Iris/Iris_versicolor_Quebec_2.jpeg)`,
        // backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.0),rgba(0,0,0, 0.6),rgba(0,0,0, 0.0)),url(img/Iris/Iris_versicolor_Quebec_2.jpeg)`,
        // backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.0),rgba(0,0,0, 0.6),rgba(0,0,0, 0.3)),url(img/Iris/Iris_versicolor_Quebec_2-crop-left.jpeg)`,
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0, 0.6),rgba(0,0,0, 0.6),rgba(0,0,0, 0.0)),url(img/Iris/Iris_versicolor_Quebec_2-crop-right.jpeg)'

      }}
    >
      <div className={clsx('container', styles.containerFlex)}>
        <div className='left'>
          <img style={{width:'200px'}} src={useBaseUrl('img/Iris/iris-versicolor-logo-400.svg')} alt="Xrobot" />
        </div>
        <div className='right'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
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
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
