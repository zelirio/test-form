import { baseInputStyle } from "../../assets/styles/baseInputStyle"

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

export const paragraphStyle = {
fontFamily: "monospace",
color: "#888",
fontSize: "0.7em",
}