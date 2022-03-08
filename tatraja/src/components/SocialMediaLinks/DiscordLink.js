import React from 'react'

function DiscordLink(props) {
  return (

        <a href={props.href} target="_blank" className='' >
          <svg width="44" height="33" viewBox="0 0 44 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.8202 2.78708C36.8081 2.76375 36.7881 2.74547 36.7638 2.73552C33.9481 1.44709 30.9767 0.528334 27.9241 0.00225356C27.8963 -0.00288878 27.8677 0.000820965 27.8422 0.0128552C27.8167 0.0248894 27.7956 0.0446354 27.782 0.069285C27.3774 0.801687 27.0101 1.55399 26.6816 2.32331C23.391 1.82513 20.0438 1.82513 16.7532 2.32331C16.4225 1.55203 16.0493 0.799546 15.6354 0.069285C15.6212 0.0451711 15.6 0.0258799 15.5747 0.0139238C15.5493 0.00196776 15.521 -0.00209894 15.4933 0.00225356C12.4403 0.52723 9.46874 1.44605 6.65343 2.73559C6.62933 2.74578 6.609 2.76318 6.59523 2.78538C0.965158 11.1708 -0.577132 19.35 0.179463 27.428C0.181592 27.4478 0.18769 27.4669 0.197397 27.4843C0.207103 27.5017 0.220219 27.517 0.235964 27.5293C3.5143 29.9502 7.18117 31.7981 11.0801 32.9941C11.1075 33.0023 11.1368 33.0019 11.1641 32.993C11.1913 32.9841 11.2152 32.9671 11.2324 32.9443C12.0698 31.8079 12.8118 30.6046 13.4509 29.3466C13.4597 29.3293 13.4647 29.3104 13.4656 29.291C13.4665 29.2717 13.4633 29.2524 13.4562 29.2344C13.4491 29.2164 13.4382 29.2001 13.4243 29.1865C13.4105 29.173 13.3939 29.1626 13.3756 29.1559C12.2056 28.7094 11.0728 28.1712 9.98794 27.5462C9.96824 27.5347 9.95169 27.5184 9.93975 27.499C9.92782 27.4795 9.92087 27.4575 9.91952 27.4347C9.91817 27.412 9.92246 27.3892 9.93201 27.3685C9.94156 27.3478 9.95608 27.3297 9.97428 27.3159C10.2026 27.1459 10.4269 26.9706 10.647 26.7902C10.6664 26.7744 10.6897 26.7642 10.7145 26.7609C10.7393 26.7575 10.7645 26.7612 10.7874 26.7714C17.8946 30.0063 25.5891 30.0063 32.6122 26.7714C32.6351 26.7605 32.6606 26.7564 32.6858 26.7594C32.7109 26.7624 32.7347 26.7725 32.7543 26.7885C32.9748 26.9699 33.1996 27.1457 33.4288 27.3159C33.4471 27.3296 33.4617 27.3475 33.4714 27.3682C33.4811 27.3888 33.4856 27.4115 33.4844 27.4343C33.4832 27.457 33.4764 27.4791 33.4647 27.4987C33.4529 27.5182 33.4364 27.5345 33.4168 27.5462C32.3345 28.1764 31.2007 28.7143 30.0275 29.1542C30.0093 29.1611 29.9927 29.1718 29.979 29.1855C29.9652 29.1993 29.9544 29.2158 29.9474 29.2339C29.9405 29.2521 29.9374 29.2715 29.9385 29.2909C29.9396 29.3103 29.9447 29.3293 29.9537 29.3466C30.6034 30.5976 31.3443 31.7994 32.1704 32.9423C32.1872 32.9658 32.2109 32.9834 32.2383 32.9926C32.2656 33.0019 32.2952 33.0023 32.3228 32.9939C36.2287 31.8019 39.9019 29.9538 43.1844 27.5293C43.2004 27.5176 43.2137 27.5027 43.2234 27.4856C43.2332 27.4684 43.2391 27.4493 43.2409 27.4297C44.1467 18.0907 41.7245 9.97852 36.8202 2.78708V2.78708ZM14.5123 22.5093C12.3725 22.5093 10.6094 20.5509 10.6094 18.1458C10.6094 15.7406 12.3383 13.782 14.5123 13.782C16.7033 13.782 18.4493 15.7576 18.4151 18.1456C18.4151 20.5509 16.6861 22.5093 14.5123 22.5093V22.5093ZM28.9425 22.5093C26.8028 22.5093 25.0397 20.5509 25.0397 18.1458C25.0397 15.7406 26.7686 13.782 28.9425 13.782C31.1337 13.782 32.8797 15.7576 32.8455 18.1456C32.8455 20.5509 31.1337 22.5093 28.9425 22.5093Z" fill={props.fill}/>
          </svg>
        </a>
  )
}

export default DiscordLink