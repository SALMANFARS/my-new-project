import React from 'react'
import "./UrunDetay.css"
import { Link } from 'react-router-dom';



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import logo2 from "../../assets/foam logo.png"
import images1 from "../../assets/images1.png";
import images2 from "../../assets/images2.png";
import images3 from "../../assets/images3.png";
import images4 from "../../assets/images4.png";
import ic1 from "../../assets/Group.png"
import ic2 from "../../assets/Group-1.png";
import ic3 from "../../assets/Group-2.png";
import mause2 from "../../assets/mause2.png";
import imgTag from "../../assets/imgTag.png";
import imgTor from "../../assets/imgTor.png";


const UrunDetay = () => {
  return (
    <div>
      <div className="section1-1">
        <div className="conteiner">
          <div className="block1 py-[50px]">
            <div className="txtTop py-[50px] sm:text-center lg:text-start">
              <h1 className="text-[#12303A] text-[24px]">
                SPREY POLİÜRETAN KÖPÜK SİSTEMLER
              </h1>
              <p>
                <Link to="/">ANASAYFA </Link>/{" "}
                <Link to="/urunler">ÜRÜNLER</Link> / POLİÜRE SİSTEMLER
              </p>
            </div>

            <div className="mainbar">
              <div className="levoPravo sm:grid sm:grid-cols-1 lg:grid-cols-2 ">
                <div className="levoo py-[10px]  px-[100px]  my-[50px]">
                  <div className="img">
                    <img src={logo2} alt="" className="py-[20px]" />

                    <p className="text-[#667085] text-[12px] ">
                      Amin sonlu reçine ve izosiyanat prepolimer tepkimesiyle
                      oluşan çok <br /> hızlı kürleşme özelliğine sahip, %100
                      katı ve esnek aromatik saf <br /> poliüre sistemdir.
                    </p>

                    <div className="ul py-[10px]">
                      <li className="">
                        B1, B2 ve B3 yanmazlık sınıfı
                        <br />
                        <br />
                        <hr className="w-[80%]" />
                      </li>

                      <li className=" ">
                        %100 katı , VOC içermez, Kokusuz
                        <br />
                        <br />
                        <hr className="w-[80%]" />
                      </li>
                      <li className="">
                        “P-SI-080” Ana uygulama alanı ev eşyası ve mobilya
                        sanayisidir.
                        <br />
                        <br />
                        <hr className="w-[80%]" />
                      </li>
                      <li className="">
                        “P-SI-080” Gıda paketleme sanayisi için uygundur.
                        <br />
                        <br />
                        <hr className="w-[80%]" />
                      </li>
                      <li className="">
                        Çok hızlı kürleşme ve servise alınabilme
                        <br />
                        <br />
                        <hr className="w-[80%]" />
                      </li>
                      <li className="">
                        %100 katı , VOC içermez, Kokusuz
                        <br />
                        <br />
                        <hr className="w-[80%]" />
                      </li>
                    </div>
                  </div>
                  <div className="btn2  grid sm:grid-cols-1 md:grid-cols-2 gap-10">
                    <button className="btnFirst py-[5px] px-[40px] text-white">
                      PDF <span>&#8595;</span>
                    </button>
                    <button className="btnSecond py-[5px] px-[40px] text-[#238197]">
                      TEKLİF A
                    </button>
                  </div>
                </div>

                <div className="prova py-[0px] my-[0]">
                  <div className="swipe">
                    <Swiper
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src={images1} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={images2} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={images3} alt="" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={images4} alt="" />
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>

              <div className="buttonDiv py-[40px] px-[20px]">
                <div className="chapRost flex justify-between">
                  <div className="chap flex  gap-10 items-center text-white">
                    <div className="blc1 flex gap-2 items-center">
                      <img src={ic1} alt="" />
                      <div className="txxt">
                        <p>Genel Özellikler</p>
                      </div>
                    </div>

                    <div className="blc2 flex gap-2 items-center">
                      <img src={ic2} alt="" />
                      <div className="txxt">
                        <p>Kullanım Yerleri</p>
                      </div>
                    </div>

                    <div className="blc2 flex gap-2 items-center ">
                      <img src={ic3} alt="" />
                      <div className="txxt">
                        <p>Ürün Çeşitleri</p>
                      </div>
                    </div>
                  </div>

                  <div className="rost">
                    <div className="mause flex items-center gap-5 ">
                      <img src={mause2} alt="" />
                      <p className="text2 text-white">Aşağı Kaydır</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section23">
        <div className="conteiner">
          <div className="block23">
            <div className="chapRost2 sm:grid sm:grid-cols-1 lg:grid-cols-2 py-[50px] justify-items-center ">
              <div className="chap relative">
                <div className="img  absolute z-[5] ">
                  <img src={imgTag} alt="" />
                </div>
                <div className="img  ">
                  <img src={imgTor} alt="" />
                </div>
              </div>

              <div className="rost">
                <p className="p10 text-[20px] py-[10px]">EK HİZMETLERİMİZ</p>
                <p className="text-[#238197] text-[30px] font-bold">
                  USTA ve KURULUM DESTEĞİ
                </p>
                <p className="text-[#12303A] text-[16px] py-[20px]">
                  AR-GE çalışmalarının yalnızca üretim ve üründe sınırlı
                  kalmayıp, iş <br /> güvenliği ve iş sağlığı alanlarında da
                  geliştirilmesi gereken kimya <br /> sektörü, kurumsal
                  firmalarda yerine getirilen, prosedürleri izlenen ve <br />{" "}
                  gelişmeleri takip edilen bir kolu haline gelmiş durumda.
                </p>
                <div className="mainText py-[20px] my-[20px] px-[20px] text-[#238197]">
                  <p>Hizmet İçerikleri :</p>
                  <div className="ul2">
                    <li className="py-[5px]">
                      Bina iç ve dış cephe izolasyonu
                    </li>
                    <li className="py-[5px]">Soğuk oda izolasyonu</li>
                    <li className="py-[5px]">
                      Çatı üzeri, çatı arası ve çatı zemini izolasyonu
                    </li>
                    <li className="py-[5px]">Ters tavan izolasyonu</li>
                  </div>
                </div>
                <div className="btnAndbtn sm:flex sm:justify-center items-center lg:justify-around gap-10">
                  <div className="btn5">
                    <button className="btn10 py-[10px] px-[10px] text-white">
                      TEKLİF AL
                    </button>
                  </div>

                  <div className="arrow flex  gap-5">
                    <div className="arrowRight">
                      <span className="py-[10px] px-[10px] border-[1px] border-[#276D7E] rounded-full text-[#276D7E]">
                        &#8592;
                      </span>
                    </div>
                    <p className="text-[#276D7E]">1 / 5</p>
                    <div className="arrowLeft">
                      <span className="py-[10px] px-[10px] border-[1px] border-[#276D7E] rounded-full  bg-[#276D7E] text-white">
                        &#8594;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section1-1">
        <div className="conteiner">
          <div className="block3 py-[50px]">
            <div className="tTop flex flex-wrap justify-around items-center">
              <div className="tT">
                <p className="text-[#23697B] text-[40px]">
                  Diğer <span className="font-bold">Ürünler</span>
                </p>
              </div>

              <div className="arrow flex  gap-5">
                <div className="arrowRight">
                  <span className="py-[10px] px-[10px] border-[1px] border-[#276D7E] rounded-full text-[#276D7E]">
                    &#8592;
                  </span>
                </div>

                <div className="arrowLeft">
                  <span className="py-[10px] px-[10px] border-[1px] border-[#276D7E] rounded-full  bg-[#276D7E] text-white">
                    &#8594;
                  </span>
                </div>
              </div>
            </div>

            <div className="blocks sm:grid sm:grid-cols-1 md:grid-cols-3 gap-10 py-[40px]">
              <div className="blockCha1 text-center ">
                <img src={images1} alt="" className="sm:m-auto md:m-[0]" />

                <p className="text-[#A7A7A7] text-[16px] py-[5px]">
                  Poliüretan Sistemler
                </p>

                <button className="text-[#25272D] text-[24px] py-[5px]">
                  Soğuk Oda Panel Sistemler
                </button>
              </div>

              <div className="blockCha1 text-center">
                <img src={images2} alt="" className="sm:m-auto md:m-[0]" />

                <p className="text-[#A7A7A7] text-[16px] py-[5px]">
                  Poliüretan Sistemler
                </p>

                <button className="text-[#25272D] text-[24px] py-[5px]">
                  Soğuk Oda Panel Sistemler
                </button>
              </div>

              <div className="blockCha1 text-center">
                <img src={images3} alt="" className="sm:m-auto md:m-[0]" />

                <p className="text-[#A7A7A7] text-[16px] py-[5px]">
                  Poliüretan Sistemler
                </p>

                <button className="text-[#25272D] text-[24px] py-[5px]">
                  Soğuk Oda Panel Sistemler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section5">
        <div className="conteiner">
          <div className="block6 text-center py-[100px] text-white ">
            <p className="text-[40px] font-bold py-[5px]">
              Farklı Ürünler Üretiyor,
            </p>
            <p className="text-[40px] py-[5px]">Kaliteden Ödün Vermiyoruz.</p>
            <div className="btn">
              <button className="btn10 py-[10px] px-[20px] bg">
                İLETİŞİME GEÇ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UrunDetay