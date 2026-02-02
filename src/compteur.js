import React from 'react'
import { useState } from 'react'
function Compteur() {
    const [nbre,setNbre]=useState("Maman");
    function changer(){
        setNbre("Papa")
    }
    console.log(nbre)
    return (
        <>
            <p className='text-xl'>Compteur:{nbre}</p>
            <button onClick={()=> setNbre("Papa")} className='text-lg w-64 bg-gray-300'>changer +</button>
        </>
    )
}

export default Compteur
