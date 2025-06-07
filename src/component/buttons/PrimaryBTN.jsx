import React from 'react'

export default function PrimaryBTN(props) {
  return (
        <button className="primary_btn" {...props}>{props.children}</button>
  )
}
