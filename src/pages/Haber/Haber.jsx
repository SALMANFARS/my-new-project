import React from 'react'
import "./Haber.css"
import { Link } from 'react-router-dom'

import SearchIcon from "@mui/icons-material/Search";
import photo1 from "../../assets/page7img1.png";
import photo2 from "../../assets/page7img2.png";
import photo3 from "../../assets/page7img3.png";
import clock from "../../assets/Clock.png"

const Haber = () => {
  return (
    <div>
      <div className="section1">
        <div className="conteiner">
          <div className="block1">
            <div className="topText text-[#12303A;] text-center py-[20px]">
              <h1 className="text-[24px] ">HABER & BLOG</h1>
              <p>
                <Link to="/">ANASAYFA </Link>/{" "}
                <Link to="/haber">HABER & BLOG</Link>
              </p>

              <div className="inpBtn flex w-[50%] m-auto py-[50px]">
                <input
                  type="text"
                  placeholder="  Ürün Adı ya da Kodu İle Arama Yapınız"
                  className="inp py-[13px] bg-gray-100 outline-none"
                />
                <button className="btnn  bg-gray-100 py-[10px]">
                  <SearchIcon fontSize="small" color="action" />
                </button>
              </div>
            </div>

            <div className="block2 grid  gap-y-10">
              <div className="chapRost sm:grid sm:grid-cols-1 lg:grid-cols-2 justify-items-center items-center py-[10px]">
                <div className="chap">
                  <img src={photo1} alt="" />
                </div>
                <div className="rost">
                  <div className="clock flex gap-5 py-[20px]">
                    <div className="img">
                      <img src={clock} alt="" />
                    </div>
                    <div className="porag2">
                      <p>21 Mayıs 2023</p>
                    </div>
                  </div>

                  <Link to="/haberDetay">
                    <p className="text-[#27A1B3] py-[20px]">
                      Araştırmacılar, elektron mikroskobu için veri <br />{" "}
                      biliminden ve yapay zekâdan yararlanmak için <br /> yol
                      haritası çıkarıyor
                    </p>
                  </Link>

                  <p className="text-[18px] text-[#667085]">
                    Faaliyet gösterdiği poliüretan sektörü içinde her geçen gün
                    emin <br /> adımlarla ilerleyen ve daima lider bir oyuncu
                    olmayı...
                  </p>
                </div>
              </div>

              <div className="chapRost sm:grid sm:grid-cols-1 lg:grid-cols-2 justify-items-center items-center py-[10px]">
                <div className="chap">
                  <img src={photo2} alt="" />
                </div>
                <div className="rost">
                  <div className="clock flex gap-5 py-[20px]">
                    <div className="img">
                      <img src={clock} alt="" />
                    </div>
                    <div className="porag2">
                      <p>21 Mayıs 2023</p>
                    </div>
                  </div>

                  <p className="text-[#27A1B3] py-[20px]">
                    Araştırmacılar, elektron mikroskobu için veri <br />{" "}
                    biliminden ve yapay zekâdan yararlanmak için <br /> yol
                    haritası çıkarıyor
                  </p>

                  <p className="text-[18px] text-[#667085]">
                    Faaliyet gösterdiği poliüretan sektörü içinde her geçen gün
                    emin <br /> adımlarla ilerleyen ve daima lider bir oyuncu
                    olmayı...
                  </p>
                </div>
              </div>

              <div className="chapRost sm:grid sm:grid-cols-1 lg:grid-cols-2 justify-items-center items-center py-[10px]">
                <div className="chap">
                  <img src={photo3} alt="" />
                </div>
                <div className="rost">
                  <div className="clock flex gap-5 py-[20px]">
                    <div className="img">
                      <img src={clock} alt="" />
                    </div>
                    <div className="porag2">
                      <p>21 Mayıs 2023</p>
                    </div>
                  </div>

                  <p className="text-[#27A1B3] py-[20px]">
                    Araştırmacılar, elektron mikroskobu için veri <br />{" "}
                    biliminden ve yapay zekâdan yararlanmak için <br /> yol
                    haritası çıkarıyor
                  </p>

                  <p className="text-[18px] text-[#667085]">
                    Faaliyet gösterdiği poliüretan sektörü içinde her geçen gün
                    emin <br /> adımlarla ilerleyen ve daima lider bir oyuncu
                    olmayı...
                  </p>
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
  );
}

export default Haber