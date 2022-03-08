import React from 'react'

function TwitchLink(props) {
  return (

        <a href={props.href} target="_blank" className='' >
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.5275 7.07314H25.6097V14.5722H28.5275V7.07314ZM20.5083 7.04102H17.5905V14.5435H20.5083V7.04102ZM8.10822 0L0.817871 6.24941V28.7506H9.56674V35L16.8578 28.7506H22.6927L35.8179 17.5V0H8.10822ZM32.9008 16.2524L27.0682 21.2509H21.2342L16.1282 25.6259V21.2509H9.56674V2.50059H32.9008V16.2524Z" fill={props.fill}/>
          </svg>
        </a>
  )
}

export default TwitchLink