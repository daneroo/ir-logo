
import React from 'react'
import { Link } from 'docz'

export const Footer = () => {
  return (
    <footer>
      <hr style={{ margin: '1em 0', borderTop: '1px solid #ccc' }} />

      <small>
        <Link to='/'>Back to Overview</Link>
        <div style={{ float: 'right' }}>
          &copy; Copyright 2018 &nbsp;
          <a href='https://github.com/daneroo/'>@daneroo</a>
        </div>
      </small>
    </footer>
  )
}

export default Footer
