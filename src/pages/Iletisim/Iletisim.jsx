import React from 'react'

import "./Iletisim.css"

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";

import logo3 from "../../assets/LOGO3.png"
import social from "../../assets/social.png"
import { Link } from 'react-router-dom';
const Iletisim = () => {
  return (
    <div>
      <div className="sectionn1">
        <div className="conteiner">
          <div className="block1">
            <div className="topText text-[#12303A] text-center py-[50px]">
              <h1 className="text-[24px] ">ÜRÜNLERİMİZ</h1>
              <p>
                <Link to="/">ANASAYFA </Link>/
                <Link to="/urunler">ÜRÜNLERİMİZ</Link>
              </p>
            </div>

            <div className="levopravo sm:grid sm:grid-cols-1 md:grid-cols-2 py-[20px]">
              <div className="adress py-[50px] px-[50px]">
                <img src={logo3} alt="" />

                <p className="text-[white] text-[22px] py-[10px]">
                  Monokim Kimya San. Tic. Ltd. Şti
                </p>
                <hr />

                <div className="us py-[20px] text-white">
                  <div className="item  flex py-[5px] ">
                    <div className="ma mr-[20px]">
                      <LocalPhoneIcon
                        fontSize="small"
                        sx={{ color: "white" }}
                      />
                    </div>
                    <div className="txt">
                      <p>+90 536 416 59 49</p>
                    </div>
                  </div>
                  <div className="items flex py-[5px] ">
                    <div className="ma mr-[20px]">
                      <PhoneAndroidIcon
                        fontSize="small"
                        sx={{ color: "white" }}
                      />
                    </div>
                    <div className="txt">
                      <p>+90 533 337 31 25</p>
                    </div>
                  </div>
                  <div className="items flex py-[5px] ">
                    <div className="ma mr-[20px]">
                      <MailOutlineIcon
                        fontSize="small"
                        sx={{ color: "white" }}
                      />
                    </div>
                    <div className="txt">
                      <p>info@monokim.com</p>
                    </div>
                  </div>
                  <div className="items flex py-[5px] ">
                    <div className="ma mr-[20px]">
                      <FmdGoodIcon fontSize="small" sx={{ color: "white" }} />
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

                <hr />
                <div className="social flex gap-10 py-[10px]">
                  <img src={social} alt="" />
                </div>
              </div>

              <div className="collback py-[20px]">
                <p className="text-[30px] text-white text-center py-[20px]">
                  İletişim Formu
                </p>

                <div className="inps text-center text-white">
                  <div className="inpNameSurename sm:grid sm:grid-cols-1   md:grid-cols-2  justify-center ">
                    <div className="Name sm:py-[20px] md:py-[0px]">
                      <input
                        type="text"
                        placeholder=" Ad"
                        className="bg-[#27A1B3] border-[1px] py-[10px] rounded-xl outline-none "
                      />
                    </div>
                    <div className="Surename">
                      <input
                        type="text"
                        placeholder=" Soyad"
                        className="bg-[#27A1B3] border-[1px] py-[10px] rounded-xl outline-none"
                      />
                    </div>
                  </div>
                  <div className="inpPhonePost sm:grid sm:grid-cols-1   md:grid-cols-2 py-[20px] justify-center  ">
                    <div className="phone sm:py-[20px] md:py-[0px]">
                      <input
                        type="text"
                        placeholder=" Telefon"
                        className="bg-[#27A1B3] border-[1px] py-[10px] rounded-xl text-white outline-none "
                      />
                    </div>
                    <div className="post">
                      <input
                        type="text"
                        placeholder="E-posta"
                        className="bg-[#27A1B3] border-[1px] py-[10px] rounded-xl outline-none"
                      />
                    </div>
                  </div>
                  <textarea
                    
                    cols="50"
                    rows="5"
                    placeholder="   Mesajiniz"
                    className="bg-[#27A1B3] border-[1px] rounded-xl outline-none sm:w-[50%]  md:w-[80%]"
                  ></textarea>

                  <div className="btnTextRadio flex flex-wrap justify-around py-[10px]">
                    <div className="radioText flex items-center gap-5">
                      <div className="inpu">
                        <input type="radio" />
                      </div>
                      <div className="txxxt">
                        <p className="text-xs text-white">
                          Aydınlatma Metni’ni Okudum. Kabul ediyorum.
                        </p>
                      </div>
                    </div>

                    <div className="btm sm:py-[20px] md:py-[0]">
                      <button className="btns text-white py-[10px] px-[10px]">
                        GÖNDER <span>&#8594;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iletisim