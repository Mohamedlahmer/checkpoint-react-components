import React from 'react';
import image from '../../assets/pic.jpg';

const ProfilPhoto = () => {
    const style ={
        border:'5px solid blue',
        borderRadius: '50px 20px',
    }
    return (
        <div>
            <img src={image} alt="pic" width='500px' style={style}/>
        </div>
    )
}

export default ProfilPhoto
