import React, { useState } from "react";
import "./Uygulamalar.css"
import { Link } from "react-router-dom";


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import analiz from "../../assets/analiz.png";
import swipeImg from "../../assets/swipeImg.png"
import imgswiper from "../../assets/imgswiper.png"
import photo from "../../assets/photo2.png"

const Uygulamalar = () => {
    
    const [swiperRef, setSwiperRef] = useState(null);
    let appendNumber = 4;
    let prependNumber = 1;

    const prepend2 = () => {
      swiperRef.prependSlide([
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      ]);
    };
  return (
    <div>
      <div className="section1">
        <div className="conteiner">
          <div className="block1">
            <div className="topText text-[#12303A;] text-center py-[20px]">
              <h1 className="text-[24px] ">UYGULAMALAR</h1>
              <p>
                <Link to="/">ANASAYFA </Link>/{" "}
                <Link to="/kurumsal">KURUMSAL</Link>
              </p>
            </div>

            <div className="leftRights flex flex-wrap justify-around  ">
              <div className="left py-[100px]">
                <img src={analiz} alt="" />
              </div>

              <div className="righttt  py-[50px] ">
                <div className="txtt sm:text-center lg:text-start">
                  <h1 className="text-[#23697B] text-[44px]">
                    Uygulama <span className="font-bold">Süreci</span>
                  </h1>

                  <p className="text-[#12303A] text-[22px] py-[20px]">
                    Kaliteli, yenilikçi ve farklı ürünler üreten ve birçok{" "}
                    <br /> alanda hizmet veren ürün yelpazesi ile..
                  </p>

                  <div className="text-[16px] sm:text-center lg:text-start m-auto">
                    <p className="p11 py-[15px]">
                      B1, B2 ve B3 yanmazlık sınıfı
                    </p>

                    <p className="p11 py-[15px]">
                      %100 katı , VOC içermez, Kokusuz
                    </p>

                    <p className="p11 py-[15px]">
                      “P-SI-080” Ana uygulama alanı ev eşyası ve mobilya
                    </p>

                    <p className="p22 py-[15px]">
                      “P-SI-080” Gıda paketleme sanayisi için uygundur.
                    </p>

                    <p className="p22 py-[15px]">
                      B1, B2 ve B3 yanmazlık sınıfı
                    </p>

                    <p className="p22 py-[15px]">
                      %100 katı , VOC içermez, Kokusuz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sections2">
        <div className="conteiner">
          <div className="block2">
            <p className="text-[#23697B] text-[44px] text-center">
              Uygulama <span className="font-bold">Alanları</span>
            </p>

            <div className="swipe">
              <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                // pagination={{
                //   type: "fraction",
                // }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={swipeImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgswiper} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swipeImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgswiper} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swipeImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swipeImg} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                  <img src={imgswiper} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swipeImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgswiper} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swipeImg} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={imgswiper} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={swipeImg} alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="bottomText text-center py-[50px]">
              <p className="text-[#238197] text-[38px] py-[20px]">
                Sağlık Sektöründe Uygulmalar
              </p>

              <p className="text-[22px] text-[#12303A] py-[20px]">
                AR-GE çalışmalarının yalnızca üretim ve üründe sınırlı kalmayıp,
                iş <br /> güvenliği ve iş sağlığı alanlarında da geliştirilmesi
                gereken kimya <br /> sektörü, kurumsal firmalarda yerine
                getirilen, prosedürleri izlenen ve <br /> gelişmeleri takip
                edilen bir kolu haline gelmiş durumda.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="conteiner">
          <div className="block3">
            <div className="pravoLevo">
              <div className="pravo flex flex-wrap justify-around items-center">
                <div className="photo">
                  <img src={photo} alt="" />
                </div>
                <div className="teht sm:py-[10px] md:py-[0]">
                  <p className="text-[30px] text-[#23697B] ">
                    Geleceğe Dönük <br />
                    <span className="text-[#98A2B3]">Uygulamalar</span>
                  </p>
                  <p className="text-[20px] text-[#12303A] py-[30px]">
                    AR-GE çalışmalarının yalnızca üretim ve üründe sınırlı{" "}
                    <br />
                    kalmayıp, iş güvenliği ve iş sağlığı alanlarında da <br />
                    geliştirilmesi gereken kimya sektörü, kurumsal <br />{" "}
                    firmalarda yerine getirilen, prosedürleri izlenen ve <br />{" "}
                    gelişmeleri takip edilen bir kolu haline gelmiş durumda.
                  </p>
                </div>
              </div>

              <div className="levo flex flex-wrap justify-around items-center py-[50px]">
                <div className="teht">
                  <p className="text-[30px] text-[#23697B] text-right">
                    Yüksek Kaliteli <br />
                    <span className="text-[#98A2B3]">Ürünler</span>
                  </p>
                  <p className="text-[20px] text-[#12303A] py-[30px] text-right">
                    AR-GE çalışmalarının yalnızca üretim ve üründe sınırlı{" "}
                    <br />
                    kalmayıp, iş güvenliği ve iş sağlığı alanlarında da <br />
                    geliştirilmesi gereken kimya sektörü, kurumsal <br />{" "}
                    firmalarda yerine getirilen, prosedürleri izlenen ve <br />{" "}
                    gelişmeleri takip edilen bir kolu haline gelmiş durumda.
                  </p>
                </div>
                <div className="photo">
                  <img src={photo} alt="" />
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
};

export default Uygulamalar;
