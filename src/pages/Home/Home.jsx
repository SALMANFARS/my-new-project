import React from "react";
import "./Home.css"
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper/modules";


import img1 from "../../assets/image1.png"
import mause from "../../assets/mause.png"
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import slider3 from "../../assets/slider3.png";
import slider4 from "../../assets/slider4.png";
import imgCenter from "../../assets/imgCenter.png"
import analiz from "../../assets/analiz.png";
import clock from "../../assets/Clock.png"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Home = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="section1">
        <div className="conteiner">
          <div className="block1 sm:grid sm:grid-cols-1 md:grid-cols-2 justify-items-center py-[40px]">
            <div className="left ml-[10px]">
              <div className="txt1">
                <h1 className="text-[44px] py-[10px]">
                  {t("section1.POLİÜRETAN SİSTEMLER")} <br />
                  <span className="text-orange-500">
                    {" "}
                    {t("section1.ÇÖZÜM ORTAĞINIZ")}
                  </span>
                </h1>
              </div>
              <div className="btn flex gap-10">
                <button className="btn1 py-[10px] px-[10px]">
                  {t("section1.DETAY")} <span>&#8594;</span>
                </button>

                <button className="btn2 text-[#245766]">
                  {t("section1.İLETİŞİM")}
                </button>
              </div>

              <div className="text  lg:pt-[150px]">
                <p className="text-xs text-[#475467] py-[10px]">
                  {t(
                    "section1.Müşterilerimizin kaliteli ve güvenilir ürünlere sahip olmaları için standartlarımızı en yüksek seviyede."
                  )}
                </p>

                <div className="textArrow flex items-center gap-20">
                  <p className="text-[#919191] text-[18px] py-[10px]">
                    {t("section1.İZOSİYANATLAR")}
                  </p>
                  <span className="text-[#919191]">&#8594;</span>
                </div>
                <hr className="w-[25%]" />

                <p className="p1 py-[10px]">
                  {t("section1.key2")}
                  <br />
                  {t("section1.key3")}
                </p>

                <p className="text-gray-200  py-[10px]">
                  {" "}
                  {t("navbar.Kurumsal")}
                </p>
              </div>
            </div>

            <div className="right1">
              <img src={img1} alt="" />
              {/* <img src={imgCenter} alt="" className="relative right-[50px] bottom-[100px]" /> */}
              <div className="socialMause flex gap-10 justify-center">
                <div className="socil flex gap-10 py-[20px] ">
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

                <div className="mause flex items-center gap-5">
                  <img src={mause} alt="" />
                  <p className="text2"> {t("section1.Aşağı Kaydır")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="conteiner">
          <div className="blocki2 sm:grid sm:grid-cols-1 md:grid-cols-2 justify-items-center gap-10 py-[50px]">
            <div className="left ml-[10px] sm:grid sm:grid-cols-1 md:grid-cols-2 py-[50px] gap-5">
              <div className="block2 ">
                <p className="text-white text-[30px]">
                  {t("section1.Kaliteli, yenilikçi ve")} <br />
                  <span className="underText">
                    {t("section1.Farklı Ürünler")} <br />
                    {t("section1.Üretiyoruz")}.
                  </span>
                  <img src={img3} alt="" className="py-[30px]" />
                </p>
              </div>
              <div className="block3 sm:grid grid-cols-1 justify-items-center">
                <img src={img4} alt="" />

                <div className="kalite grid grid-cols-2 justify-items-center gap-10">
                  <div className="txts  justify-center items-center  border-r border-white h-[120px]">
                    <div className="txx">
                      <p className="text-white text-[60px] font-bold mr-[30px]">
                        20+
                      </p>
                    </div>
                    <div className="txx flex justify-center">
                      <p className="text-white">{t("section1.Ülke")}</p>
                    </div>
                  </div>
                  <div className="porag2 text-gray-400">
                    <div className="tex text-[60px] font-bold">
                      <p>100+</p>
                    </div>
                    <div className="teext text-center">
                      <p>{t("section1.Müşteri")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right3">
              <div className="prg1">
                <p className="text-white text-[20px] py-[50px]">
                  {t("section1.Müşterilerimizin kaliteli ve")} <br />{" "}
                  {t("section1.güvenilir ürünlere sahip olmaları")} <br />
                  {t("section1.için standartlarımızı en yüksek")} <br />{" "}
                  {t("section1.ekibimiz içinde hem de")}
                  <br />
                  {t("section1.müşterilerimize karşı her zaman")}
                  <br /> {t("section1.müşterilerimize karşı her zaman")} <br />
                  {t("section1.şeffaflıktan yana olduk.")}
                  <br />
                </p>
              </div>
              <div className="prg2">
                <p className="text-gray-300 text-[20px]">
                  {t("section1.Bir numaralı önceliğimiz")} <br />{" "}
                  {t("section1.olan müşteri memnuniyetimiz ve")}
                  <br />
                  {t("section1.kaliteli ürün politikamız")}
                  <br /> {t("section1.sayesinde, burada ihtiyaçlarınızın")}
                  <br />
                  {t("section1.her zaman karşılanacağından")} <br />
                  {t("section1.emin olabilirsiniz. Bizimle iş")}
                  <br />
                  {t("section1.yapmayı tercih ettiğiniz her")}
                  <br /> {t("section1.an avantajlara sahip olacaksınız.")}
                  <br />
                </p>
              </div>

              <div className="btn py-[40px] text-center text-white">
                <Link to="/kurumsal">
                  <button className="bntKurumsal py-[10px] px-[20px] bg">
                    {t("navbar.Kurumsal")}
                    <span> &#8594;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="conteiner">
          <div className="block4 py-[50px]">
            <div className="topText flex flex-wrap justify-between items-center">
              <div className="left ml-[10px]">
                <div className="porag1">
                  <p className="text-[#98A2B3]">{t("navbar.Ürünler")}</p>
                </div>
                <p className="por text-[66px]">
                  {" "}
                  {t("section1.Ürün Gruplarımız")}
                </p>
              </div>
              <div className="right5">
                <p className="text-sm">
                  {t("section1.Bir numaralı önceliğimiz olan müşteri")}
                  <br />{" "}
                  {t("section1.memnuniyetimiz ve kaliteli ürün politikamız")}
                  <br />{" "}
                  {t(
                    "section1.sayesinde, burada ihtiyaçlarınızın her zaman"
                  )}{" "}
                  <br />
                  {t("section1.karşılanacağından emin olabilirsiniz.")}
                  <br />
                </p>
              </div>
            </div>

            <div className="swiper">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slider2} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="conteiner">
          <div className="block5 py-[50px]">
            <div className="leftRight flex flex-wrap justify-around items-center">
              <div className="left">
                <div className="porag1">
                  <p className="text-[#98A2B3]">{t("section1.HABER & BLOG")}</p>
                  <p className="por text-[66px]">
                    {t("section1.Son Gelişmeler")}
                  </p>
                </div>
              </div>
              <div className="rightt">
                <div className="aroowandBtn flex gap-10 items-center">
                  <div className="arrow flex  gap-5">
                    <div className="arrowRight">
                      <span className="py-[10px] px-[10px] border-[1px] border-black rounded-full">
                        &#8592;
                      </span>
                    </div>
                    <div className="arrowLeft">
                      <span className="py-[10px] px-[10px] border-[1px] border-black rounded-full">
                        &#8594;
                      </span>
                    </div>
                  </div>
                  <div className="btn">
                    <Link to="/haber">
                      <button className="btnN py-[10px] px-[10px] text-white ">
                        {t("section1.Haberler")} <span> &#8594;</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="leftRight flex flex-wrap justify-center gap-20">
              <div className="left">
                <img src={analiz} alt="" className="sm:py-[20px] md:py-[0]" />
                <div className="clock flex gap-5 py-[20px]">
                  <div className="img">
                    <img src={clock} alt="" />
                  </div>
                  <div className="porag2">
                    <p> {t("section1.data")}</p>
                  </div>
                </div>

                <div className="text">
                  <p className="p5 text-[18px]">
                    {t(
                      "section1.Araştırmacılar, elektron mikroskobu için veri biliminden ve yapay"
                    )}
                    <br />
                    {t(
                      "section1.zekâdan yararlanmak için yol haritası çıkarıyor"
                    )}
                    <br />
                    {t("section1.biliminden ve yapay zekâdan yararlanmak")}
                    {t("section1.için yol haritası çıkarıyor")}
                  </p>
                </div>
              </div>

              <div className="right5 grid grid-cols-1 justify-center">
                <div className="blockCha1 first-letter:">
                  <div className="clock flex gap-5 py-[20px]">
                    <div className="img">
                      <img src={clock} alt="" />
                    </div>
                    <div className="porag2">
                      <p>{t("section1.data")}</p>
                    </div>
                  </div>

                  <div className="txt text-[12px]">
                    <p>
                      {t(
                        "section1.Araştırmacılar, elektron mikroskobu için veri biliminden ve yapay"
                      )}
                      <br />
                      {t(
                        "section1.zekâdan yararlanmak için yol haritası çıkarıyor"
                      )}
                    </p>
                  </div>
                  <br />
                  <hr />
                </div>

                <div className="blockCha2  py-[50px]">
                  <div className="clock flex gap-5 py-[20px]">
                    <div className="img">
                      <img src={clock} alt="" />
                    </div>
                    <div className="porag2">
                      <p>{t("section1.data")}</p>
                    </div>
                  </div>

                  <div className="txt text-[12px]">
                    <p>
                      {t(
                        "section1.Araştırmacılar, elektron mikroskobu için veri biliminden ve yapay"
                      )}
                      <br />
                      {t(
                        "section1.zekâdan yararlanmak için yol haritası çıkarıyor"
                      )}
                    </p>
                  </div>
                  <br />
                </div>

                <div className="blockCha3 py-[50px]">
                  <div className="clock flex gap-5 py-[20px]">
                    <div className="img">
                      <img src={clock} alt="" />
                    </div>
                    <div className="porag2">
                      <p>{t("section1.data")}</p>
                    </div>
                  </div>
                  <div className="txt text-[12px]">
                    <p>
                      {t(
                        "section1.Araştırmacılar, elektron mikroskobu için veri biliminden ve yapay"
                      )}
                      <br />
                      {t(
                        "section1.zekâdan yararlanmak için yol haritası çıkarıyor"
                      )}
                    </p>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section5">
        <div className="conteiner">
          <div className="block6 text-center py-[100px] text-white ">
            <p className="text-[40px] font-bold py-[5px]">
              {t("section1.Farklı Ürünler Üretiyor,")}
            </p>
            <p className="text-[40px] py-[5px]">
              {t("section1.Kaliteden Ödün Vermiyoruz.")}
            </p>
            <div className="btn">
              <button className="btn10 py-[10px] px-[20px] bg">
                {t("section1.İLETİŞİME GEÇ")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
