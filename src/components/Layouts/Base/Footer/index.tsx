import { BsTruck, BsFillTelephoneFill } from "react-icons/bs";
import { FcOvertime } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FaHandshake, FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa";
import { AiFillCopyrightCircle } from "react-icons/ai";
import { BiLogoGooglePlus } from "react-icons/bi";



const Footer = () => {
  return (
    <>
      <div className="">
        <>
          <header className="py-10">Header</header>
          <main className="h-[1000px]">Main</main>


          <footer className="w-full h-auto">

            {/* Vận chuyển */}
            <section className="sestion-server bg-[#fffff0] h-auto w-full p-7">
              <div className="row">
                <div className="md:container md:mx-auto md:flex md:justify-around grid-cols-2">
                  <div className="icon1 flex gap-5 w-[300px] mb-5">
                  <div className="text-[50px]"><BsTruck/></div>
                  <div className="w-full">
                    <p className="font-bold">VẬN CHUYỂN SIÊU TỐC</p>
                    <span>Vận chuyển nội thành HN trong 2 tiếng!</span>
                  </div>
                </div>
                <div className="icon1 flex gap-5 w-[300px] mb-5">
                  <div className="text-[50px]"><FaHandshake/></div>
                  <div className="w-full">
                    <p className="font-bold">Đổi hàng</p>
                    <span>Đổi hàng trong 7 ngày miễn phí!</span>
                  </div>
                </div>
                <div className="icon1 flex gap-5 w-[300px] mb-5">
                  <div className="text-[50px]"><FcOvertime/></div>
                  <div className="w-full">
                    <p className="font-bold">Tiết kiệm thời gian</p>
                    <span>Mua sắm dễ hơn khi online</span>
                  </div>
                </div>
                <div className="icon1 flex gap-5 w-[300px] mb-5">
                  <div className="text-[50px]"><FcHome/></div>
                  <div className="w-full">
                    <p className="font-bold">ĐỊA CHỈ CỬA HÀNG</p>
                    <span>Tòa L, Cao đẳng FPT Polytechnic, Trịnh Văn Bô, Phương Canh, Từ Liêm, Hà Nội. Sđt: 012345678</span>
                  </div>
                </div>
                </div>
              </div>
            </section>

            {/* Điều khoản */}

            <div className="w-full md:p-[100px] p-2 bg-[url('https://bizweb.dktcdn.net/100/347/092/themes/708609/assets/bg_fot.jpg?1688367658721')]">

              Điều lệ
                <div className="md:container md:mx-auto">
                  <div className="md:grid md:grid-cols-4 text-white md:gap-x-5">
                    <div className="">
                    <h3 className="font-bold">THÔNG TIN</h3>
                    <ul className="flex flex-col mt-[20px] gap-y-[10px]">
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Trang chủ</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">ADIDAS</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">NIKE</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">REEBOK</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">ĐỒNG HỒ - PHỤ KIỆN ĐIỆN TỬ</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">QUẦN ÁO - PHỤ KIỆN</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">TPCN Nhật</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">CHÍNH SÁCH</a>
                      </li>
                    </ul>
                    </div>

                    <div className="">
                    <h3 className="font-bold">DANH MỤC SẢN PHẨM</h3>
                    <ul className="flex flex-col mt-[20px] gap-y-[10px]">
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Phụ kiện, Quần áo</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Giày nam</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Giày nữ</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Adidas Fashion Sneaker - Giày thời trang</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Giày đá bóng, Tennis, giày leo núi,...</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Giày chạy, giày đi bộ</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Giày dép trẻ em</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Giày bóng rổ</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">PUMA</a>
                      </li>
                    </ul>
                    </div>

                    <div className="">
                    <h3 className="font-bold">CHÍNH SÁCH</h3>
                    <ul className="flex flex-col mt-[20px] gap-y-[10px]">
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">THÔNG TIN ĐIỆN TỬ</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Chính sách bảo mật</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Chính sách vận chuyển</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Chính sách đổi trả</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Quy định sử dụng</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Hướng dẫn đặt hàng</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Thông tin thanh toán</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Thông tin về JAPANBABY</a>
                      </li>
                      <li>
                        <a className="hover:text-red-500 w-auto" href="">Bảng đánh giá nhận diện tình trạng sản phẩm đã qua sử dụng Nhật Bản</a>
                      </li>
                    </ul>
                    </div>

                    <div className="">
                    <h3 className="font-bold">MAP</h3>
                    <span className="flex flex-col mt-[20px] gap-y-[10px]">
                    <iframe className="md:w-[350px] md:h-[200px] w-[250px] h-[150px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476522.14551574754!2d105.21880715515123!3d21.079480449430076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345515f14a641f%3A0xe7f2a647f98416cb!2sFPT%20Polytechnic!5e0!3m2!1sen!2s!4v1688408180252!5m2!1sen!2s" width="600" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" />
                    </span>
                    </div>
                    
                  </div>
                </div>

                {/* Logo */}
                <div className="mt-[100px]">
                  <img className="mx-auto md:w-[200px] md:h-[50px]" src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-06.png?id=a3fb853b-a3ea-45eb-8af7-adbfca2a1921" alt="" />
                  {/* <p className="text-white">abc</p> */}
                </div>

                {/* Bản quyền */}
                <div className="mt-[50px] md:flex justify-center items-center gap-x-2">
                  <span className="text-white md:text-[30px]"><AiFillCopyrightCircle/></span>
                  <span className="text-white md:text-[30px]">Bản quyền thuộc về </span>
                  <a className="text-red-500 md:text-[30px]" href="">JAPANBABY.VN </a> <span  className="text-white text-[30px]"> | </span> 
                  <span  className="text-white md:text-[30px]"> Cung cấp bởi </span>
                  <a className="text-red-500 md:text-[30px]" href="">Sapo</a>
                </div>
            </div>


            {/* Liên Hệ */}
            <div className="md:container md:flex justify-around mx-auto md:mt-[100px] p-[30px]">
              <div className="flex flex-col mt-5">
                <p className="font-bold text-sm">GỌI MUA HÀNG (9H - 23H)</p>
                <div className="flex items-center gap-x-2 mt-3">
                  <span className="text-red-500"><BsFillTelephoneFill/></span>
                  <a className="text-[40px]" href="">012324435</a>
                </div>
                <p>Tất cả các ngày trong tuần</p>
              </div>

              <div className="flex flex-col mt-5">
                <p className="font-bold text-sm">GỌI KHIẾU NẠI (10H - 23H)</p>
                <div className="flex items-center gap-x-2 mt-3">
                  <span className="text-red-500"><BsFillTelephoneFill/></span>
                  <a className="text-[40px]" href="">012324435</a>
                </div>
                <p>Các ngày trong tuần (Trừ ngày lễ)</p>
              </div>

              <div className="flex flex-col mt-5">
                <p  className="font-bold text-sm">NHẬN ƯU ĐÃI NGAY</p>
                <div className="flex items-center mt-3 gap-x-1">
                  <input className="w-[250px] h-[50px] border-gray-400 border p-[10px]" type="email" placeholder="Nhập email của bạn"/>
                  <button className="text-white bg-red-500 w-[100px] h-[50px] border-gray-400 border p-[10px]">Đăng ký</button>
                </div>
              </div>

              <div className="flex flex-col mt-5">
                <p className="font-bold text-sm">THEO DÕI NGAY</p>
                <div className="text-red-500 flex items-center gap-x-3 mt-3 text-[30px]">
                  <FaFacebookSquare/>
                  <BiLogoGooglePlus/>
                  <FaInstagram/>
                  <FaYoutube/>
                </div>
              </div>
            </div>
          </footer>
        </>
      </div>
    </>
  )
}

export default Footer