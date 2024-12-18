
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// @ts-ignore
import Slider from "react-slick";
import Footer from "../Footer";
import Header from "../Header";
import React, { useState } from "react";
function Content() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const linkSections = [
    { text: "Phân hiệu tại TP. Hồ Chí Minh", url: "#" },
    { text: "Các Khoa trực thuộc Trường", url: "#" },
    { text: "Đơn vị chức năng", url: "#" },
    { text: "Công thông tin tuyển sinh", url: "#" },
    { text: "Xét Giáo sư - Phó giáo sư", url: "#" },
    { text: "Công thông tin sinh viên", url: "#" },
    { text: "Đăng ký học", url: "#" },
    { text: ">> Xem thêm", url: "#", highlight: true },
  ];

  const gridItems = [
    { title: "NHÀ TRƯỜNG ĐIỆN TỬ", image: "/public/1.png", link: "#" },
    { title: "THƯ VIỆN", image: "/public/2.jpg", link: "#" },
    { title: "TẠP CHÍ KHOA HỌC", image: "/public/3.jpg", link: "#" },
    { title: "REVIEW 360", image: "/public/4.jpg", link: "#" },
    { title: "CÔNG THÔNG TIN VIỆC LÀM", image: "/public/5.png", link: "#" },
    { title: "LỊCH CÔNG TÁC", image: "/public/6.jpg", link: "#" },
    { title: "ĐỘI NGŨ GIẢNG VIÊN", image: "/public/7.jpg", link: "#" },
    { title: "VĂN BẢN", image: "/public/8.png", link: "#" },
    { title: "THƯ VIỆN MEDIA", image: "/public/9.png", link: "#" },
  ];

  const newsData = [
    {
      day: 7,
      month: 11,
      title: "Trường Đại học Giao thông vận tải tăng 170 bậc trên bảng xếp hạng QS các trường đại học khu vực châu Á...",
      link: "#",
      image: "/public/news1.png",
    },
    {
      day: 6,
      month: 11,
      title: "Trường Đại học Giao thông vận tải thăm sĩ quan dự bị tại Trường Quân sự Quân khu 2",
      link: "#",
      image: "/public/news3.png",
    },
    {
      day: 4,
      month: 11,
      title: "Hội thảo quốc tế lần thứ 3 về Động lực học và Điều khiển ô tô: Phương tiện tự hành",
      link: "#",
      image: "/public/news2.png",
    },
    {
      day: 2,
      month: 11,
      title: "Trường ĐH GTVT trao đổi với các chuyên gia từ Nhật Bản về dự án “Di chuyển thông minh”",
      link: "#",
      image: "/public/news4.png",
    },
  ];
  const announcements = [
    {
      title: "Chế độ chính sách học kỳ I năm học 2024-2025",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "Kết quả xét tuyển sớm đại học chính quy năm 2024",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "Trường ĐH GTVT tuyển sinh thêm ngành mới: 🔥NGÀNH NGÔN NGỮ ANH🔥",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "Điểm chuẩn trúng tuyển Đại học hệ chính quy năm 2024",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "THÔNG BÁO KẾT QUẢ TUYỂN SINH TRÌNH ĐỘ THẠC SĨ ĐỢT 1 NĂM 2024",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "THÔNG BÁO XÉT TUYỂN NGHIÊN CỨU SINH NĂM 2024",
      image:"/public/thongbao.png",
      link: "#",
    },
    {
      title: "THÔNG BÁO ĐIỀU CHỈNH DANH MỤC NGÀNH TUYỂN SINH TRÌNH ĐỘ THẠC SĨ NĂM 2024",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "Thông báo tuyển chọn tổ chức, cá nhân chủ trì thực hiện đề tài KHCN cấp Bộ 2025",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "DANH MỤC TUYỂN SINH TRÌNH ĐỘ THẠC SĨ",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "THÔNG BÁO TUYỂN SINH TRÌNH ĐỘ THẠC SĨ NĂM 2024",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "Quyết định công nhận thí sinh trúng tuyển trình độ thạc sĩ đợt 2 năm 2023",
      image: "/public/thongbao.png",
      link: "#",
    },
    {
      title: "Điểm trúng tuyển các ngành tuyển sinh trình độ thạc sĩ đợt 2 năm 2023",
      image: "/public/thongbao.png",
      link: "#",
    },
  ];
  const events = [
    {
      image: "/public/sk1.jpg",
      title: "Trường Đại học Giao thông vận tải tăng 170 bậc trên bảng xếp hạng QS các trường đại học khu vực châu Á...",
      link: "#",
    },
    {
      image: "/public/sk2.png",
      title: "Ngày hội câu lạc bộ, tổ, đội nhóm trường đại học giao thông vận tải",
      link: "#",
    },
    {
      image: "/public/sk3.jpg",
      title: "Đào tạo thí điểm về tác hại của việc sử dụng rượu bia trong điều khiển phương tiện...",
      link: "#",
    },
  ];
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  return (
    <>
      <Header />
      <div className="flex justify-between gap-5 p-5 content-container">
        <div className="w-2/3 left-section">
          <Slider {...sliderSettings}>
            <div>
              <img src="/public/slide1.png" alt="Slide 1" className="w-full" />
            </div>
            <div>
              <img src="/public/slide2.png" alt="Slide 2" className="w-full" />
            </div>
            <div>
              <img src="/public/slide3.png" alt="Slide 3" className="w-full" />
            </div>
          </Slider>
        </div>
        <div className="w-1/3 p-5 bg-blue-900 text-white rounded-md right-section">
          <div className="mb-2 text-lg font-bold right-header">CÁC KHOA - VIỆN - ĐƠN VỊ THUỘC TRƯỜNG:</div>
          <div className="grid grid-cols-2 gap-2 mb-16 link-list">
            {linkSections.map((link, index) => (
              <a key={index} href={link.url} className={`text-sm ${link.highlight ? "text-yellow-400" : ""} link-item`}>
                {link.text}
              </a>
            ))}
          </div>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {gridItems.map((item, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer transform hover:scale-100 transition-transform duration-300"
                >
                  <a href={item.link}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-20 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                      <h3 className="text-white text-center text-sm font-bold">{item.title}</h3>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 news-section">
        <h2 className="mb-5 text-2xl font-bold text-yellow-400 section-title text-center">Tin nổi bật</h2>
        <div className="grid grid-cols-2 gap-5 news-grid">
          {newsData.map((news, index) => (
            <div key={index} className="flex items-center justify-between p-5 bg-white rounded-md shadow-md news-item">
              <div className="flex flex-col p-2 news-content">
                <div className="flex flex-col items-center text-yellow-400 date">
                  <div className="text-sm month">Tháng {news.month}</div>
                  <div className="text-lg font-bold day">{news.day}</div>
                </div>
                <div className="mt-2 content">
                  <h3 className="text-sm text-gray-800">{news.title}</h3>
                  <a href={news.link} className="text-sm text-yellow-400">đọc tiếp →</a>
                </div>
              </div>
              <img src={news.image} alt={news.title} className="news-image w-40 h-auto rounded-r-md" />
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center mt-6">Thông báo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="flex bg-white shadow-sm rounded-md overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
            <a href={item.link} className="flex items-center p-2 gap-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <h3 className="text-sm font-medium text-gray-800 leading-tight hover:text-orange-500 transition-colors duration-200">
                {item.title}
              </h3>
            </a>
          </div>
        ))}
      </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center justify-center py-8 gap-4 max-w-5xl mx-auto">
      {/* Text Section */}
      <div className="bg-blue-800 text-white p-8 lg:w-1/3 flex items-center">
        <div>
          <p className="mb-6 italic">
            Trường Đại học Giao thông vận tải hướng tới đào tạo người học trở thành công dân toàn cầu, có tinh thần dân tộc và trách nhiệm quốc tế.
          </p>
          <p className="mb-6">
            Nhà trường áp dụng phương pháp giáo dục tích cực, học đi đôi với hành, kiến tạo môi trường giúp người học xây dựng và rèn luyện ý thức tự học suốt đời, khả năng thích ứng với mọi hoàn cảnh nhằm phát huy tốt nhất tiềm năng và khả năng sáng tạo.
          </p>
          <p className="italic">
            Nhà trường xác định người học là trung tâm, người thầy truyền cảm hứng.
          </p>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="lg:w-2/3">
        <img
          src="/public/gtvt.jpg"
          alt="Vision"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
    <div className="py-12">
      <div className="max-w-6xl mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-900">Sự kiện</h2>
        <button className="mt-4 px-4 py-2 bg-white border border-blue-900 text-blue-900 font-medium rounded hover:bg-blue-900 hover:text-white transition duration-300">
          Xem chi tiết
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden w-96 mx-auto">
            <img
              src={event.image}
              alt={`Event ${index + 1}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800">{event.title}</h3>
              <a
                href={event.link}
                className="text-yellow-600 mt-2 inline-block hover:text-yellow-800 text-sm"
              >
                Xem chi tiết
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
      <Footer />
    </> 
  );
}

export default Content;
