import React from "react";
import "./HaberDetay.css";
import { Link } from "react-router-dom";

import linkphoto from "../../assets/LinkPhoto.png";
import chumChi from "../../assets/chumChi.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import clock from "../../assets/Clock.png"

const HaberDetay = () => {
  return (
    <div>
      <div className="section1">
        <div className="conteiner">
          <div className="block1">
            <div className="txtTop py-[50px] sm:text-center lg:text-start">
              <h1 className="text-[#12303A] text-[24px] py-[10px]">
                Araştırmacılar, elektron mikroskobu için veri <br /> biliminden
                ve yapay zekâdan YARARLANIYOR
              </h1>
              <p>
                <Link to="/">ANASAYFA </Link>/{" "}
                <Link to="/haber">HABER & BLOG</Link>
              </p>
            </div>

            <div className="levoPravo sm:grid sm:grid-cols-1 lg:flex   gap-10 ">
              <div className="levo w-[70%] m-auto">
                <img src={linkphoto} alt="" />
                <img src={chumChi} alt="" className="py-[10px]" />
                <p className="text-[18px] text-[#667085] py-[40px]">
                  Faaliyet gösterdiği poliüretan sektörü içinde her geçen gün
                  emin adımlarla ilerleyen ve daima lider bir oyuncu olmayı
                  hedefleyen firmamız, tüm paydaşlarıyla birlikte herkesin
                  kazanacağı dürüst ve saygılı bir ticaret anlayışını
                  benimsemektedir. Müşteri memnuniyeti ve hizmet kalitesini
                  artırabilmek adına modern ve bilimsel gelişmeleri sürekli
                  takip etmekte, kalıcı ve sürekliliği olan çözümler
                  üretmektedir.Faaliyet gösterdiği poliüretan sektörü içinde her
                  geçen gün emin adımlarla ilerleyen ve daima lider bir oyuncu
                  olmayı hedefleyen firmamız, tüm paydaşlarıyla birlikte
                  herkesin kazanacağı dürüst ve saygılı bir ticaret anlayışını
                  benimsemektedir. Müşteri memnuniyeti ve hizmet kalitesini
                  artırabilmek adına modern ve bilimsel gelişmeleri sürekli
                  takip etmekte, kalıcı ve sürekliliği olan çözümler
                  üretmektedir. <br /> <br /> Faaliyet gösterdiği poliüretan
                  sektörü içinde her geçen gün emin adımlarla ilerleyen ve daima
                  lider bir oyuncu olmayı hedefleyen firmamız, tüm paydaşlarıyla
                  birlikte herkesin kazanacağı dürüst ve saygılı bir ticaret
                  anlayışını benimsemektedir. Müşteri memnuniyeti ve hizmet
                  kalitesini artırabilmek adına modern ve bilimsel gelişmeleri
                  sürekli takip etmekte, kalıcı ve sürekliliği olan çözümler
                  üretmektedir.
                </p>

                <div className="btnnn  py-[50px]">
                  <button className="btnUrun py-[10px] px-[20px] text-[white]">
                    DAHA FAZLA
                  </button>
                </div>
              </div>
              <div className="pravo w-[30%] m-auto">
                <div className="blockCha1">
                  <p className="text-[#12303A;] text-center text-[24px]">
                    Öne Çıkan <b> Haberler</b>
                  </p>

                  <div className="img ">
                    <img src={user1} alt="" />
                  </div>

                  <div className="clock flex gap-5 py-[20px]">
                    <div className="img">
                      <img src={clock} alt="" />
                    </div>
                    <div className="porag2">
                      <p>21 Mayıs 2023</p>
                    </div>
                  </div>
                  <p className="text-[text-[22px] font-bold">
                    Araştırmacılar, elektron mikroskobu için <br /> veri
                    biliminden ve yapay zekâdan
                  </p>
                </div>

                <div className="blockCha1 py-[50px]">
                  <div className="img ">
                    <img src={user2} alt="" />
                  </div>

                  <div className="clock flex gap-5 py-[20px]">
                    <div className="img">
                      <img src={clock} alt="" />
                    </div>
                    <div className="porag2">
                      <p>21 Mayıs 2023</p>
                    </div>
                  </div>
                  <p className="text-[text-[22px] font-bold">
                    Araştırmacılar, elektron mikroskobu için <br /> veri biliminden ve
                    yapay zekâdan <br /> yararlanmak için yol haritası çıkarıyor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaberDetay;
