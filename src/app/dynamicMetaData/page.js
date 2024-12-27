import React from 'react'

const DyanamicMetaData = () => {
  return (
    <>
    <h2>Dynamic</h2>
    </>
  )
}

export default DyanamicMetaData;


export function generateMetadata(){
    return {
        title : "My Meta Data"
    }
}