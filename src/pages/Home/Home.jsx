import React from "react";
import "./Home.css"
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoYoutube } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../../assets/image1.png"
import mause from "../../assets/mause.png"
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import imgCenter from "../../assets/imgCenter.png"
const Home = () => {
  return (
    <div>
      <div className="section1">
        <div className="conteiner">
          <div className="block1 sm:grid sm:grid-cols-1 md:grid-cols-2 justify-items-center">
            <div className="left">
              <div className="txt1">
                <h1 className="text-[44px] py-[10px]">
                  POLİÜRETAN SİSTEMLER <br />
                  <span className="text-orange-500">ÇÖZÜM ORTAĞINIZ</span>
                </h1>
              </div>
              <div className="btn flex gap-10">
                <button className="btn1 py-[10px] px-[10px]">
                  DETAY <span>&#8594;</span>
                </button>

                <button className="btn2 text-[#245766]">İLETİŞİM</button>
              </div>

              <div className="text  lg:pt-[150px]">
                <p className="text-xs text-[#475467] py-[10px]">
                  Müşterilerimizin kaliteli ve güvenilir ürünlere sahip olmaları{" "}
                  <br />
                  için standartlarımızı en yüksek seviyede.
                </p>

                <div className="textArrow flex items-center gap-20">
                  <p className="text-[#919191] text-[18px] py-[10px]">
                    İZOSİYANATLAR
                  </p>
                  <span className="text-[#919191]">&#8594;</span>
                </div>
                <hr className="w-[25%]" />

                <p className="p1 py-[10px]">
                  Hem kendi ekibimiz içinde hem de müşterilerimize karşı her{" "}
                  <br />
                  zaman şeffaflıktan yana olduk.
                </p>

                <p className="text-gray-200  py-[10px]">KURUMSAL</p>
              </div>
            </div>

            <div className="right1">
              <img src={img1} alt="" />
              {/* <img src={imgCenter} alt="" className="relative right-[50px] bottom-[100px]" /> */}
              <div className="socialMause flex gap-10 justify-center">
                <div className="socil flex gap-10 py-[10px] ">
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
                  <p className="text2">Aşağı Kaydır</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="conteiner">
          <div className="blocki2 sm:grid sm:grid-cols-1 md:grid-cols-2 justify-items-center gap-10 py-[50px]">
            <div className="left sm:grid sm:grid-cols-1 md:grid-cols-2 py-[50px] gap-5">
              <div className="block2 ">
                <p className="text-white text-[30px]">
                  Kaliteli, yenilikçi ve <br />
                  <span className="underText">
                    Farklı Ürünler <br /> Üretiyoruz.
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
                      <p className="text-white">Ülke</p>
                    </div>
                  </div>
                  <div className="porag2 text-gray-400">
                    <div className="tex text-[60px] font-bold">
                      <p>100+</p>
                    </div>
                    <div className="teext text-center">
                      <p>Müşteri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right3">
              <div className="prg1">
                <p className="text-white text-[20px] py-[50px]">
                  Müşterilerimizin kaliteli ve <br /> güvenilir ürünlere sahip
                  olmaları <br />
                  için standartlarımızı en yüksek <br /> seviyede tutuyoruz. Hem
                  kendi <br />
                  ekibimiz içinde hem de <br /> müşterilerimize karşı her zaman{" "}
                  <br />
                  şeffaflıktan yana olduk. <br />
                </p>
              </div>
              <div className="prg2">
                <p className="text-gray-500 text-[20px]">
                  Bir numaralı önceliğimiz <br /> olan müşteri memnuniyetimiz ve{" "}
                  <br />
                  kaliteli ürün politikamız <br /> sayesinde, burada
                  ihtiyaçlarınızın <br />
                  her zaman karşılanacağından <br />
                  emin olabilirsiniz. Bizimle iş <br />
                  yapmayı tercih ettiğiniz her <br /> an avantajlara sahip
                  olacaksınız. <br />
                </p>
              </div>

              <div className="btn py-[40px] text-center text-white">
                <button className="bntKurumsal py-[10px] px-[20px] bg">
                  KURUMSAL <span>&#8594;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="conteiner">
          <div className="block4 py-[50px]">
            <div className="topText flex flex-wrap justify-between items-center">
              <div className="left">
                <div className="porag1">
                  <p className="text-[#98A2B3]">ÜRÜNLER</p>
                </div>
                <p className="por text-[66px]">Ürün Gruplarımız</p>
              </div>
              <div className="right5">
                <p className="text-sm">
                  Bir numaralı önceliğimiz olan müşteri <br /> memnuniyetimiz ve
                  kaliteli ürün politikamız <br /> sayesinde, burada
                  ihtiyaçlarınızın her zaman <br />
                  karşılanacağından emin olabilirsiniz. <br />
                </p>
              </div>
            </div>

            <div className="swiper">
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
