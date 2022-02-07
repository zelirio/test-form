/** @jsxImportSource @emotion/react */
import { Form, Input, Button, Select, Checkbox, Radio } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import { css } from '@emotion/react'
import { baseInputStyle, rowStyle, leftInputStyle, middleInputStyle, rightInputStyle, paragraphStyle, verticalInputStyle, horizontalInputStyle, horizontalRightInputStyle, selectStyle, formStyle } from './styles';
import { useState } from 'react/cjs/react.development';

export default function HomeForm() {

  const [form] = Form.useForm();

  const [cardValue, SetCardValue] = useState("")
  const [dateValue, SetDateValue] = useState("")
  const [cvvValue, SetCvvValue] = useState("")
  const [zipValue, SetZipValue] = useState("")

  const technologiesOptions = [
    {label: "2G", value: "2G"},
    {label: "3G", value: "3G"},
    {label: "4G LTE", value: "4G"},
    {label: "CAT-M", value: "CAT"},
  ];

  const dataOptions = [
    {label: "0-50 MB", value: "0-50 MB"},
    {label: "50-250 MB", value: "50-250 MB"},
    {label: "250 MB-1 GB", value: "250 MB-1 GB"},
    {label: "1GB+", value: "1GB+", disabled: true}
  ]

  const { Option } = Select;

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


  return (<Form
    form={form}
    layout="vertical"
    requiredMark={false}
    css={formStyle}
  >
    <Form.Item name="email" label="Email Address" required>
      <Input type="email" css={baseInputStyle} placeholder="" />
    </Form.Item>

    <Form.Item css={rowStyle} name="name" label="Full name" required>
      <Input.Group>
        <Input css={horizontalInputStyle} placeholder="First Name" />
        <Input css={horizontalRightInputStyle} placeholder="Last Name" />
      </Input.Group>
    </Form.Item>

    <Form.Item name="address" label="Address" required>
        <Input.Group>
            <Input css={verticalInputStyle} placeholder="Street Address" />
            <Input css={baseInputStyle} placeholder="Office, Suite, Apt." />
        </Input.Group>
    </Form.Item>

    <div css={rowStyle}>
      <Form.Item css={css`width: 49%`} name="city" label="City" required>
        <Input css={baseInputStyle} placeholder="" />
      </Form.Item>
      <Form.Item css={selectStyle} name="state" label="State" required>
        <Select css={baseInputStyle} placeholder="Please select">
          <Option value="illinois">Illinois</Option>
          <Option value="texas">Texas</Option>
        </Select>
      </Form.Item>
      <Form.Item css={css`width: 19%`} name="zip" label="Zip" required>
        <Input css={baseInputStyle} placeholder=""  />
      </Form.Item>
    </div>

    <Form.Item name="payment" label="Payment details" required>
      <Input.Group compact>
        <Input css={leftInputStyle} placeholder="0000 0000 0000 0000" value={cardValue} maxLength={19} onChange={formatCardNumber} prefix={<LockOutlined />}/>
        <Input css={middleInputStyle} placeholder="MM/YY" value={dateValue} maxLength={5} onChange={formatDate} />
        <Input css={middleInputStyle} placeholder="CVV" value={cvvValue} maxLength={3} onChange={formatCVV}/>
        <Input css={rightInputStyle} placeholder="ZIP" value={zipValue} maxLength={5} onChange={formatZip}/>
      </Input.Group>
    </Form.Item>
    <p css={paragraphStyle}>Encrypted and Secured</p>

    <Form.Item name="technologies" label="What radio technologies are you using?" valuePropName="checked" required>
      <Checkbox.Group options={technologiesOptions}/>
    </Form.Item>

    <Form.Item name="data" label="How much data ..." required>
      <Radio.Group options={dataOptions}/>
    </Form.Item>

    <Form.Item name="promo" label="Promo code">
      <Input css={baseInputStyle} />
    </Form.Item>

    <div css={rowStyle}>
      <Form.Item name="offers" valuePropName="checked">
        <Checkbox defaultChecked={true} disabled>Sign me up for annoying offers</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Place Order</Button>
      </Form.Item>       
    </div>

  </Form>);
}
