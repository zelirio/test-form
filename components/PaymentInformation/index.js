/** @jsxImportSource @emotion/react */
import { Input } from 'antd';
import React from 'react';
import { LockOutlined } from '@ant-design/icons';
import { useState } from 'react/cjs/react.development';
import {leftInputStyle, middleInputStyle, rightInputStyle, paragraphStyle} from "./styles"

PaymentInformation.defaultProps = {
    zipLength : 5
}

export default function PaymentInformation(props) {

  const [cardValue, SetCardValue] = useState("")
  const [dateValue, SetDateValue] = useState("")
  const [cvvValue, SetCvvValue] = useState("")
  const [zipValue, SetZipValue] = useState("")

  const focusNext = (event, value, maxLength) => {
    if(value.length >= maxLength){
        const formular = event.target.form;
        const index = [...formular].indexOf(event.target)
        formular.elements[index + 1].focus()
    }
  }

  const formatCardNumber = event => {
    const value = event.target.value
    const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')
  
    const formatted = onlyNumbers.replace(regex, (regex, $1, $2, $3, $4) =>
    [$1, $2, $3, $4].filter(group => !!group).join(' '))
    SetCardValue(formatted)

    focusNext(event, formatted, 19)
  }

  const formatDate = event => {
    const value = event.target.value
    const regex = /^(\d{0,2})(\d{0,2})$/g
    const onlyNumbers = value.replace(/[^\d]/g, '')
  
    const formatted = onlyNumbers.replace(regex, (regex, $1, $2) =>
    [$1, $2].filter(group => !!group).join('/'))

    if(formatted.length == 2 && dateValue.length <  formatted.length || dateValue.length == 2 && formatted.length == 2){
        formatted += "/"
    }

    SetDateValue(formatted)

    focusNext(event, formatted, 5)
  }

  const formatCVV = event => {
    const value = event.target.value
    const onlyNumbers = value.replace(/[^\d]/g, '')
  
    SetCvvValue(onlyNumbers)

    focusNext(event, value, 3)
  }

  const formatZip = event => {
    const value = event.target.value
    const onlyNumbers = value.replace(/[^\d]/g, '')
  
    SetZipValue(onlyNumbers)
  }

  return (
    <>
      <Input.Group compact>
        <Input css={leftInputStyle} placeholder="0000 0000 0000 0000" value={cardValue} maxLength={19} onChange={formatCardNumber} prefix={<LockOutlined />}/>
          <Input css={middleInputStyle} placeholder="MM/YY" value={dateValue} maxLength={5} onChange={formatDate} />
          <Input css={middleInputStyle} placeholder="CVV" value={cvvValue} maxLength={3} onChange={formatCVV}/>
          <Input css={rightInputStyle} placeholder="ZIP" value={zipValue} maxLength={props.zipLength} onChange={formatZip}/>
        </Input.Group>
    <p css={paragraphStyle}>Encrypted and Secured</p>
    </>
    );
}
