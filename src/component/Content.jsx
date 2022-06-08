import React from "react";
import Sampul from "../assets/photo sampul/photo_sampul.png";
import Avatar from "../assets/avatar/avatar_utama.png";
import Rating from "../assets/profil/rating_star.png";
import Edit from "../assets/avatar/editfoto.png";
import Poin from "../assets/profil/total_point.png";
import Vector from "../assets/profil/vector_right.png";
import Progres from "../assets/profil/lengkapi_profil.png";
import AvatarAnimat from "../assets/card/avatar_card.png";
import Menubar from "../assets/card/menubar.png";
import Img from "../assets/card/card_img.png";
import Icon1 from "../assets/card/1_32.png";
import Icon2 from "../assets/card/2_23.png";
import Icon3 from "../assets/card/3_15.png";
import Icon4 from "../assets/card/4_2.png";
import Icon5 from "../assets/card/5_12.png";
import Share from "../assets/card/share.png";
import AvatarComment from "../assets/card/avatar_komentar.png";
import Send from "../assets/card/tulis_komentar.png";

export default function Content() {
  return (
    <>
      {/* DASAR */}
      <main className="bg-background h-[2175px] pt-5">
        {/* PROFIL SAMPUL */}
        <div className="flex items-center justify-center">
          <div className="bg-white w-[1132px] h-[432px] drop-shadow-sampul rounded-[5px]">
            {/* ATAS */}
            <div className="w-full h-[314px]">
              <img className="rounded-t-[5px]" src={Sampul} alt="" />
            </div>
            {/* BAWAH */}
            <div className="flex justify-between mx-[2rem]">
              <img
                className="absolute w-[187px] h-[187px] ml-4 top-[13.5rem]"
                src={Avatar}
                alt=""
              />
              <img
                className="absolute w-[49px] h-[49px] top-[22rem] left-[10rem]"
                src={Edit}
                alt=""
              />

              <div className="ml-[14rem] py-2">
                <div className="flex items-center">
                  <h1 className="font-bold pr-4 text-[20px]">Ryudan Sesa</h1>
                  <div className="flex gap-1">
                    <img src={Rating} alt="" />
                    <img src={Rating} alt="" />
                    <img src={Rating} alt="" />
                    <img src={Rating} alt="" />
                    <img src={Rating} alt="" />
                  </div>
                </div>
                <div className="w-[363px] font-normal text-[#9F9F9F] text-[15px]">
                  <p className="pt-3 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores aut dolore inventore natus! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Obcaecati vitae
                    recusandae dolore, quis sunt eius?
                  </p>
                </div>
              </div>
              <div className="bg-green-primary flex justify-center items-center w-[210px] h-[48px] rounded-[5px] mt-3">
                <div className="font[16px] text-white font-semibold">
                  Edit Profile
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-5">
          <div className="flex justify-between w-[1132px]">
            {/* TOTAL POINT */}
            <div className="grid gap-1 w-[459px] h-[585px]">
              <div className="flex items-center bg-white w-[457px] h-[80px] drop-shadow-sampul rounded-[5px] ">
                <div className="flex justify-center items-center w-[79.58px] h-full">
                  <img className="w-[30.8px] h-[42.82px]" src={Poin} alt="" />
                </div>

                <div className="flex justify-between items-center w-full h-[45.07px] px-10">
                  <div className="font-extrabold text-[15px]">
                    <h2 className="text-blue-primary">Total Poin Anda</h2>
                    <div className="flex justify-between gap-2">
                      <h3 className="text-orange-primary">17.4</h3>
                      <p className="text-gray-poin font-normal">Klaim hadiah</p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      /* className="w-[13.79px] h-[7px]" */ src={Vector}
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* LENGKAPI PROFIL */}
              <div className="flex justify-center items-center bg-white w-[459px] h-[120px] drop-shadow-sampul rounded-[5px]">
                <div className="grid text-center gap-1 w-[401px] text-[15.5px] ">
                  <div className="w-[401px]">
                    Melengkapi profil membantu kami memvalidasi akun Anda, dan
                    memudahkan Opinian lainnya memahami Anda
                  </div>
                  <div className="text-green-second">
                    Lengkapi Profil Anda 5/8
                  </div>
                  <div className="flex justify-center">
                    <img src={Progres} alt="" />
                  </div>
                </div>
              </div>

              {/* PENDING */}
              <div className="bg-white drop-shadow-sampul rounded-[5px] w-[459px] h-[340px]">
                Pending ....
              </div>
            </div>

            <div className="grid gap-4">
              {/* CARD 01 */}
              <div className="bg-white w-[650px] h-[759px] drop-shadow-sampul rounded-[5px]">
                <div className="flex justify-between py-5 px-5">
                  <div className="flex justify-center items-center gap-2">
                    <img
                      className="w-[60px] h-[60px]"
                      src={AvatarAnimat}
                      alt=""
                    />
                    <div className="">
                      <h1 className="font-bold text-[17px]">Ryudan Sesa</h1>
                      <div className="flex gap-2 text-[14px]">
                        <p className="text-gray-post">10 menit lalu</p>
                        <p className="text-green-primary">Opini</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="w-[29px] h-[7.63px]" src={Menubar} alt="" />
                  </div>
                </div>
                
                <div className="px-5 h-[35px] text-[19px] font-semibold">Belajar Menjadi Manusia</div>

                <img className="w-[650px] h-[352px]" src={Img} alt="" />
                <div className="flex items-center justify-center px-5 my-5 w-full h-[100px]">
                  <p className="line-clamp-4 text-[15px]">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into ...
                    <p className="absolute italic font-semibold text-green-primary top-[36.3rem] left-[22rem]">
                      Selengkapnya
                    </p>
                  </p>
                </div>

                <div className="flex w-full h-[47px] px-5 border-gray-border border-b-[2px]">
                  <ul className="flex items-center gap-[15px] font-semibold text-[14px] text-gray-icon-card">
                    <li className="flex justify-center items-center gap-2 w-[77px] h-[47px]">
                      <img className="w-[22px] h-[25px]" src={Icon1} alt="" />
                      <h3 className="">32</h3>
                    </li>
                    <li className="flex justify-center items-center gap-2 w-[77px] h-[47px]">
                      <img className="w-[25px] h-[25px]" src={Icon2} alt="" />
                      <h3 className="">23</h3>
                    </li>
                    <li className="flex justify-center items-center gap-2 w-[77px] h-[47px]">
                      <img className="w-[21px] h-[21px]" src={Icon3} alt="" />
                      <h3 className="">15</h3>
                    </li>
                    <li className="flex justify-center items-center gap-2 w-[77px] h-[47px]">
                      <img className="w-[30px] h-[22px]" src={Icon4} alt="" />
                      <h3 className="">2</h3>
                    </li>
                    <li className="flex justify-center items-center gap-2 w-[77px] h-[47px]">
                      <img className="w-[22.96px]" src={Icon5} alt="" />
                      <h3 className="">12</h3>
                    </li>
                    <li className="absolute left-[37rem]">
                      {/* <li className="flex justify-center items-center gap-2 w-[77px] h-[47px] ml-[4.5rem]"> */}
                      <img className="w-[23px] h-[25px]" src={Share} alt="" />
                    </li>
                  </ul>
                </div>

                <div className="w-full h-[119px] flex justify-center">
                  <div className="flex items-center rounded-full my-5 w-[605px] h-[52px] box-border">
                    <img
                      className="absolute rounded-full left-[30px]"
                      src={AvatarComment}
                      alt=""
                    />
                    <input
                      typeof="text"
                      className="px-[60px] py-2 w-[605px] h-[52px] border-[2px] border-gray-border rounded-full placeholder:text-gray-placeholder placeholder:text-[15px]"
                      placeholder="Tulis Komentar"
                    />
                    <button className="absolute left-[580px] bg-green-send flex items-center justify-center rounded-full w-[37px] h-[37px]">
                      <img
                        /* className="w-[15.73px] h-[15.73px]" */ src={Send}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* CARD 02 */}
              <div className="bg-yellow-100 w-[650px] h-[759px] rounded-[5px]">
                bawah
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
