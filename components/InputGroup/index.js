/** @jsxImportSource @emotion/react */
import { fieldStyle, legendStyle } from "../../assets/styles/fieldsetStyles";

export default function InputGroup({ label, children }) {
  return (
  <fieldset css={fieldStyle}>
      <legend css={legendStyle}>{label}</legend>
      {children}
  </fieldset>
  );
}
