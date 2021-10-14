import React from 'react'
import clsx from 'clsx'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Platform Stack as a Service',
    url: '/img/PSaaS/PSaaS.svg',
    Svg: require('../../static/img/PSaaS/PSaaS.svg').default,
    description: (
      <>
        This was an effort to catalog key infrastructure and technologies in use in OPD.
        It was hugo based documentation site.
        It was originally published on <tt>ir-si.com</tt>  <i>circa June 2016</i>.
      </>
    )
  },
  {
    title: 'eXtensible Robot',
    url: '/img/XRobot/XRobot.svg',
    Svg: require('../../static/img/XRobot/XRobot.svg').default,
    description: (
      <>
        XRobot - eXtensible Robot - Team name for LSA Work.
        It was originally published on <tt>xrobots.dev</tt>  <i>circa Dec 2018</i>.
      </>
    )
  },
  {
    title: 'Helium Team',
    url: '/img/Helium/Helium.svg',
    Svg: require('../../static/img/Helium/Helium.svg').default,
    description: (
      <>
        This logo was for the Helium team,
        originally working on watermarking and traitor tracing &nbsp;
        <i>circa Feb 2017</i>.
      </>
    )
  }
]

function Feature ({ url, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <img className={styles.featureSvg} src={useBaseUrl(url)} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures () {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
