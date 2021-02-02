import React from 'react'

const FullName = () => {

    const fname = { 
        firstname :"Mohamed",
        lastname : "Lahmer",
    }

    const stylen ={
        fontFamily:'Hachi Maru Pop, cursive',
        fontSize:'40px',
        color: '#03506f'
    }

    return (
        <div>
            <h2 style={stylen}>Name : {fname.firstname} {fname.lastname}</h2>
        </div>
    )
}

export default FullName
