import React from 'react'

const Address = () => {

    const add={
        city : "zaghouan",
        ZIPCode :"1100",
        country : "Tunisia"
    }

    const stylead ={
        fontFamily:'Dosis, sans-serif',
        fontSize:'25px',
        color:'#1687a7'
    }

    return (
        <div>
            <h3 style={stylead}>Address : {add.city}-{add.ZIPCode},{add.country}</h3>
        </div>
    )
}

export default Address
