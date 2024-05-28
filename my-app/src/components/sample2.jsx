
import React from 'react'

function Sample2({obj}) {

    console.log('this is my  second data ');

  return (
    <div>

      <h1>This is my second function and my data "{obj.name}" </h1>
    </div>
  )
}

export default React.memo(Sample2) 
