/** @jsxImportSource @emotion/react */
import { Form, Input, Button, Select, Checkbox, Radio } from "antd";
import "antd/dist/antd.css";
import { css } from "@emotion/react";
import {
  rowStyle,
  verticalInputStyle,
  horizontalInputStyle,
  horizontalRightInputStyle,
  selectStyle,
  formStyle,
  StyleSpan,
  redBorderStyle,
} from "./styles";
import PaymentInformation from "../PaymentInformation";
import { Controller, useForm } from "react-hook-form";
import { baseInputStyle } from "../../assets/styles/baseInputStyle";
import { CheckOutlined, WarningOutlined } from "@ant-design/icons";
import { useState } from "react/cjs/react.development";
import RadioGroup from "../RadioGroup";
import CheckboxGroup from "../CheckboxGroup";

export default function HomeForm() {
  const [form] = Form.useForm();

  const [validCode, setValidCode] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur" });
  const onSubmit = (data) => console.log(data);

  const payValidation = (array) => {
    const [card, date, cvv, zip] = array;
    const [month, year] = date.split("/");
    if (
      card.length != 19 ||
      date.length != 5 ||
      cvv.length != 3 ||
      zip.length != 5
    ) {
      return "Please enter all the information";
    }
    if (month > 12 || month <= 0) {
      return "Month are between 1 and 12";
    }
    return true;
  };

  const checkCode = (value) => {
    const codes = ["prom", "youpidou", "yolo"];

    if (codes.includes(value)) {
      setValidCode(true);
    } else {
      setValidCode(false);
    }
  };

  const technologiesOptions = [
    { label: "2G", value: "2G" },
    { label: "3G", value: "3G" },
    { label: "4G LTE", value: "4G" },
    { label: "CAT-M", value: "CAT" },
  ];

  const dataOptions = [
    { label: "0-50 MB", value: "0-50 MB" },
    { label: "50-250 MB", value: "50-250 MB" },
    { label: "250 MB-1 GB", value: "250 MB-1 GB" },
    { label: "1GB+", value: "1GB+", disabled: true },
  ];

  const { Option } = Select;

  return (
    <Form
      form={form}
      layout="vertical"
      requiredMark={false}
      css={formStyle}
      onFinish={handleSubmit(onSubmit)}
    >
      <Controller
        control={control}
        name="email"
        rules={{ required: true }}
        render={({ field: { value, name, onChange, onBlur } }) => (
          <Form.Item htmlFor="email" name={name} label="Email Address" required>
            <Input
              id="email"
              type="email"
              css={[baseInputStyle, errors.email && redBorderStyle]}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              suffix={
                errors.email && (
                  <WarningOutlined
                    css={css`
                      color: red;
                    `}
                  />
                )
              }
            />
            {errors.email && errors.email.type === "required" && (
              <StyleSpan>Please enter your email address</StyleSpan>
            )}
          </Form.Item>
        )}
      />

      <Form.Item
        htmlFor="fullName"
        css={rowStyle}
        name="name"
        label="Full name"
        required
      >
        <Input.Group>
          <Controller
            control={control}
            name="firstName"
            rules={{ required: true }}
            render={({ field: { value, name, onChange, onBlur } }) => (
              <Input
                id="fullName"
                css={[horizontalInputStyle, errors.firstName && redBorderStyle]}
                placeholder="First Name"
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                suffix={
                  errors.firstName && (
                    <WarningOutlined
                      css={css`
                        color: red;
                      `}
                    />
                  )
                }
              />
            )}
          />
          <Controller
            control={control}
            name="lastName"
            rules={{ required: true }}
            render={({ field: { value, name, onChange, onBlur } }) => (
              <Input
                css={[
                  horizontalRightInputStyle,
                  errors.lastName && redBorderStyle,
                ]}
                placeholder="Last Name"
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                suffix={
                  errors.lastName && (
                    <WarningOutlined
                      css={css`
                        color: red;
                      `}
                    />
                  )
                }
              />
            )}
          />
          {((errors.firstName && errors.firstName.type === "required") ||
            (errors.lastName && errors.lastName.type === "required")) && (
            <StyleSpan>Please enter your full name</StyleSpan>
          )}
        </Input.Group>
      </Form.Item>

      <Form.Item name="address" htmlFor="address" label="Address" required>
        <Input.Group>
          <Controller
            control={control}
            name="street"
            rules={{ required: true }}
            render={({ field: { value, name, onChange, onBlur } }) => (
              <Input
                id="address"
                css={[verticalInputStyle, errors.street && redBorderStyle]}
                placeholder="Street Address"
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                suffix={
                  errors.street && (
                    <WarningOutlined
                      css={css`
                        color: red;
                      `}
                    />
                  )
                }
              />
            )}
          />
          <Controller
            control={control}
            name="office"
            rules={{ required: false }}
            render={({ field: { value, name, onChange, onBlur } }) => (
              <Input
                css={baseInputStyle}
                placeholder="Office, Suite, Apt."
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </Input.Group>
        {errors.street && errors.street.type === "required" && (
          <StyleSpan>Please enter your address</StyleSpan>
        )}
      </Form.Item>

      <div css={rowStyle}>
        <Controller
          control={control}
          name="city"
          rules={{ required: true }}
          render={({ field: { value, name, onChange, onBlur } }) => (
            <Form.Item
              css={css`
                width: 49%;
              `}
              name={name}
              htmlFor="city"
              label="City"
              required
            >
              <Input
                id="city"
                css={[baseInputStyle, errors.city && redBorderStyle]}
                placeholder=""
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                suffix={
                  errors.city && (
                    <WarningOutlined
                      css={css`
                        color: red;
                      `}
                    />
                  )
                }
              />
              {errors.city && errors.city.type === "required" && (
                <StyleSpan>Please enter your city name</StyleSpan>
              )}
            </Form.Item>
          )}
        />

        <Controller
          control={control}
          name="state"
          rules={{ required: true }}
          render={({ field: { value, name, onChange, onBlur } }) => (
            <Form.Item
              htmlFor="state"
              css={selectStyle}
              name={name}
              label="State"
              required
            >
              <Select
                id="state"
                css={[baseInputStyle, errors.state && redBorderStyle]}
                placeholder="Please select"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              >
                <Option aria-label="illinois" value="illinois">
                  Illinois
                </Option>
                <Option aria-label="texas" value="texas">
                  Texas
                </Option>
              </Select>
              {errors.state && errors.state.type === "required" && (
                <StyleSpan>Please select your state</StyleSpan>
              )}
            </Form.Item>
          )}
        />

        <Controller
          control={control}
          name="zip"
          rules={{ required: true, minLength: 5, maxLength: 5 }}
          render={({ field: { value, name, onChange, onBlur } }) => (
            <Form.Item
              htmlFor="zip"
              css={css`
                width: 19%;
              `}
              name={name}
              label="Zip"
              required
            >
              <Input
                id="zip"
                css={[baseInputStyle, errors.zip && redBorderStyle]}
                placeholder=""
                maxLength={5}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                suffix={
                  errors.zip && (
                    <WarningOutlined
                      css={css`
                        color: red;
                      `}
                    />
                  )
                }
              />
              {errors.zip && errors.zip.type === "required" && (
                <StyleSpan>Please enter your zip code</StyleSpan>
              )}
              {errors.zip && errors.zip.type === "minLength" && (
                <StyleSpan>Your zip code must be 5 digits</StyleSpan>
              )}
            </Form.Item>
          )}
        />
      </div>

      <Controller
        control={control}
        name="pay"
        rules={{ required: true, validate: payValidation }}
        render={({ field: { value, name, onChange, onBlur } }) => (
          <Form.Item htmlFor="payment" name={name} label="Payment details" required>
            <PaymentInformation
              id="payment"
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              borderColor={errors.pay && "red"}
            />
            {errors.pay && errors.pay.type === "required" && (
              <StyleSpan>Please enter all your information</StyleSpan>
            )}
            {errors.pay && errors.pay.type === "validate" && (
              <StyleSpan>{errors.pay.message}</StyleSpan>
            )}
          </Form.Item>
        )}
      />

      {/*<Controller
        control={control}
        name="tech"
        rules={{ required: true }}
        render={({ field: { value, name, onChange, onBlur } }) => (
          <Form.Item
            htmlFor="techno"
            label="What radio technologies are you using?"
            valuePropName="checked"
            required
          >
            <Checkbox.Group
              id="techno"
              aria-label="What radio technologies are you using?"
              name={name}
              options={technologiesOptions}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            {errors.tech && errors.tech.type === "required" && (
              <StyleSpan>Please select at least one</StyleSpan>
            )}
          </Form.Item>
        )}
            />*/}

<Controller
        control={control}
        name="tech"
        rules={{ required: true }}
        render={({ field: { value, name, onChange, onBlur } }) => (
          <div css={css`display: flex; align-items: flex-end;`}>
            <CheckboxGroup
              id="techno"
              label="What radio technologies are you using?"
              name={name}
              options={technologiesOptions}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            {errors.tech && errors.tech.type === "required" && (
              <StyleSpan>Please select at least one</StyleSpan>
            )}
            </div>
        )}
      />

      {/*<Controller
        control={control}
        name="data"
        rules={{ required: true }}
        render={({ field: { value, name, onChange, onBlur } }) => (
          <Form.Item htmlFor="data" label="How much data ..." required>
            <Radio.Group
              id="data"
              name={name}
              options={dataOptions}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            {errors.data && errors.data.type === "required" && (
              <StyleSpan>Please select one</StyleSpan>
            )}
          </Form.Item>
        )}
            />*/}

      <Controller
        control={control}
        name="data"
        rules={{ required: true }}
        render={({ field: { value, name, onChange, onBlur } }) => (
          <div css={css`display: flex; align-items: flex-end;`}>
            <RadioGroup
              label="How much data ..."
              name={name}
              options={dataOptions}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
            />
            {errors.data && errors.data.type === "required" && (
              <StyleSpan>Please select one</StyleSpan>
            )}
          </div>
        )}
      />

      <Controller
        control={control}
        name="promo"
        rules={{ required: false }}
        render={({ field: { value, name, onChange } }) => (
          <Form.Item name={name} label="Promo code">
            <Input
              css={[
                baseInputStyle,
                validCode &&
                  css`
                    border-color: green;
                  `,
              ]}
              value={value}
              onChange={onChange}
              onBlur={() => checkCode(value)}
              suffix={
                validCode && (
                  <CheckOutlined
                    css={css`
                      color: green;
                    `}
                  />
                )
              }
            />
          </Form.Item>
        )}
      />

      <div css={rowStyle}>
        <Form.Item name="offers" valuePropName="checked">
          <Checkbox defaultChecked={true} disabled>
            Sign me up for annoying offers
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Place Order
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
}
