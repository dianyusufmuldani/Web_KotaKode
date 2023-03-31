import React from "react";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";

const FooterApp = () => {
  return (
    <div className="bg-black/80 w-[100%] text-white/80 p-[80px] pb-5 text-sm">
      <div className="grid grid-cols-3">
        <div>
          <h1>BAGIAN DARI:</h1>
          <div className="flex gap-10">
            <a href="https://jakarta.block71.co/">
              <img
                src="https://www.kotakode.com/static/media/block71.f06f3442.svg"
                width={100}
                height={100}
                alt="imagefooter1"
              />
            </a>
            <div className="w-[200px] flex items-center">
              <a href="https://startup.google.com/">
                <img
                  src="https://www.kotakode.com/static/media/Google_for_Startups_logo.3a4b3b10.svg"
                  width={"100%"}
                  height={"100%"}
                  alt="imagefooter2"
                  className="bg-white h-[40px] px-2 py-1 "
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h2>PRODUK</h2>
            <ul className="text-white/40">
              <li>
                <a href="https://www.kotakode.com/pertanyaan">Pertanyaan </a>
              </li>

              <li>
                <a href="https://www.kotakode.com/blogs">Blog</a>
              </li>
              <li>
                <a href="https://www.kotakode.com/users">Pengguna</a>
              </li>
              <li>
                <a href="https://www.kotakode.com/events">Events</a>
              </li>
              <li>
                <a href="https://www.kotakode.com/partnership">Partnership</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>PERUSAHAAN</h2>
            <ul className="text-white/40">
              <li>
                <a href="https://www.kotakode.com/about">About</a>
              </li>
              <li>
                <a href="https://www.kotakode.com/faq">FAQ</a>
              </li>
              <li>
                <a href="https://www.kotakode.com/rules">Rules</a>
              </li>
              <li>
                <a href="https://www.kotakode.com/legal">Legal</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h1>HUBUNGI KAMI</h1>
          <a
            className="text-white/40"
            href="mailto:petertanugraha@kotakode.com"
          >
            petertanugraha@kotakode.com
          </a>
          <br />
          <div className="flex gap-3">
            <a href="http://linkedin.com/company/kotakode">
              <AiFillLinkedin size={25} />
            </a>
            <a href="http://instagram.com/kotakode">
              <AiOutlineInstagram size={25} />
            </a>
            <a href="http://twitter.com/kotakode">
              <AiFillTwitterSquare size={25} />
            </a>
            <a href="http://facebook.com/kotakodeofficial">
              <AiFillFacebook size={25} />
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="flex flex-col items-center text-white/50">
        <p>PT. Kota Digital Nusantara</p>
        <p>Copyright 2020 Kotakode. All rights reserved</p>
        <p>Made with ❤️ in 🇮🇩</p>
      </div>
    </div>
  );
};

export default FooterApp;
