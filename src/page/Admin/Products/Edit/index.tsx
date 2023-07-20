/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Select, Form, Input, Upload } from "antd";
import { IoIosCloudUpload } from "react-icons/io";
import "@/public/css/buttomUpImage.css";
const EditProduct = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (values: any) => {
    console.log("Failed:", values);
  };

  return (
    <>
      <h1 className="md:ml-16  my-12 mt-5 text-3xl font-semibold dark:text-white text-black">
        Cập nhật sản phẩm
      </h1>
      <div className=" mx-auto bg-white dark:bg-[#38383B] p-10 shadow-lg rounded">
        <Form
          className="w-4/5 dark:text-white"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          //   autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            className=""
            label={
              <span className="dark:text-white text-base">Tên sản phẩm</span>
            }
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] hover:border-yellow-300 transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            className=""
            label={
              <span className="dark:text-white text-base">Ảnh sản phẩm</span>
            }
            valuePropName="fileList"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
            // getValueFromEvent={normFile}
          >
            <Upload
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture"
              //   defaultFileList={[...fileList]}
            >
              <Button
                className="dark:text-white border"
                icon={<IoIosCloudUpload className="" />}
              >
                Upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            label={
              <span className="dark:text-white text-base">Thương hiệu</span>
            }
            name="brand"
            rules={[{ required: true, message: "Vui lòng nhập thương hiệu!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] hover:border-yellow-300 transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={
              <span className="dark:text-white text-base">Giá sản phẩm</span>
            }
            name="price"
            rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] hover:border-yellow-300 transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={<span className="dark:text-white text-base">Giảm giá</span>}
            name="discount"
            rules={[{ required: true, message: "Vui lòng nhập giảm giá!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] hover:border-yellow-300 transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={<span className="dark:text-white text-base">Số lượng</span>}
            name="quantity"
            rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] hover:border-yellow-300 transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={<span className="dark:text-white text-base">Mô tả</span>}
            name="descriptions"
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] hover:border-yellow-300 transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={<span className="dark:text-white text-base">Danh mục</span>}
          >
            <Select className="">
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo 1">Demo 1</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className=" transition-colors duration-300 bg-blue-600 text-white"
              size="large"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default EditProduct;
