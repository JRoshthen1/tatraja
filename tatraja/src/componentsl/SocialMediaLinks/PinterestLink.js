import React from 'react'

function InstagramLink(props) {
  return (

        <a href={props.href} target="_blank" rel="noreferrer"className='' >
          <svg width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.8179 17.5C35.8179 27.1673 27.9852 35 18.3179 35C16.5114 35 14.7755 34.7248 13.1384 34.2167C13.8511 33.0524 14.9167 31.1472 15.3118 29.63C15.5235 28.8115 16.3985 25.4667 16.3985 25.4667C16.9701 26.5534 18.6354 27.4778 20.4066 27.4778C25.6848 27.4778 29.4882 22.623 29.4882 16.5897C29.4882 10.8105 24.7675 6.48488 18.6989 6.48488C11.1485 6.48488 7.1334 11.5514 7.1334 17.0766C7.1334 19.6452 8.50235 22.8417 10.6828 23.8579C11.0144 24.0131 11.1909 23.9425 11.2685 23.625C11.3249 23.3851 11.6213 22.1925 11.7554 21.6421C11.7977 21.4657 11.7765 21.3105 11.6354 21.1411C10.9227 20.2591 10.3441 18.6502 10.3441 17.1472C10.3441 13.2873 13.2655 9.55444 18.2473 9.55444C22.5447 9.55444 25.5578 12.4829 25.5578 16.6744C25.5578 21.4093 23.1657 24.6905 20.0538 24.6905C18.339 24.6905 17.0477 23.2722 17.464 21.5292C17.958 19.4476 18.9106 17.2036 18.9106 15.7006C18.9106 14.3599 18.1909 13.2379 16.6949 13.2379C14.9378 13.2379 13.5265 15.0514 13.5265 17.4859C13.5265 19.0383 14.0487 20.0827 14.0487 20.0827C14.0487 20.0827 12.3199 27.4073 12.0023 28.7762C11.6495 30.2863 11.7907 32.4173 11.9388 33.8004C5.43279 31.253 0.817871 24.9163 0.817871 17.5C0.817871 7.83266 8.65053 0 18.3179 0C27.9852 0 35.8179 7.83266 35.8179 17.5Z" fill={props.fill}/>
          </svg>
        </a>
  )
}

export default InstagramLink