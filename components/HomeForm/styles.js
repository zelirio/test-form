export const formStyle = {
padding: "20px",
"@media (max-width: 575px)" : {
  "& .ant-form-item" : {
    flexDirection: "row"
  }
}}

export const baseInputStyle = {
borderRadius: "5px !important",
"&:focus": {
    borderColor: "#9CA5F8",
}
}


export const leftInputStyle = {
...baseInputStyle,
maxWidth: "40%",
borderRight: "0px",
borderRadius: "5px 0 0 5px !important",
}

export const middleInputStyle = {
...baseInputStyle,
maxWidth: "20%",
borderRight: "0px",
borderLeft: "0px",
borderRadius: 0
}

export const rightInputStyle = {
...baseInputStyle,
maxWidth: "20%",
borderLeft: "0px",
borderRadius: "0 5px 5px 0 !important"
}

export const rowStyle = {
display: "flex",
alignItems: "stretch",
width: "100%",
justifyContent: "space-between"
}

export const columnStyle = {
display: "flex",
flexDirection: "column"
}

export const paragraphStyle = {
fontFamily: "monospace",
color: "#888",
fontSize: "0.7em",
}

export const verticalInputStyle = {
...baseInputStyle,
marginBottom: "10px !important",
}

export const horizontalInputStyle = {
...baseInputStyle,
width: "49.5% !important",
marginRight: "1%",
}

export const horizontalRightInputStyle = {
...baseInputStyle,
width: "49.5% !important",
}

export const selectStyle = {
width: "29%",
"& div[class*=selector]" : {
    borderRadius: "5px !important",
}
}