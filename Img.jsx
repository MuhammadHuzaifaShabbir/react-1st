import React from 'react'

function Img({ i, p }) {
    return (

        <div>
            <img src={i} alt="" />
            <p>{p}</p>
        </div>
    )
}

export default Img
