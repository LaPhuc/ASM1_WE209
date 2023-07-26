import type { FormInstance } from "antd";
import { Button, Form, Input, Space, Typography } from "antd";
import React from "react";

const SubmitButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const AddProduct = () => {
  const [form] = Form.useForm();
  return (
    <>
    <Form className="xl:max-w-[1200px] mx-auto lg:max-w-[1024px] md:max-w-[768px] max-w-[640px] px-3 md:p-0" form={form} name="validateOnly" layout="vertical" autoComplete="off" >
        <Typography className="text-red-500">a</Typography>
      <Form.Item  name="name" label="Name" rules={[{ required: true }]}>
        <Input/>
      </Form.Item>
      <Form.Item name="age" label="Age" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item>
        <Space>
          <SubmitButton form={form} />
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
    </>
  );
};

export default AddProduct;
