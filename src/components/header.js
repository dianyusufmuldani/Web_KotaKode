import React, { useState } from "react";

const HeaderApp = () => {
  const [shotDropDown, setShowDropDown] = useState(false);
  return (
    <div
      onMouseLeave={() => setShowDropDown(false)}
      className="w-[100%] bg-white sticky top-0 z-20 h-[70px] flex justify-between border-b-4 border-orange-400 items-center px-20"
    >
      <div className="flex items-center">
        <li className="list-none px-5 pr-20">
          <a href="/">
            <img
              src="https://www.kotakode.com/static/media/kotakode-logo.3befef90.svg"
              width={120}
              height={120}
              className="cursor-pointer"
              alt="Logo"
            />
          </a>
        </li>
        <li className="list-none ">
          <a href="https://www.kotakode.com/about">
            <button className="text-base border border-transparent text-gray-500 font-bold px-5 py-2 hover:border hover:border-green-700 hover:rounded cursor-pointer">
              Tentang
            </button>
          </a>
        </li>
        <li className="list-none relative">
          <a href="https://www.kotakode.com/pertanyaan">
            <button
              onMouseOver={() => setShowDropDown(true)}
              className={
                shotDropDown
                  ? "text-base  font-bold px-5 py-2 text-white bg-green-700 rounded cursor-pointer"
                  : "text-base  text-gray-500 font-bold px-5 py-2 hover:text-white hover:bg-green-700 hover:rounded cursor-pointer"
              }
            >
              Produk
            </button>
          </a>
          {shotDropDown ? (
            <div className="absolute z-10 bg-white rounded-md shadow-md flex flex-col  px-2 py-2 w-[220%] -left-14">
              <a href="https://www.kotakode.com/pertanyaan">
                <button className="hover:bg-blue-200  rounded-md w-[100%] px-2 ">
                  <p className="text-left">
                    <b>Forum Q&A</b>
                  </p>
                  <p className="text-left text-xs text-gray-400">
                    Pertanyaan dan Jawaban
                  </p>
                </button>
              </a>
              <a href="https://www.kotakode.com/blogs">
                <button className="hover:bg-blue-200  rounded-md w-[100%] px-2">
                  <p className="text-left">
                    <b>Blog</b>
                  </p>
                  <p className="text-left text-xs text-gray-400">
                    Diskusi dan Informasi
                  </p>
                </button>
              </a>
              <a href="https://www.kotakode.com/jobs">
                <button className="hover:bg-blue-200  rounded-md w-[100%] px-2">
                  <p className="text-left">
                    <b>Jobs</b>
                  </p>
                  <p className="text-left text-xs text-gray-400">Cari Kerja</p>
                </button>
              </a>
            </div>
          ) : null}
        </li>
        <li className="list-none ">
          <a href="https://www.kotakode.com/faq">
            <button className="text-base  border border-transparent  text-gray-500 font-bold px-5 py-2 hover:border hover:border-green-700 hover:rounded cursor-pointer">
              FAQ
            </button>
          </a>
        </li>
        <li className="list-none ">
          <a href="https://www.kotakode.com/events">
            <button className="text-base  border border-transparent  text-gray-500 font-bold px-5 py-2 hover:border hover:border-green-700 hover:rounded cursor-pointer">
              Events
            </button>
          </a>
        </li>
        <li className="list-none">
          <a href="https://www.kotakode.com/partnership">
            <button className=" text-base  border border-transparent  text-gray-500 font-bold px-5 py-2 hover:border hover:border-green-700 hover:rounded cursor-pointer">
              Partnership
            </button>
          </a>
        </li>
      </div>
      <div className="flex gap-4">
        <li className="list-none">
          <a href="https://www.kotakode.com/users/login">
            <button className="border border-green-700 px-9 py-2 rounded text-base text-green-700">
              Masuk
            </button>
          </a>
        </li>
        <li className="list-none">
          <a href="https://www.kotakode.com/users/signup">
            <button className="border border-green-700 px-9 py-2 rounded text-base text-white bg-green-600">
              Daftar
            </button>
          </a>
        </li>
      </div>
    </div>
  );
};

export default HeaderApp;
