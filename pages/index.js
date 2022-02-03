import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import { Form, Input, Button, Select, Checkbox, Radio } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'

export default function Home() {

  const [form] = Form.useForm();

  const checkOptions = [
    {label: "2G", value: "2G"},
    {label: "3G", value: "3G"},
  ];

  const radioOptions = [
    {label: "0-50 MB", value: "0-50 MB"},
    {label: "50-250 MB", value: "50-250 MB"},
    {label: "1GB+", value: "1GB+", disabled: true}
  ]

  const { Option } = Select;

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
    >
      <Form.Item label="Email Address" required>
        <Input placeholder="" />
      </Form.Item>

      <Form.Item label="Full name" required>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </Form.Item>

      <Form.Item label="Address" required>
        <Input placeholder="Street Address" />
        <Input placeholder="Office, Suite, Apt." />
      </Form.Item>

      <div>
        <Form.Item label="city" required>
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="State" required>
          <Select placeholder="Please select">
            <Option value="illinois">Illinois</Option>
            <Option value="texas">Texas</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Zip" required>
          <Input placeholder=""  />
        </Form.Item>
      </div>

      <Form.Item label="Payment details">
        <Input.Group compact>
          <Input placeholder="0000 0000 0000 0000" maxLength={16} prefix={<LockOutlined />}/>
          <Input placeholder="MM/YY"/>
          <Input placeholder="CVV"/>
          <Input placeholder="ZIP"/>
        </Input.Group>
      </Form.Item>

      <Form.Item label="What radio technologies are you using?" required>
        <Checkbox.Group options={checkOptions}/>
      </Form.Item>

      <Form.Item label="How much data ..." required>
        <Radio.Group options={radioOptions}/>
      </Form.Item>

      <Form.Item name="promo" label="Promo code" hasFeedback validateStatus="success">
        <Input />
      </Form.Item>

      <div>
        <Form.Item name="offers">
          <Checkbox defaultChecked={true} disabled>Sign me up for annoying offers</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Place Order</Button>
        </Form.Item>       
      </div>

    </Form>
    
  )
}
