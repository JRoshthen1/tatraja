import React from 'react'

function FacebookLink(props) {
  return (

        <a href={props.href} target="_blank" className='' >
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.8179 17.6065C35.8179 7.88032 27.9852 0 18.3179 0C8.65053 0 0.817871 7.88032 0.817871 17.6065C0.817871 26.3941 7.21737 33.6781 15.5835 35V22.696H11.1379V17.6065H15.5835V13.7274C15.5835 9.31511 18.1944 6.87789 22.1933 6.87789C24.1084 6.87789 26.111 7.2215 26.111 7.2215V11.5521H23.9038C21.7304 11.5521 21.0522 12.9095 21.0522 14.3017V17.6065H25.9057L25.1295 22.696H21.0522V35C29.4184 33.6781 35.8179 26.3941 35.8179 17.6065Z" fill="white"/>
          </svg>
        </a>
  )
}

export default FacebookLink