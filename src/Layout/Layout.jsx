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
import TemporaryDrawer from '../Components/Burger';
import { useTranslation } from 'react-i18next';


export const Layout = () => {

  const { t, i18n } = useTranslation()
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }


  return (
    <div>
      <div className="conteiner">
        <div className="navbar">
          <div className="block1 sm:grid sm:grid-cols-2 sm:m-auto  md:flex flex-wrap justify-around items-center sm:py-[60px] md:py-[20px]">
            <div className="logo  sm:ml-[50px] md:m-0">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="burger sm:m-auto md:hidden">
              <TemporaryDrawer />
            </div>
            <div className="items flex justify-center items-center sm:m-auto sm:py-[20px]">
              <div className="imgs">
                <img src={items} alt="" />
              </div>
              <div className="porog">
                <Link to="/urunler">
                  <p>{t("navbar.Ürünler")}</p>
                </Link>
              </div>
            </div>

            <div className="item0 text-gray-500 sm:ml-[50px] flex  ">
              <ul className="sm:hidden md:flex flex-wrap gap-5 mt-[11px] ">
                <Link to="/kurumsal">
                  <li>{t("navbar.Kurumsal")}</li>
                </Link>
                <Link to="/uygulamalar">
                  <li>{t("navbar.Uygulamalar")}</li>
                </Link>
                <Link to="/kaynaklar">
                  <li>{t("navbar.Kaynaklar")}</li>
                </Link>
                <Link to="/haber">
                  <li>{t("navbar.Haberler")}</li>
                </Link>
              </ul>

              <div className="lang  sm:block sm:m-auto  md:flex md:py-[0px]">
                <select
                  onChange={(elem) => changeLanguage(elem.target.value)}
                  className=" sm:py-[10px] sm:mx-[0px] sm:mr-[40px] flex md:py-[0px] items-center md:mx-[20px]"
                >
                  <option value="tr">TR</option>
                  <option value="en">EN</option>
                </select>

                <div className="btn sm:hidden md:flex">
                  <Link to="/iletisim">
                    <button className="btnYakum flex py-[10px] px-[25px]  text-white gap-4 rounded-[5px]">
                      <div className="img">
                        <img src={icons} alt="" />
                      </div>
                      {t("navbar.Iletisim")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <footer className="sm:grid grid-cols-1 justify-items-center  md:grid-cols-2 pt-[50px]">
        <div className="left">
          <div className="blocks flex flex-wrap justify-center  md:text-start gap-10">
            <div className="block1 ">
              <div className="imgLogo">
                <img src={logo} alt="" />
              </div>
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
                      {t("section1.adress")}
                      <br /> No:399/1/1 34740
                      <br /> Kadıköy İSTANBUL
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block2">
              <h1 className="text-[#27A1B3] py-[10px]">
                <p>{t("section1.HIZLI MENÜ")}</p>
              </h1>
              <div className="items2">
                <p>{t("navbar.Ürünler")}</p>
                <p>{t("navbar.Kurumsal")}</p>
                <p>{t("navbar.Uygulamalar")} </p>
                <p>{t("navbar.Kaynaklar")}</p>
                <p> {t("navbar.Iletisim")}</p>
                <p>İletişim</p>
              </div>
            </div>
            <div className="block3">
              <h1 className="text-[#27A1B3] py-[10px]">
                {t("navbar.Kurumsal")}
              </h1>
              <div className="items2">
                <p>{t("section1.Gizlilik Politikası")}</p>
                <p>{t("section1.Çerezler")}</p>
                <p>{t("section1.Aydınlatma Metni")}</p>
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
          <div className="bottonText sm:grid sm:grid-cols-1 md:grid-cols-2 gap-10 py-[10px]">
            <div className="text1 m-auto">
              <p>
                <b>© 2023 Monokim.com.tr </b>-{" "}
                {t("section1.Tüm Hakları Saklıdır")}
              </p>
            </div>

            <div className="text2 m-auto">
              <button onClick={() => changeLanguage("tr")}>tr</button> /
              <button onClick={() => changeLanguage("en")}>en</button>
            </div>
          </div>
        </div>

        <div className="right sm:w-[100%]  sm:text-center sm:pl-[10px] md:w-[100%] flex-shrink-0 md:pl-[40px] pt-[50px]">
          <div className="h1 text-[30px]">
            <h1>{t("section1.Son Gelişmelerder")}</h1>
            <h1 className="font-bold">{t("section1.Haberdar Olun")}</h1>

            <div className="inpBtn sm:block sm  lg:flex  gap-5  py-[20px]">
              <input
                type="text"
                className="outline-none bg-gray-300 rounded-lg my-[10px] sm:w-[70%] lg:w-[50%]"
              />

              <button className="sm:m-auto lg:ml-[0px] flex items-center text-lg py-[5px] px-[10px] bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-xl">
                {t("section1.GÖNDER")} →
              </button>
            </div>

            <div className="chekText flex gap-[10px] ">
              <input type="radio" />
              <p className="text-xs text-gray-500">
                {t("section1.I read the Clarification Text. I agree.")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
