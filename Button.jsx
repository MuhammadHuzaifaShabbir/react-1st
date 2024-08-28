import React from 'react'

function Button({ c, t }) {
  return (
    <div>
      <button style={{ backgroundColor: `${c || 'pink'}`, color: 'white', border: 'none', borderRadius: '5px', height: '30px' }}>{t}</button>
    </div>
  )
}

export default Button