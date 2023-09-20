import React from 'react'
import "./Layout.css"
import { Link, Outlet } from 'react-router-dom';
import logo from "../../src/assets/logo.png";
import items from "../assets/items.png";
import icons from "../assets/icons.png"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { BiLogoFacebook } from "react-icons/bi"
import { BiLogoTwitter } from "react-icons/bi"
import { BiLogoYoutube } from "react-icons/bi"
import { BiLogoLinkedin } from "react-icons/bi"
import m from "../assets/m.png"


export const Layout = () => {
  return (
    <div>
      <div className="navbar">
        <div className="block1 sm:flex flex-wrap justify-around items-center sm:py-[60px] md:py-[20px]">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="items">
            <Link to="/urunler">
            <img src={items} alt="" />
            </Link>
          </div>

          <div className="item sm:ml-[50px] flex  ">
            <ul className="flex flex-wrap gap-5 mt-[11px] ">
              <Link to="/">
                <li>Kurumsal</li>
              </Link>
              <Link to="/uygulamalar">
                <li>Uygulamalar</li>
              </Link>
              <Link to="/contact">
                <li>Kaynaklar</li>
              </Link>
              <li>Haberler</li>
            </ul>

            <div className="lang sm:block  md:flex md:py-[0px]">
              <select className=" sm:py-[10px] flex md:py-[0px] items-center  mx-[20px]">
                <option>tr</option>
                <option>en</option>
              </select>

              <div className="btn ">
                <button className="flex py-[10px] px-[25px] bg-blue-500 text-white gap-4 rounded-[5px]">
                  <div className="img">
                    <img src={icons} alt="" />
                  </div>
                  Iletisim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <footer className="sm:grid grid-cols-1 justify-items-center  md:grid-cols-2 pt-[50px]">
        <div className="left">
          <div className="blocks sm:grid sm:grid-cols-1 sm:text-center md:grid-cols-3 md:text-start gap-10">
            <div className="block1 ">
              <img src={logo} alt="" />
              <div className="us py-[20px]">
                <div className="item  flex py-[5px] ">
                  <div className="ma mr-[20px]">
                    <LocalPhoneIcon fontSize="small" color="primary" />
                  </div>
                  <div className="txt">
                    <p>+90 536 416 59 49</p>
                  </div>
                </div>
                <div className="items flex py-[5px] ">
                  <div className="ma mr-[20px]">
                    <PhoneAndroidIcon fontSize="small" color="primary" />
                  </div>
                  <div className="txt">
                    <p>+90 533 337 31 25</p>
                  </div>
                </div>
                <div className="items flex py-[5px] ">
                  <div className="ma mr-[20px]">
                    <MailOutlineIcon fontSize="small" color="primary" />
                  </div>
                  <div className="txt">
                    <p>info@monokim.com</p>
                  </div>
                </div>
                <div className="items flex py-[5px] ">
                  <div className="ma mr-[20px]">
                    <FmdGoodIcon fontSize="small" color="primary" />
                  </div>
                  <div className="txt text-center">
                    <p>
                      Suadiye Mah. Bağdat Cad.
                      <br /> No:399/1/1 34740
                      <br /> Kadıköy İSTANBUL
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block2">
              <h1 className="text-[#27A1B3] py-[10px]">HIZLI MENÜ</h1>
              <div className="items2">
                <p>Ürünler</p>
                <p>Kurumsal </p>
                <p>Uygulamalar</p>
                <p> Kaynaklar</p>
                <p>İletişim</p>
              </div>
            </div>
            <div className="block3">
              <h1 className="text-[#27A1B3] py-[10px]">KURUMSAL</h1>
              <div className="items2">
                <p>Gizlilik Politikası</p>
                <p>Çerezler </p>
                <p>Aydınlatma Metni</p>
                <p> Kaynaklar</p>
                <p>İletişim</p>
              </div>
              <div className="social flex gap-5 py-[20px]">
                <div className="facebook">
                  <BiLogoFacebook />
                </div>
                <div className="twitter">
                  <BiLogoTwitter />
                </div>
                <div className="youtube">
                  <BiLogoYoutube />
                </div>
                <div className="linkedin">
                  <BiLogoLinkedin />
                </div>
              </div>
            </div>
          </div>
          <hr className="w-[100%]" />
          <div className="bottonText flex gap-10 py-[10px]">
            <div className="text1">
              <p>
                <b>© 2023 Monokim.com.tr </b>- Tüm Hakları Saklıdır
              </p>
            </div>

            <div className="text2">
              <p>tr/en</p>
            </div>
          </div>
        </div>

        <div className="right sm:w-[400px] h-[363px] sm:text-center sm:pl-[10px] md:w-[100%] flex-shrink-0 md:pl-[40px] pt-[50px]">
          <div className="h1 text-[30px]">
            <h1>Son Gelişmelerden </h1>
            <h1 className="font-bold">Haberdar Olun</h1>

            <div className="inpBtn sm:block lg:flex  gap-5  py-[20px]">
              <input
                type="text"
                className="outline-none bg-gray-300 rounded-lg my-[10px]"
              />

              <button className="sm:ml-[100px] md:ml-[0px] flex items-center text-lg py-[5px] px-[10px] bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-xl">
                GÖNDER →
              </button>
            </div>

            <div className="chekText flex gap-[10px] ">
              <input type="radio" />
              <p className="text-xs text-gray-500">
                Aydınlatma Metni’ni Okudum. Kabul ediyorum.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
