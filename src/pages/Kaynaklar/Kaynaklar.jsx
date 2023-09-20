import React from "react";
import { Link } from "react-router-dom";
import "./Kaynaklar.css"

import vizitka from "../../assets/vizitka.png"

import SearchIcon from "@mui/icons-material/Search";

const Kaynaklar = () => {
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

            <div className="levoPravo py-[50px] sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-y-50 gap-x-20">
              <div className="levo grid grid-cols-1 gap-y-40 ">
                <div className="thtbtn py-[60px]">
                  <p className="sm: text-center lg:text-start text-[24px] text-[#12303A]">
                    Monokim Kimya San. Tic. Ltd. Şti, 2011 <br /> yılından
                    bugüne kazandığı tecrübe ile <br /> poliüretan kimyasalları
                    konusunda <br />
                    sektöre yeni yaklaşımlar...
                  </p>

                  <div className="flex sm:ml-[50px]  lg:ml-[0] inpBtn py-[50px]">
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

                <div className="vizitka flex justify-around  gap-10   items-center">
                  <div className="img relative bottom-20">
                    <img src={vizitka} alt="" />
                  </div>

                  <div className="text7">
                    <p className="text-white text-[24px]">
                      Monokim 2023 <br />
                      Ürün Broşürleri
                    </p>

                    <p className="text-[16px] text-white py-[10px]">
                      Ürünlerimizin kataloğuna ekte <br />
                      bulunan
                    </p>
                  </div>
                </div>

                <div className="vizitka2 flex justify-around  gap-10   items-center ">
                  <div className="img relative bottom-20">
                    <img src={vizitka} alt="" className="imgVizitka" />
                  </div>

                  <div className="text7">
                    <p className="text-[#224957] text-[24px]">
                      Monokim 2023 <br />
                      Ürün Broşürleri
                    </p>

                    <p className="text-[16px] text-[#224957] py-[10px]">
                      Ürünlerimizin kataloğuna ekte <br />
                      bulunan
                    </p>
                  </div>
                </div>
              </div>

              <div className="pravo grid grid-cols-1 gap-y-40 sm:py-[100px] lg:py-[0px]">
                <div className="vizitka2 flex justify-around gap-10 my-[50px]  items-center  ">
                  <div className="img relative bottom-20">
                    <img src={vizitka} alt="" className="imgVizitka" />
                  </div>

                  <div className="text7">
                    <p className="text-[#224957] text-[24px]">
                      Monokim 2023 <br />
                      Ürün Broşürleri
                    </p>

                    <p className="text-[16px] text-[#224957] py-[10px]">
                      Ürünlerimizin kataloğuna ekte <br />
                      bulunan
                    </p>
                  </div>
                </div>

                <div className="vizitka2 flex justify-around gap-10  items-center ">
                  <div className="img relative bottom-20">
                    <img src={vizitka} alt="" className="imgVizitka" />
                  </div>

                  <div className="text7">
                    <p className="text-[#224957] text-[24px]">
                      Monokim 2023 <br />
                      Ürün Broşürleri
                    </p>

                    <p className="text-[16px] text-[#224957] py-[10px]">
                      Ürünlerimizin kataloğuna ekte <br />
                      bulunan
                    </p>
                  </div>
                </div>

                <div className="vizitka2 flex justify-around gap-10  items-center ">
                  <div className="img relative bottom-20">
                    <img src={vizitka} alt="" className="imgVizitka" />
                  </div>

                  <div className="text7">
                    <p className="text-[#224957] text-[24px]">
                      Monokim 2023 <br />
                      Ürün Broşürleri
                    </p>

                    <p className="text-[16px] text-[#224957] py-[10px]">
                      Ürünlerimizin kataloğuna ekte <br />
                      bulunan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kaynaklar;
