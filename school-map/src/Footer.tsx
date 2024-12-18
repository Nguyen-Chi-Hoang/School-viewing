function Footer() {
  return (
    <div className="bg-blue-900 text-white p-10 text-base leading-relaxed">
      <div className="flex justify-between flex-wrap gap-10">
        <div className="flex-1 min-w-[250px] mr-7">
          <div className="mb-4">
            <img src="/public/logofooter-gtvt.png" alt="Logo" className="w-24 mb-4" />
          </div>
          <div className="space-y-2">
            <p>Địa chỉ: Số 3 phố Cầu Giấy, P.Láng Thượng, Q.Đống Đa, Hà Nội.</p>
            <p>Điện thoại: (84.24) 37663311 - Fax: (84.24) 37666913</p>
            <p>Email: dhgtvt@utc.edu.vn</p>
            <p>
              <strong>PHÂN HIỆU TẠI THÀNH PHỐ HỒ CHÍ MINH</strong>
            </p>
            <p>Địa chỉ: 450-451 Đường Lê Văn Việt, Phường Tăng Nhơn Phú A, TP. Thủ Đức (Quận 9 cũ), TP. Hồ Chí Minh</p>
            <p>Điện thoại: (84.28) 38966798 - Fax: (84.28) 38964736</p>
            <p>Email: info@utc2.edu.vn</p>
            <p>
              Website: <a href="http://phanhieu.utc.edu.vn" className="text-yellow-400 hover:underline">phanhieu.utc.edu.vn</a>
            </p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-10">
          <div>
            <h3 className="font-semibold mb-4">Tiện ích</h3>
            <ul className="list-none space-y-2">
              {['Văn bản', 'Video', 'Thư viện ảnh', 'Lịch công tác', 'Đội ngũ giảng viên'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white opacity-70 hover:opacity-100">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Truy cập nhanh</h3>
            <ul className="list-none space-y-2">
              {['Thư viện', 'Tạp chí Khoa học GTVT', 'Nhà trường điện tử (nội bộ)', 'Văn phòng điện tử (nội bộ)', 'Đăng ký học', 'Bộ Giáo dục & Đào tạo'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-white opacity-70 hover:opacity-100">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 text-center flex flex-col items-center">
          <h3 className="font-semibold mb-3">Trường Đại học Giao thông vận tải</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29792.905824636655!2d105.803421!3d21.028155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab424a50fff9%3A0xbe3a7f3670c0a45f!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBHaWFvIFRow7RuZyBW4bqtbiBU4bqjaQ!5e0!3m2!1svi!2sus!4v1731001552167!5m2!1svi!2sus"
            className="w-[300px] h-[150px] mb-3 rounded-lg border-0"
            title="Map 1"
          ></iframe>
          <h3 className="font-semibold mb-3">Trường Đại học Giao thông vận tải - Phân hiệu Hồ Chí Minh</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31348.40130724622!2d106.794172!3d10.845696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527158a0a5b81%3A0xf45c5d34ac580517!2zUGjDom4gaGnhu4d1IFRyxrDhu51uZyDEkOG6oWkgaOG7jWMgR1RWVCB04bqhaSBUcC4gSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2sus!4v1731001701397!5m2!1svi!2sus"
            className="w-[300px] h-[150px] rounded-lg border-0"
            title="Map 2"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
