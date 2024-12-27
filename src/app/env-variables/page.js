import React from 'react'

const Envvariable = () => {
    console.log(process.env.GOOGLE_API_KEY);
    
    return (
        <>
            <h2>Envvariable</h2>
            {/* {
                process.env.NODE_ENV === s"development" ? <h3>Development Mode</h3> : <h3>Production Mode</h3>
            } */}

        </>
    )
}

export default Envvariable;