/** @jsxImportSource @emotion/react */
import { Input } from "antd";
import React from "react";
import { LockOutlined } from "@ant-design/icons";
import { useState } from "react/cjs/react.development";
import { css } from "@emotion/react";
import {
  leftInputStyle,
  middleInputStyle,
  rightInputStyle,
  paragraphStyle,
} from "./styles";

PaymentInformation.defaultProps = {
  zipLength: 5,
  value: "",
  onChange: () => {},
  borderColor: "",
  id: "",
};

export default function PaymentInformation(props) {
  const [cardValue, SetCardValue] = useState("");
  const [dateValue, SetDateValue] = useState("");
  const [cvvValue, SetCvvValue] = useState("");
  const [zipValue, SetZipValue] = useState("");

  const focusNext = (event, value, maxLength) => {
    if (value.length >= maxLength) {
      const formular = event.target.form;
      const index = [...formular].indexOf(event.target);
      formular.elements[index + 1].focus();
    }
  };

  const onBlur = () => {
    if (props.onBlur) {
      props.onBlur([cardValue, dateValue, cvvValue, zipValue]);
    }
  };

  const formatCardNumber = (event) => {
    const val = event.target.value;
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;
    const onlyNumbers = val.replace(/[^\d]/g, "");

    const formatted = onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
      [$1, $2, $3, $4].filter((group) => !!group).join(" ")
    );
    SetCardValue(formatted);
    props.onChange([formatted, dateValue, cvvValue, zipValue]);

    focusNext(event, formatted, 19);
  };

  const formatDate = (event) => {
    const val = event.target.value;
    const regex = /^(\d{0,2})(\d{0,2})$/g;
    const onlyNumbers = val.replace(/[^\d]/g, "");

    const formatted = onlyNumbers.replace(regex, (regex, $1, $2) =>
      [$1, $2].filter((group) => !!group).join("/")
    );

    if (
      (formatted.length == 2 && dateValue.length < formatted.length) ||
      (dateValue.length == 2 && formatted.length == 2)
    ) {
      formatted += "/";
    }

    SetDateValue(formatted);
    props.onChange([cardValue, formatted, cvvValue, zipValue]);

    focusNext(event, formatted, 5);
  };

  const formatCVV = (event) => {
    const val = event.target.value;
    const onlyNumbers = val.replace(/[^\d]/g, "");

    SetCvvValue(onlyNumbers);
    props.onChange([cardValue, dateValue, onlyNumbers, zipValue]);

    focusNext(event, onlyNumbers, 3);
  };

  const formatZip = (event) => {
    const val = event.target.value;
    const onlyNumbers = val.replace(/[^\d]/g, "");

    SetZipValue(onlyNumbers);

    props.onChange([cardValue, dateValue, cvvValue, onlyNumbers]);
  };

  const border = css`
    border-color: ${props.borderColor};
  `;

  return (
    <>
      <Input.Group id={props.id} compact>
        <Input
          aria-label="16 digit card number"
          css={[leftInputStyle, border]}
          placeholder="0000 0000 0000 0000"
          value={cardValue}
          maxLength={19}
          onChange={formatCardNumber}
          onBlur={onBlur}
          prefix={<LockOutlined />}
        />
        <Input
          aria-label="expiracy date"
          css={[middleInputStyle, border]}
          placeholder="MM/YY"
          value={dateValue}
          maxLength={5}
          onChange={formatDate}
          onBlur={onBlur}
        />
        <Input
          css={[middleInputStyle, border]}
          placeholder="CVV"
          value={cvvValue}
          maxLength={3}
          onChange={formatCVV}
          onBlur={onBlur}
        />
        <Input
          css={[rightInputStyle, border]}
          placeholder="ZIP"
          value={zipValue}
          maxLength={props.zipLength}
          onChange={formatZip}
          onBlur={onBlur}
        />
      </Input.Group>
      <p css={paragraphStyle}>Encrypted and Secured</p>
    </>
  );
}
