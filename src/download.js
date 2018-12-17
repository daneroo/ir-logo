import React from 'react'
import Square from './square'

export const Download = () => {
  function toURI (inner, sz) {
    const svg = `<svg 
xmlns="http://www.w3.org/2000/svg" 
xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" 
x="0px" y="0px" 
viewBox="0 0 ${sz} ${sz}" 
enable-background="new 0 0 200 200" 
xml:space="preserve" 
height="${sz}" width="${sz}">
${inner}
</svg>`
    const dataURI = 'data:image/svg+xml;utf8,' + svg
    return dataURI
  }

  function download (elt, size) {
    const svgname = 'coco.svg'
    const pngname = svgname.replace('.svg', '-' + size + '.png')

    //  make an new image from the svg (must set both width and height)
    var img = document.createElement('img')
    img.src = elt.src
    img.setAttribute('width', '' + size)
    img.setAttribute('height', '' + size)

    img.onload = function () {
      console.log('  ->', pngname, img.width, 'x', img.height)

      var can = document.createElement('canvas')
      can.height = img.height
      can.width = img.width
      can.getContext('2d').drawImage(img, 0, 0)

      var a = document.createElement('a')
      a.download = pngname
      a.href = can.toDataURL('image/png').replace(/^data:image\/[^;]/, 'data:application/octet-stream')
      a.click()
    }
  }

  function rasterize (e) {
    e.preventDefault()
    const target = e.target
    console.log({ e, target })
    const src = document.querySelector('#src')
    const svg = src.outerHTML
    console.log({ svg })
    // const dataURI = 'data:image/svg+xml;utf8,' + svg
    // const dataURI = 'data:image/svg+xml;base64,' + window.btoa(svg)
    // const square = '<g transform="scale(.5) translate(128,128)"><polygon points="-100,100, 100,100, 100,-100, -100,-100" transform=""></polygon></g>'
    const dataURI = toURI(svg, 256)

    console.log({ dataURI })
    const dst = document.querySelector('#dst')
    dst.src = dataURI
    dst.src = dataURI

    download(dst, 256)
  }

  return (
    <div>
      <svg id='src' style={{ border: '1px solid red' }} width='256' height='256'>
        <g transform='translate(128,128)' >
          <Square />
        </g>
      </svg>
      <img id='dst' src='https://via.placeholder.com/256' />

      <br />
      <button onClick={rasterize}>Download</button>
    </div>
  )
}

export default Download
