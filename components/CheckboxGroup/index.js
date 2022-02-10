/** @jsxImportSource @emotion/react */
import { Checkbox } from "antd";
import { useState } from "react/cjs/react.development";
import { fieldStyle, legendStyle } from "../../assets/styles/fieldsetStyles";

RadioGroup.defaultProps = {
  defaultValue: [],
  disabled: false,
  label: "",
  options: {},
};

export default function RadioGroup(props) {
  const { defaultValue, disabled, label, options } = props;

  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    const val = event.target.value;
    var va;
    if (value.includes(val)) {
      va = value.filter((v) => v !== val);
      setValue(va);
    } else {
      va = [...value, val];
      setValue(va);
    }
    if (props.onChange) {
      props.onChange(va);
    }
  };

  const onBlur = () => {
    if (props.onBlur) {
      props.onBlur(value);
    }
  };

  var childrenToRender;
  if (options && options.length > 0) {
    childrenToRender = options.map((option) => {
      return (
        <Checkbox
          key={`checkbox-group-value-options-${option.value}`}
          disabled={option.disabled || disabled}
          value={option.value}
          checked={value.includes(option.value)}
          style={option.style}
          onChange={onChange}
          onBlur={onBlur}
        >
          {option.label}
        </Checkbox>
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
