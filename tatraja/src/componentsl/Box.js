import React from 'react'

function Box() {
  return (
    <mesh rotation={[90 , 0 , 20 ]}>
        <boxBufferGeometry attach='geometry' args={[2 , 2 , 2 ]}/>
        <meshLambertMaterial attach='material' color='#da759b'/>  
    </mesh>
  )
}

export default Box