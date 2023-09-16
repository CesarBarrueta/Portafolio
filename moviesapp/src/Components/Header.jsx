import React from 'react'
import '../Styles/Header.css'

export default function Header(props) {
    const url = props.url
  return (
    <img src={url} alt="" className='main-image'/>
  )
}
