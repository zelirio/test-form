/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


export const baseInputStyle = css`
border-radius: 5px;
&:focus {
    border-color: #00F
}
`

export const leftInputStyle = css`
${baseInputStyle};
max-width: 40%;
border-right: 0px;
border-radius: 5px 0 0 5px !important;
`

export const middleInputStyle = css`
${baseInputStyle};
max-width: 20%;
border-right: 0px;
border-left: 0px;
border-radius: 0;
`

export const rightInputStyle = css`
${baseInputStyle};
max-width: 20%;
border-left: 0px;
border-radius: 0 5px 5px 0 !important;
`

export const rowStyle = css`
display: flex;
align-items: stretch;
width: 100%;
justify-content: space-between;
`

export const columnStyle = css`
display: flex;
flex-direction: column;
`

export const paragraphStyle = css`
font-family: monospace;
color: #888;
font-size: 0.7em;
`

export const verticalInputStyle = css`
${baseInputStyle}
margin-bottom: 10px;
`

export const horizontalInputStyle = css`
${baseInputStyle}
width: 49.5%;
margin-right: 1%;
`

export const horizontalRightInputStyle = css`
${baseInputStyle}
width: 49.5%;
`

export const selectStyle = css`
width: 29%;
& div[class*="selector"] {
    border-radius: 5px !important;
}
`