import { Button, Form, Input, Select } from 'antd';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductAdd = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    console.log("base64Image", base64Image);
    navigate("/admin/products");
  };

  const onFinishFailed = (values: any) => {
    console.log("Failed:", values);
  };

  const [base64Image, setBase64Image] = useState<string | null>(null);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setBase64Image(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <h1 className="mt-5 text-3xl font-semibold text-center text-black md:ml-16 md:text-left dark:text-white">
        Thêm sản phẩm
      </h1>
      <div className="bg-white dark:bg-[#38383B] p-10 md:w-[90%] md:ml-16 sm:mx-auto mx-2 mt-5 shadow-lg rounded ">
        <Form
          className="w-4/5 dark:text-white"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label={
              <span className="text-base dark:text-white">Tên sản phẩm</span>
            }
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-base dark:text-white">Ảnh sản phẩm</span>
            }
            name="picture-card"
          >
            <label
              htmlFor="images"
              className="drop-container"
              id="dropcontainer"
            >
              <div
                className={
                  !base64Image
                    ? "flex justify-center flex-col items-center"
                    : "hidden"
                }
              >
                <span className="drop-title">Drop files here</span>
                <p>or</p>
                <input
                  type="file"
                  id="images"
                  accept="image/*"
                  onChange={handleChange}
                />
              </div>
              {base64Image && (
                <label
                  htmlFor="images"
                  className="flex items-center justify-center w-full h-full cursor-pointer"
                >
                  <img className='w-auto h-full' src={base64Image} alt="Selected" />
                </label>
)}
            </label>
          </Form.Item>
          <Form.Item
            label={
              <span className="text-base dark:text-white">Thương hiệu</span>
            }
            name="brand"
            rules={[{ required: true, message: "Vui lòng nhập thương hiệu!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={
              <span className="text-base dark:text-white">Giá sản phẩm</span>
            }
            name="price"
            rules={[{ required: true, message: "Vui lòng nhập giá sản phẩm!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={<span className="text-base dark:text-white">Giảm giá</span>}
            name="discount"
            rules={[{ required: true, message: "Vui lòng nhập giảm giá!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={<span className="text-base dark:text-white">Số lượng</span>}
            name="quantity"
            rules={[{ required: true, message: "Vui lòng nhập số lượng!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            label={<span className="text-base dark:text-white">Mô tả</span>}
            name="descriptions"
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <Input className="dark:hover:border-[#00c6ab] transition-colors duration-300" />
          </Form.Item>
          <Form.Item
            name="cate"
            label={<span className="text-base dark:text-white">Danh mục</span>}
          >
            <Select className="">
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo 1">Demo 1</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              className="text-black transition-colors duration-300 dark:text-white"
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

export default ProductAdd;