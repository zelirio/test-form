/** @jsxImportSource @emotion/react */
import { Radio } from "antd";
import { useState } from "react/cjs/react.development";
import { fieldStyle, legendStyle } from "./styles";

RadioGroup.defaultProps = {
  buttonStyle: "outline",
  defaultValue: [],
  disabled: false,
  label: "",
  options: {},
  optionType: "default",
};

export default function RadioGroup(props) {
  const { buttonStyle, defaultValue, disabled, label, options, optionType } =
    props;

  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  const onBlur = () => {
    if (props.onBlur) {
        props.onBlur(value);
      }
  }

  var childrenToRender;
  if (options && options.length > 0) {
    childrenToRender = options.map((option) => {
      return (
        <Radio
          key={`radio-group-value-options-${option.value}`}
          disabled={option.disabled || disabled}
          value={option.value}
          checked={value === option.value}
          style={option.style}
          onChange={onChange}
          onBlur={onBlur}
        >
          {option.label}
        </Radio>
      );
    });
  }

  return (
    <fieldset css={fieldStyle}>
      <legend css={legendStyle}>{label}</legend>
      {childrenToRender}
    </fieldset>
  );
}
