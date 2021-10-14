import React, { useState } from 'react'

import XRobot from './xrobot'

export const Download = ({ size = 512, initialRenderSize = 256 }) => {
  const [renderSize, setRenderSize] = useState(initialRenderSize)

  function download (dataURI, size) {
    const svgname = 'XRobot.svg'
    const pngname = svgname.replace('.svg', '-' + size + '.png')

    //  make an new image from the svg (must set both width and height)
    var img = document.createElement('img')
    img.src = dataURI
    img.setAttribute('width', '' + size)
    img.setAttribute('height', '' + size)

    img.onload = function () {
      console.log('  download ->', pngname, img.width, 'x', img.height)

      var can = document.createElement('canvas')
      can.height = img.height
      can.width = img.width
      can.getContext('2d').drawImage(img, 0, 0)

      var a = document.createElement('a')
      a.download = pngname
      a.href = can
        .toDataURL('image/png')
        .replace(/^data:image\/[^;]/, 'data:application/octet-stream')
      a.click()
    }
  }

  function toURI (inner, size, renderSize) {
    console.log('  toURI ->', { size, renderSize })

    const svg = `<svg 
xmlns="http://www.w3.org/2000/svg" 
xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
x="0px" y="0px" 
viewBox="0 0 ${renderSize} ${renderSize}" 
enable-background="new 0 0 200 200" 
xml:space="preserve" 
height="${renderSize}" width="${renderSize}">
  <g transform="scale(${renderSize / size})" >
    ${inner}
  </g>
</svg>`
    console.log('wrapped svg', { svg })
    //  as utf8
    // const dataURI = 'data:image/svg+xml;utf8,' + svg
    // as base64
    const dataURI = 'data:image/svg+xml;base64,' + window.btoa(svg)
    return dataURI
  }

  function rasterize (e) {
    e.preventDefault()
    const target = e.target
    // find the svg node
    const svgNode = target.parentNode.parentNode.querySelector('svg')
    if (!svgNode) {
      console.error(new Error('Cannor find svg node'))
      return
    }
    const svg = svgNode.innerHTML
    console.log({ size, renderSize, svg })
    const dataURI = toURI(svg, size, renderSize)

    console.log({ dataURI })

    download(dataURI, renderSize)
  }

  function selectSize (e) {
    setRenderSize(e.target.value)
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <XRobot size={size} />
      <br />
      <div style={{ textAlign: 'center' }}>
        <select value={renderSize} onChange={selectSize}>
          {[5, 6, 7, 8, 9, 10].map(i => {
            return <option key={i} value={1 << i}>{`${1 << i}px`}</option>
          })}
        </select>
        <button onClick={rasterize}>Download</button>
      </div>
    </div>
  )
}

export default Download
