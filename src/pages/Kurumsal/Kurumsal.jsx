import React from "react";
import "./Kurumsal.css"
import { Link } from "react-router-dom";

import yag from "../../assets/yag.png";
import banka from "../../assets/banka.png";
import target from "../../assets/Target.png";
import mountain from "../../assets/Mountain.png"
import img20 from "../../assets/img20.png";
import img30 from "../../assets/img30.png";
import analiz from "../../assets/analiz.png"
import clock from "../../assets/Clock.png"

const Kurumsal = () => {
  return (
    <div>
      <div className="section1">
        <div className="conteiner">
          <div className="block1 py-[50px]">
            <div className="topText text-[#12303A;] text-center">
              <h1 className="text-[24px] ">KURUMSAL</h1>
              <p>
                <Link to="/">ANASAYFA </Link>/ KURUMSAL
              </p>
            </div>

            <div className="leftEndRight sm:grid sm:grid-cols-1 lg:grid-cols-2 ">
              <div className="left">
                <div className="textAndImg">
                  <p className="sm:text-center lg:text-start text-[#12303A] text-[22px] py-[50px]">
                    Monokim Kimya San. Tic. Ltd. Şti, 2011 yılından <br />{" "}
                    bugüne kazandığı tecrübe ile poliüretan <br /> kimyasalları
                    konusunda sektöre yeni yaklaşımlar <br /> getirmeyi ve bu
                    doğrultuda müşterilerine yeni <br />
                    çözümler sunmayı hedefleyen genç, dinamik, <br /> tecrübeli
                    ve ilkeli bir ekiptir.
                  </p>

                  <p className="sm:text-center lg:text-start text-[16px] text-[#667085] py-[50px]">
                    Faaliyet gösterdiği poliüretan sektörü içinde her <br />{" "}
                    geçen gün emin adımlarla ilerleyen ve daima lider <br /> bir
                    oyuncu olmayı hedefleyen firmamız, tüm <br /> paydaşlarıyla
                    birlikte herkesin kazanacağı dürüst <br />
                    ve saygılı bir ticaret anlayışını benimsemektedir. <br />{" "}
                    Müşteri memnuniyeti ve hizmet kalitesini <br /> artırabilmek
                    adına modern ve bilimsel gelişmeleri <br /> sürekli takip
                    etmekte, kalıcı ve sürekliliği olan <br /> çözümler
                    üretmektedir.
                  </p>
                </div>
              </div>
              <div className="rigght">
                <div className="leftrright sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-5 ">
                  <div className="left">
                    <img
                      src={yag}
                      alt=""
                      className="sm:pt-[50px] sm:ml-[25%] lg:ml-[0] md:pt-[300px] pb-[50px]"
                    />
                  </div>
                  <div className="righht">
                    <img
                      src={banka}
                      alt=""
                      className="sm:ml-[25%] lg:ml-[0] pt-[50px]"
                    />
                    <p className="textBanka text-center py-[50px]">
                      Farklı <br /> Ürünler <br /> Üreten.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="conteiner">
          <div className="block1 py-[50px]">
            <div className="textss text-white py-[50px] flex flex-wrap gap-10 items-center">
              <div className="text1 sm:text-center sm:m-auto lg:text-start lg:m-[0]">
                <p className="text-[50px] sm:text-center lg:text-start">
                  Rakamlarla <br />
                  <b> Monokim</b>
                </p>
              </div>

              <div className="text2 sm:text-center sm:m-auto lg:text-left lg:m-[0]">
                <p className="text-[18px] text-white ">
                  Faaliyet gösterdiği poliüretan sektörü içinde her geçen <br />
                  gün emin adımlarla ilerleyen ve daima lider bir oyuncu <br />
                  olmayı hedefleyen firmamız, tüm paydaşlarıyla birlikte <br />
                  herkesin kazanacağı.
                </p>
              </div>
            </div>
            <div className="textsss  sm: ml-[30%] md:ml-[0]  flex flex-wrap gap-10">
              <div className="countery text-white">
                <div className="nbr ">
                  <p className="font-bold text-[80px]">20+</p>
                </div>
                <div className="cnt ml-[50px]">
                  <p className="text-[24px]">Ülke</p>
                </div>
              </div>
              <div className="border sm:hidden lg:flex "></div>

              <div className="countery2">
                <div className="nbr ">
                  <p className="font-bold text-[80px]">48+</p>
                </div>
                <div className="cnt ml-[50px]">
                  <p className="text-[24px]">Ürün</p>
                </div>
              </div>

              <div className="countery2">
                <div className="nbr ">
                  <p className="font-bold text-[80px]">100+</p>
                </div>
                <div className="cnt ml-[50px]">
                  <p className="text-[24px]">Müşteri</p>
                </div>
              </div>
            </div>
            <hr className="sm:hidden md:flex w-[50%]" />
            <br />
            <div className="textsss2 flex sm:ml-[28%] md:ml-[150px] gap-10">
              <div className="countery2 md:border-r pr-[40px]">
                <div className="nbr ">
                  <p className="font-bold text-[80px]">60+</p>
                </div>
                <div className="cnt ml-[50px]">
                  <p className="text-[24px]">Şehir</p>
                </div>
              </div>

              <div className="countery2">
                <div className="nbr ">
                  <p className="font-bold text-[80px]">14+</p>
                </div>
                <div className="cnt ml-[50px]">
                  <p className="text-[24px]">Müşteri</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section3">
        <div className="conteiner">
          <div className="block3">
            <div className="leftEndRight flex flex-wrap justify-around">
              <div className="left">
                <div className="porag1 flex items-center text-[#23697B] text-[52px] gap-5 pt-[200px]">
                  <img src={target} alt="" />
                  <div>
                    <p>Vizyonumuz</p>
                  </div>
                </div>
                <p className="text-[12px] text-[#667085] py-[10px]">
                  Kaliteli, yenilikçi ve farklı ürünler üreten ve birçok alanda{" "}
                  <br />
                  hizmet veren ürün yelpazesi ile, Türkiye'nin yanı sıra
                  ürünlerini <br /> tüm dünyada tüketiciler ile buluşturup,
                  müşterilerinin aldığı <br /> hizmetten memnuniyet duyacağı.
                  Sektöründe en beğenilen <br /> ve tercih edilen marka olmak.
                </p>
              </div>

              <div className="righth py-[50px]">
                <div className="porag2 flex items-center text-[#23697B] text-[52px] gap-5">
                  <div>
                    <p>Misyonumuz</p>
                  </div>
                  <div className="img">
                    <img src={mountain} alt="" />
                  </div>
                </div>
                <p className="text-[12px] text-[#667085] py-[10px]">
                  Topluma fayda sağlayan, kimya alanında doğru <br />{" "}
                  kalite-fiyat oranını sağlayarak yenilikçi hizmetler <br />{" "}
                  üreten bir firma olmak.
                </p>
              </div>
            </div>
          </div>
          <div className="block4">
            <div className="img30 text-right py-[80px] rounded-xl">
              <p className="text-[#23697B] text-[40px]">Sürdürülebilirlik</p>
              <p className="text-[#12303A] text-[16px] py-[10px]">
                Topluma fayda sağlayan, kimya alanında doğru <br /> kalite-fiyat
                oranını sağlayarak yenilikçi hizmetler <br /> üreten bir firma
                olmak.
              </p>
            </div>
          </div>

          <div className="block5">
            <div className="img20 text-start py-[80px] rounded-xl">
              <p className="text-[#23697B] text-[40px]">İnovasyon</p>
              <p className="text-[#12303A] text-[16px] py-[10px]">
                Kaliteli, yenilikçi ve farklı ürünler üreten ve birçok alanda
                hizmet veren ürün <br /> yelpazesi ile, Türkiye'nin yanı sıra
                ürünlerini tüm dünyada tüketiciler ile <br /> buluşturup,
                müşterilerinin aldığı hizmetten memnuniyet duyacağı. Sektöründe{" "}
                <br />
                en beğenilen ve tercih edilen marka olmak.
              </p>
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
                  <p className="text-[#98A2B3]">HABER & BLOG</p>
                  <p className="por text-[66px]">Son Gelişmeler</p>
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
                    <button className="btnN py-[10px] px-[10px] text-white ">
                      HABERLER <span>&#8594;</span>
                    </button>
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
                    <p>21 Mayıs 2023</p>
                  </div>
                </div>

                <div className="text">
                  <p className="p5">
                    Araştırmacılar, elektron mikroskobu için veri <br />{" "}
                    biliminden ve yapay zekâdan yararlanmak <br /> için yol
                    haritası çıkarıyor
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
                      <p>21 Mayıs 2023</p>
                    </div>
                  </div>

                  <div className="txt">
                    <p>
                      Araştırmacılar, elektron mikroskobu için veri biliminden
                      ve yapay <br /> zekâdan yararlanmak için yol haritası
                      çıkarıyor
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
                      <p>21 Mayıs 2023</p>
                    </div>
                  </div>

                  <div className="txt">
                    <p>
                      Araştırmacılar, elektron mikroskobu için veri biliminden
                      ve yapay <br /> zekâdan yararlanmak için yol haritası
                      çıkarıyor
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
                      <p>21 Mayıs 2023</p>
                    </div>
                  </div>
                  <div className="txt">
                    <p>
                      Araştırmacılar, elektron mikroskobu için veri biliminden
                      ve yapay <br /> zekâdan yararlanmak için yol haritası
                      çıkarıyor
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

export default Kurumsal;
