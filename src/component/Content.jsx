import React, { useState, useEffect, useRef } from "react";
import "flowbite";

import Sampul from "../public/images/photo_sampul/photo_sampul.png";
import Photo from "../public/images/photo_sampul/edit_photo_sampul.png";
import Delete from "../public/images/photo_sampul/delete_photo_sampul.png";
import Avatar from "../public/images/avatar/avatar_utama.png";
import Edit from "../public/images/avatar/editfoto.png";
import Rating from "../public/images/profil/rating_star.png";
import Poin from "../public/images/profil/total_point.png";
import Vector from "../public/images/profil/vector_right.png";
import Progres from "../public/images/profil/lengkapi_profil.png";
import AvatarAnimat from "../public/images/card/avatar_card.png";
import Menubar from "../public/images/card/menubar.png";
import Img from "../public/images/card/card_img.png";
import Icon1 from "../public/images/card/1_32.png";
import Icon2 from "../public/images/card/2_23.png";
import Icon3 from "../public/images/card/3_15.png";
import Icon4 from "../public/images/card/4_2.png";
import Icon5 from "../public/images/card/5_12.png";
import Share from "../public/images/card/share.png";
import AvatarComment from "../public/images/card/avatar_komentar.png";
import Send from "../public/images/card/tulis_komentar.png";
import User from "../public/images/card/user.png";

// IMG CATEGORI DEFAULT SEMUA
import Dsemua from "../public/images/4_sidebar_profil_post/default/0_semua.png";
import Didea from "../public/images/4_sidebar_profil_post/default/0_idea.png";
import Dartikel from "../public/images/4_sidebar_profil_post/default/1_artikel.png";
import Dpoling from "../public/images/4_sidebar_profil_post/default/1_poling.png";
import Dpetisi from "../public/images/4_sidebar_profil_post/default/0_petisi.png";

// IMG CATEGORI ARTIKEL
import Aopini from "../public/images/4_sidebar_profil_post/artikel/0_opini.png";
import Aesai from "../public/images/4_sidebar_profil_post/artikel/1_esai.png";
import Aresensi from "../public/images/4_sidebar_profil_post/artikel/1_resensi.png";
import Acerpen from "../public/images/4_sidebar_profil_post/artikel/1_cerpen.png";
import Acerbung from "../public/images/4_sidebar_profil_post/artikel/1_cerbung.png";
import Apuisi from "../public/images/4_sidebar_profil_post/artikel/1_puisi.png";
import Ahumor from "../public/images/4_sidebar_profil_post/artikel/1_humor.png";

// IMG CATEGORI POLING
import Ppilihanku from "../public/images/4_sidebar_profil_post/poling/1_pilihanku.png";
import Pkatakunci from "../public/images/4_sidebar_profil_post/poling/1_kata_kunci.png";
import Ppsikografik from "../public/images/4_sidebar_profil_post/poling/1_psikografik.png";
import Pkuesioner from "../public/images/4_sidebar_profil_post/poling/0_kuesioner.png";

// DEFAULT CREATE POSTINGAN
import Create from "../public/images/4_create_postingan/0_buat_postingan.png";
import Cidea from "../public/images/4_create_postingan/0_idea.png";
import Cartikel from "../public/images/4_create_postingan/0_artikel.png";
import Cpoling from "../public/images/4_create_postingan/0_poling.png";
import Cpetisi from "../public/images/4_create_postingan/0_petisi.png";

// CREATE ARTIKEL
import Cartikels from "../public/images/2_artikel/0_vector_left.png"
import Copini from "../public/images/2_artikel/1_opini.png"
import Cesai from "../public/images/2_artikel/2_esai.png"
import Cresensi from "../public/images/2_artikel/3_resensi.png"
import Ccerpen from "../public/images/2_artikel/4_cerpen.png"
import Ccerbung from "../public/images/2_artikel/5_cerbung.png"
import Cpuisi from "../public/images/2_artikel/6_puisi.png"
import Chumor from "../public/images/2_artikel/7_humor.png"

// CREATE POLING
import Cpolings from "../public/images/1_polling/0_vector_left.png"
import Cpilihanku from "../public/images/1_polling/1_pilihanku.png"
import CkataKunci from "../public/images/1_polling/2_katakunci.png"
import Cpsikografik from "../public/images/1_polling/3_psikografik.png"
import Ckuesioner from "../public/images/1_polling/4_kuesioner.png"


