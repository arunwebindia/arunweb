import React from 'react'

export default function Button(props) {
  return (<button className='primary_btn w-100' {...props}>{props.children}</button>
  )
}
