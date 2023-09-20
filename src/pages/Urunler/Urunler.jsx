import React from 'react'
import "./Urunler.css"
import { Link } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";


import images1 from "../../assets/images1.png";
import images2 from "../../assets/images2.png";
import images3 from "../../assets/images3.png";
import images4 from "../../assets/images4.png";
import images5 from "../../assets/images5.png";
import images6 from "../../assets/images6.png";


const Urunler = () => {
  return (
    <div>
      <div className="section1">
        <div className="conteiner">
          <div className="block1">
            <div className="topText text-[#12303A] text-center py-[50px]">
              <h1 className="text-[24px] ">ÜRÜNLERİMİZ</h1>
              <p>
                <Link to="/">ANASAYFA </Link>/
                <Link to="/urunler">ÜRÜNLERİMİZ</Link>
              </p>
            </div>

            <div className="leftRIght sm:grid sm:grid-cols-1  lg:grid-cols-2  gap-10 py-[50px]">
              <div className="left ">
                <div className="inpBtn">
                  <input
                    type="text"
                    placeholder="  Ürün Adı ya da Kodu İle Arama Yapınız"
                    className="inp py-[13px] bg-gray-100 outline-none"
                  />
                  <button className="btnn  bg-gray-100 py-[10px]">
                    <SearchIcon fontSize="small" color="action" />
                  </button>
                </div>
                <div className="blockCha1 py-[20px] px-[20px] bg-gray-100  my-[20px] rounded-2xl">
                  <p className="text-[#25272D] text-[18px] py-[10px] border-b border-gray-300 ">
                    Sprey Poliüretan Köpük Sistemler
                  </p>
                  <div className="vnutP ml-[10px]">
                    <p className="text-[#27A1B3] text-[16px] py-[10px]">
                      Buzdolabı Soğutucu Sistemler
                    </p>
                    <p className="text-[#A7A7A7] text-[16px] py-[10px]">
                      Güneş Enerjisi ve Boyler Sistemler
                    </p>
                    <p className="text-[#A7A7A7] text-[16px] py-[10px]">
                      Boru ve Tank İzolasyon Sistemler
                    </p>
                    <p className="text-[#A7A7A7] text-[16px] py-[10px]">
                      Soğuk Oda Panel Sistemler
                    </p>
                    <p className="text-[#A7A7A7] text-[16px] py-[10px]">
                      Frigo Kasa Modüler Sistemler
                    </p>
                  </div>
                  <p className='className="text-[#25272D] text-[18px] py-[10px]'>
                    Poliüre Sistemler
                  </p>
                  <p className='className="text-[#25272D] text-[18px] py-[10px]'>
                    İzosiyanatlar
                  </p>
                  <p className='className="text-[#25272D] text-[18px] py-[10px]'>
                    Poliol ve Yardımcı Kimyasallar
                  </p>
                </div>
              </div>

              <div className="rights">
                <div className="blc flex gap-10 py-[40px]">
                  <div className="imgAndText1 text-center py-[10px] px-[10px]">
                    <img src={images1} alt="" />
                    <p className="text-[16px] py-[10px] ">
                      Poliüretan Sistemler
                    </p>

                    <p className="py-[10px]">
                      Sprey Poliüretan Köpük Sistemler
                    </p>

                    <Link to="/urunDetay">
                      <button className="btnUrun py-[10px] px-[20px] text-[white]">
                        ÜRÜNÜ GÖR
                      </button>
                    </Link>
                  </div>

                  <div className="imgAndText text-center">
                    <img src={images2} alt="" />
                    <p className="text-[16px] py-[10px]">
                      Poliüretan Sistemler
                    </p>

                    <p className="py-[10px]">
                      Sprey Poliüretan Köpük Sistemler
                    </p>

                    <button className="btnUrun py-[10px] px-[20px] text-[white]">
                      ÜRÜNÜ GÖR
                    </button>
                  </div>
                </div>

                <div className="blc flex gap-10 py-[40px]">
                  <div className="imgAndText text-center">
                    <img src={images3} alt="" />
                    <p className="text-[16px] py-[10px]">
                      Poliüretan Sistemler
                    </p>

                    <p className="py-[10px]">
                      Sprey Poliüretan Köpük Sistemler
                    </p>

                    <button className="btnUrun py-[10px] px-[20px] text-[white]">
                      ÜRÜNÜ GÖR
                    </button>
                  </div>

                  <div className="imgAndText text-center">
                    <img src={images4} alt="" />
                    <p className="text-[16px] py-[10px]">
                      Poliüretan Sistemler
                    </p>

                    <p className="py-[10px]">
                      Sprey Poliüretan Köpük Sistemler
                    </p>

                    <button className="btnUrun py-[10px] px-[20px] text-[white]">
                      ÜRÜNÜ GÖR
                    </button>
                  </div>
                </div>

                <div className="blc flex gap-10 py-[40px]">
                  <div className="imgAndText text-center">
                    <img src={images3} alt="" />
                    <p className="text-[16px] py-[10px]">
                      Poliüretan Sistemler
                    </p>

                    <p className="py-[10px]">
                      Sprey Poliüretan Köpük Sistemler
                    </p>

                    <button className="btnUrun py-[10px] px-[20px] text-[white]">
                      ÜRÜNÜ GÖR
                    </button>
                  </div>

                  <div className="imgAndText text-center">
                    <img src={images5} alt="" />
                    <p className="text-[16px] py-[10px]">
                      Poliüretan Sistemler
                    </p>

                    <p className="py-[10px]">
                      Sprey Poliüretan Köpük Sistemler
                    </p>

                    <button className="btnUrun py-[10px] px-[20px] text-[white]">
                      ÜRÜNÜ GÖR
                    </button>
                  </div>
                </div>

                <div className="btnnn text-center py-[50px]">
                  <button className="btnUrun py-[10px] px-[20px] text-[white]">
                    DAHA FAZLA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Urunler