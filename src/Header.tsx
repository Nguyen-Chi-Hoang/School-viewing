function Header() {
  // Kiểm tra xem token có tồn tại trong localStorage hay không
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    // Xóa token khỏi localStorage để đăng xuất
    localStorage.removeItem("token");
    // Điều hướng người dùng đến trang login hoặc trang chủ sau khi logout
    window.location.href = "/login"; // Hoặc dùng navigate trong React Router nếu cần
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b-2 border-gray-300">
      <div className="flex items-center">
        <img src="/public/logo.png" alt="Logo" className="w-20 mr-4" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-blue-900 mb-1">
            TRƯỜNG ĐẠI HỌC GIAO THÔNG VẬN TẢI
          </h1>
          <span className="text-lg text-yellow-500 tracking-wider">
            UNIVERSITY OF TRANSPORT AND COMMUNICATIONS
          </span>
        </div>
      </div>
      <div className="flex space-x-4">
        <a
          href="/"
          className="relative text-gray-800 text-base px-2 py-1 rounded transition-all duration-300 hover:text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </a>
        <a
          href="/3dmap"
          className="relative text-gray-800 text-base px-2 py-1 rounded transition-all duration-300 hover:text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
        >
          360 walk through
        </a>

        {token ? (
          <a
            href="#"
            onClick={handleLogout}
            className="relative text-gray-800 text-base px-2 py-1 rounded transition-all duration-300 hover:text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Logout
          </a>
        ) : (
          <a
            href="/login"
            className="relative text-gray-800 text-base px-2 py-1 rounded transition-all duration-300 hover:text-blue-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
}
export default Header;
