import styled from "@emotion/styled";
import { baseInputStyle } from "../../assets/styles/baseInputStyle";
import { mq } from "../../assets/styles/mq";

export const formStyle = {
  padding: "20px",
  [mq[0]]: {
    "& .ant-form-item": {
      flexDirection: "row",
    },
  },
};

export const rowStyle = {
  display: "flex",
  alignItems: "stretch",
  width: "100%",
  justifyContent: "space-between",
};

export const columnStyle = {
  display: "flex",
  flexDirection: "column",
};

export const verticalInputStyle = {
  ...baseInputStyle,
  marginBottom: "10px !important",
};

export const horizontalInputStyle = {
  ...baseInputStyle,
  width: "49.5% !important",
  marginRight: "1%",
};

export const horizontalRightInputStyle = {
  ...baseInputStyle,
  width: "49.5% !important",
};

export const selectStyle = {
  width: "29%",
  "& div[class*=selector]": {
    borderRadius: "5px !important",
  },
};

export const StyleSpan = styled.span(() => ({
  color: "red",
  marginBottom: "24px",
  marginTop: 0,
}));

export const redBorderStyle = {
  borderColor: "red",
};
