import React from 'react'
import XRobot from './xrobot'

export const Download = ({ size = 512 }) => {
  function download (dataURI, size) {
    const svgname = 'XRobot.svg'
    const pngname = svgname.replace('.svg', '-' + size + '.png')

    //  make an new image from the svg (must set both width and height)
    var img = document.createElement('img')
    img.src = dataURI
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

  function rasterize (e) {
    console.log({ size })
    e.preventDefault()
    const target = e.target
    const svgNode = target.parentNode.querySelector('svg')
    if (!svgNode) {
      console.error(new Error('Cannor find svg node'))
      return
    }
    const svg = svgNode.outerHTML
    console.log({ svg })
    const dataURI = toURI(svg, size)

    console.log({ dataURI })

    download(dataURI, size)
  }

  return (
    <div>
      <XRobot size={size} />
      <br />
      <button onClick={rasterize}>Download</button>
    </div>
  )
}

export default Download
