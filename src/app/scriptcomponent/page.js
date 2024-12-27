"use client"
import Script from 'next/script'

const scriptcomponent = () => {
    return (
        <>
            <h2>scriptcomponent</h2>
            <h3>Script Executed</h3>
            <Script
                src='/feature.js'
                onLoad={() => {
                    console.log("Script Executed")
                }
                }
            />
        </>
    )
}

export default scriptcomponent;