export default function Content() {
  // CATEGORI DEFAULT SEMUA.....................................
  const [cat, setCat] = useState("Semua");
  const [allCat, setAllCat] = useState([
    {
      img: Didea,
      title: "Idea",
    },
    {
      img: Cartikel,
      title: "Artikel",
    },
    {
      img: Cpoling,
      title: "Poling",
    },
    {
      img: Dpetisi,
      title: "Petisi",
    },
  ]);

  // DROPDOWN CREATE
  const [dropdownActive, setDropDwon] = useState(false);

  // CATEGORI ARTIKEL
  const [catArtikel, setCatArtikel] = useState([
    {
      img: Aopini,
      title: "Opini",
    },
    {
      img: Cesai,
      title: "Esai",
    },
    {
      img: Cresensi,
      title: "Resensi",
    },
    {
      img: Ccerpen,
      title: "Cerpen",
    },
    {
      img: Ccerbung,
      title: "Cerbung",
    },
    {
      img: Cpuisi,
      title: "Puisi",
    },
    {
      img: Chumor,
      title: "Humor",
    },
  ]);

  // CATEGORI POLING
  const [catPoling, setPoling] = useState([
    {
      img: Cpilihanku,
      title: "Pilihanku",
    },
    {
      img: CkataKunci,
      title: "Kata Kunci",
    },
    {
      img: Cpsikografik,
      title: "Psikografik",
    },
    {
      img: Pkuesioner,
      title: "Kuesioner",
    },
  ]);

  // UPDATE CATEGORI
  const updateCatPost = (title) => {
    switch (title) {
      case "Artikel":
        setAllCat(catArtikel);
        break;
      case "Poling":
        setAllCat(catPoling);
        break;

      default:
        setAllCat([
          {
            img: Didea,
            title: "Idea",
          },
          {
            img: Cartikel,
            title: "Artikel",
          },
          {
            img: Cpoling,
            title: "Poling",
          },
          {
            img: Dpetisi,
            title: "Petisi",
          },
        ]);
        break;
    }
  };


  // CREATE POSTINGAN...........................................
  const [create, setCreate] = useState(false);
  const [createPost, setCreatePost] = useState([
    {
      img: Cidea,
      title: "Idea",
    },
    {
      img: Cartikel,
      title: "Artikel",
    },
    {
      img: Cpoling,
      title: "Poling",
    },
    {
      img: Cpetisi,
      title: "Petisi",
    },
  ]);

  // CREATE ARTIKEL
  const [createArtikel, setCreateArtikel] = useState([
    // {
    //   img: Cartikels,
    //   title: "Artikel",
    // },
    {
      img: Copini,
      title: "Opini",
    },
    {
      img: Cesai,
      title: "Esai",
    },
    {
      img: Cresensi,
      title: "Resensi",
    },
    {
      img: Ccerpen,
      title: "Cerpen",
    },
    {
      img: Ccerbung,
      title: "Cerbung",
    },
    {
      img: Cpuisi,
      title: "Puisi",
    },
    {
      img: Chumor,
      title: "Humor",
    },
  ])

  // CREATE POLING
  const [createPoling, setCreatePoling] = useState([
    // {
    //   img: Cpolings,
    //   title: "Poling"
    // },
    {
      img: Cpilihanku,
      title: "Pilihanku"
    },
    {
      img: CkataKunci,
      title: "Kata Kunci"
    },
    {
      img: Cpsikografik,
      title: "Psikografik"
    },
    {
      img: Ckuesioner,
      title: "Kuesioner"
    },
  ])

  const Dropdown = () => {
    setDropDwon(!dropdownActive);
    setCreatePost([
      {
        img: Cidea,
        title: "Idea",
      },
      {
        img: Cartikel,
        title: "Artikel",
      },
      {
        img: Cpoling,
        title: "Poling",
      },
      {
        img: Cpetisi,
        title: "Petisi",
      },
    ]);
  };

  // UPDATE CREATE POSTINGAN
  const updateCreatePost = (title) => {
    switch (title) {
      case "Artikel":
        setCreatePost(createArtikel);
        break;
      case "Poling":
        setCreatePost(createPoling);
        break;

      default:
        setCreatePost([
          {
            img: Cidea,
            title: "Idea",
          },
          {
            img: Cartikel,
            title: "Artikel",
          },
          {
            img: Cpoling,
            title: "Poling",
          },
          {
            img: Cpetisi,
            title: "Petisi",
          },
        ]);
        break;
    }
  };

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
              {/* AVATAR */}
              <img
                className="absolute w-[187px] h-[187px] ml-4 top-[13.5rem]"
                src={Avatar}
                alt=""
              />

              {/* POSTINGAN MENGIKUTI PENGIKUT */}
              <div className="font-bold absolute flex justify-center items-center w-[328px] h-[78px] bg-white gap-10 top-[13.5rem] left-[16rem] opacity-[.60] rounded-[5px]">
                {/* POSTINGAN */}
                <div className="grid gap-2">
                  <h3 className="text-center text-gray-opacity1">Postingan</h3>
                  <h3 className="text-center">12</h3>
                </div>
                {/* MENGIKUTI */}
                <div className="grid gap-2">
                  <h3 className="text-center text-gray-opacity2">Mengikuti</h3>
                  <h3 className="text-center">5</h3>
                </div>
                {/* PENGIKUT */}
                <div className="grid gap-2">
                  <h3 className="text-center text-gray-opacity2">Pengikut</h3>
                  <h3 className="text-center">5</h3>
                </div>
              </div>

              {/* EDIT */}
              <img
                className="absolute w-[49px] h-[49px] top-[22rem] left-[10rem]"
                src={Edit}
                alt=""
              />

              {/* RATING */}
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
                  <div className="pt-3 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Asperiores aut dolore inventore natus! Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Obcaecati vitae
                    recusandae dolore, quis sunt eius?
                  </div>
                </div>
              </div>

              {/* PHOTO & DELETE SAMPUL */}
              <div className="bg-green-primary flex justify-center items-center w-[210px] h-[48px] rounded-[5px] mt-3">
                <div className="absolute flex top-[15rem] right-[2rem] gap-3">
                  <img className="" src={Photo} alt="" />
                  <img className="" src={Delete} alt="" />
                </div>

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
                      <div className="text-gray-poin font-normal">
                        Klaim hadiah
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <img src={Vector} alt="" />
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

              {/* ----------------- BUAT POSTINGAN -------------- */}
              <div className="fixed z-10 top-[34rem] flex w-[249px] h-[407px] flex items-start">
                <div className="grid gap-[17px]">
                  {" "}
                  {/* top-[45.3rem] top-[35.3rem]..................*/}
                  {/* CREATE POSTINGAN */}
                  <div
                    className="cursor-pointer flex w-[219px] h-[66px] bg-green-primary flex items-center justify-center rounded-full gap-5 text-white"
                    onClick={() => {
                      Dropdown();
                    }}
                  >
                    <img src={Create} alt="" />
                    <h2 className="text-[17px] font-semibold">
                      Buat Postingan
                    </h2>
                  </div>
                  {/* HIDDEN */}
                  <div
                    className={`${
                      dropdownActive ? `grid` : `hidden`
                    } grid w-[181px] h-[314px] gap-[10px]`}
                  >
                    {createPost.map((props) => {
                      return (
                        <>
                          <div
                            key={props.title}
                            className={`${
                              create === props.title
                                ? "bg-white drop-shadow-createPost"
                                : "bg-white drop-shadow-createPost"
                            } cursor-pointer flex w-[181px] h-[71px] bg-white flex items-center justify-start px-[16px] rounded-full gap-[10px] drop-shadow-createPost`}
                            onClick={() => {
                              updateCreatePost(props.title);
                            }}
                          >
                            <div className="flex items-center justify-center w-[53px] h-[53px] bg-green-primary rounded-full">
                              <img className="" src={props.img} alt="" />
                            </div>
                            <h3 className="text-[17px] font-semibold text-black">
                              {props.title}
                            </h3>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ................................PENDING .................................... */}
              <div className="flex justify-center items-center bg-white drop-shadow-sampul rounded-[5px] w-[459px] h-[340px]">
                <div className="grid w-[399px] h-[300px]">
                  {/* CATEGORI DEFAULT SEMUA */}
                  <div
                    className={`${
                      cat === "Semua" ? "bg-green-click" : "bg-grey-100"
                    } cursor-pointer flex items-center w-[399px] h-[60px] rounded-[5px]`}
                    onClick={() => {
                      setAllCat("Semua");
                    }}
                  >
                    <div className="flex mx-2 mx-2 items-center justify-center rounded-[5px] gap-20 w-[40px] h-[40px] bg-green-primary">
                      <img className="" src={Dsemua} alt="" />
                    </div>
                    <h3 className="text-gray-icon-card">Semua</h3>
                  </div>

                  {/* {(cat === "Semua" || cat === "Idea" || cat === "Petisi") && */}
                    {allCat.map((props) => {
                      return (
                        <>
                          <div
                            key={props.title}
                            className={`${
                              cat === props.title
                                ? "bg-green-click"
                                : "bg-grey-100"
                            } cursor-pointer flex items-center w-[399px] h-[60px] rounded-[5px]`}
                            onClick={() => {
                              updateCatPost(props.title);
                            }}
                          >
                            <div className="flex mx-2 mx-2 items-center justify-center rounded-[5px] gap-20 w-[40px] h-[40px] bg-green-primary">
                              <img className="" src={props.img} alt="" />
                            </div>
                            <h3 className="text-gray-icon-card">
                              {props.title}
                            </h3>
                          </div>
                        </>
                      );
                    })}

                  {cat === "Artikel" &&
                    catArtikel.map((props) => {
                      return (
                        <>
                          <div
                            key={props.title}
                            className={`${
                              cat === props.title
                                ? "bg-green-click"
                                : "bg-grey-100"
                            } cursor-pointer flex items-center w-[399px] h-[60px] rounded-[5px]`}
                            onClick={() => {
                              setCat(props.title);
                            }}
                          >
                            <div className="flex mx-2 mx-2 items-center justify-center rounded-[5px] gap-20 w-[40px] h-[40px] bg-green-primary">
                              <img className="" src={props.img} alt="" />
                            </div>
                            <h3 className="text-gray-icon-card">
                              {props.title}
                            </h3>
                          </div>
                        </>
                      );
                    })}

                  {cat === "Poling" &&
                    catPoling.map((props) => {
                      return (
                        <>
                          <div
                            key={props.title}
                            className={`${
                              cat === props.title
                                ? "bg-green-click"
                                : "bg-grey-100"
                            } cursor-pointer flex items-center w-[399px] h-[60px] rounded-[5px]`}
                            onClick={() => {
                              setCat(props.title);
                            }}
                          >
                            <div className="flex mx-2 mx-2 items-center justify-center rounded-[5px] gap-20 w-[40px] h-[40px] bg-green-primary">
                              <img className="" src={props.img} alt="" />
                            </div>
                            <h3 className="text-gray-icon-card">
                              {props.title}
                            </h3>
                          </div>
                        </>
                      );
                    })}
                </div>
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
                        <div className="text-gray-post">10 menit lalu</div>
                        <div className="text-green-primary">Opini</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="w-[29px] h-[7.63px]" src={Menubar} alt="" />
                  </div>
                </div>

                <div className="px-5 h-[35px] text-[19px] font-semibold">
                  Belajar Menjadi Manusia
                </div>

                <img className="w-[650px] h-[352px]" src={Img} alt="" />
                <img
                  className="absolute top-[9.5rem] right-[1.5rem]"
                  src={User}
                  alt=""
                />
                <div className="flex items-center justify-center px-5 my-5 w-full h-[100px]">
                  <div className="line-clamp-4 text-[15px]">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into ...
                    <div className="absolute italic font-semibold text-green-primary top-[36.3rem] left-[22rem]">
                      Selengkapnya
                    </div>
                  </div>
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
                        <div className="text-gray-post">10 menit lalu</div>
                        <div className="text-green-primary">Opini</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img className="w-[29px] h-[7.63px]" src={Menubar} alt="" />
                  </div>
                </div>

                <div className="px-5 h-[35px] text-[19px] font-semibold">
                  Belajar Menjadi Manusia
                </div>

                <img className="w-[650px] h-[352px]" src={Img} alt="" />
                <img
                  className="absolute top-[9.5rem] right-[1.5rem]"
                  src={User}
                  alt=""
                />
                <div className="flex items-center justify-center px-5 my-5 w-full h-[100px]">
                  <div className="line-clamp-4 text-[15px]">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into ...
                    <div className="absolute italic font-semibold text-green-primary top-[36.3rem] left-[22rem]">
                      Selengkapnya
                    </div>
                  </div>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
