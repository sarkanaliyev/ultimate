import "./Home.css";
import "./Frames.css";

import logo from "../Home/assets/medeniyyet-nazirliyi-logo.png";

import frame_1 from "../Home/assets/Frames/frame_1.png";
import frame_2 from "../Home/assets/Frames/frame_2.png";
import frame_3 from "../Home/assets/Frames/frame_3.png";
import frame_4 from "../Home/assets/Frames/frame_4.png";
import frame_5 from "../Home/assets/Frames/frame_5.png";
import frame_6 from "../Home/assets/Frames/frame_6.png";
import frame_7 from "../Home/assets/Frames/frame_7.png";
import frame_8 from "../Home/assets/Frames/frame_8.png";
import frame_9 from "../Home/assets/Frames/frame_9.png";
import frame_10 from "../Home/assets/Frames/frame_10.png";
import frame_11 from "../Home/assets/Frames/frame_11.png";
import frame_12 from "../Home/assets/Frames/frame_12.png";
import frame_13 from "../Home/assets/Frames/frame_13.png";
import frame_14 from "../Home/assets/Frames/frame_14.png";
import frame_15 from "../Home/assets/Frames/frame_15.png";
import frame_16 from "../Home/assets/Frames/frame_16.png";
import frame_17 from "../Home/assets/Frames/frame_17.png";
import frame_18 from "../Home/assets/Frames/frame_18.png";
import frame_19 from "../Home/assets/Frames/frame_19.png";
import frame_20 from "../Home/assets/Frames/frame_20.png";
import frame_21 from "../Home/assets/Frames/frame_21.png";

import Menu from "../Menu/Menu";

import { Timeline } from "gsap/gsap-core";
import { gsap, Power2, TimelineLite } from "gsap";

import karvansaray from "../Abideler/assets/Fuzuli/karvansaray/karvansaray.JPG";

import ReactAudioPlayer from "react-audio-player";
import susanitq from "./assets/susa-nitq.mp3";

import { useEffect } from "react";
export default function Home() {
  gsap.registerPlugin(Timeline, Power2);
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  const tl = new Timeline({ paused: true });
  const tl2 = new Timeline({ paused: true });
  const tl3 = new Timeline({ paused: true });
  const tl4 = new Timeline({ paused: true });

  // const tl5 = new Timeline({ defaults: { ease: "power1.out" } });

  const handleClick = () => {
    tl.to(".manset-sekil", 1.5, {
      width: "60%",
      opacity: 1,
      ease: Power2.easeOut,
    })
      .to(
        ".manset",
        2,
        {
          width: "40%",
          opacity: 1,
          ease: Power2.easeOut,
        },
        "-= 0.5"
      )
      .to(".home-button", 1, {
        pointerEvents: "none",
      });

    tl.play();
  };
  function handleClick2(e) {
    // handlePic(screenimg);
    tl2
      .to(".manset-sekil2", 1, {
        width: "60%",
        opacity: 1,
        ease: Power2.easeOut,
      })
      .to(
        ".manset2",
        2,
        {
          width: "40%",
          opacity: 1,
          ease: Power2.easeOut,
        },
        "-= 0.5"
      )
      .to(".home-button", 1, {
        pointerEvents: "none",
      });
    tl2.play();
  }
  function handleClick3(e) {
    // handlePic(screenimg);
    tl3
      .to(".manset-sekil3", 1, {
        width: "60%",
        opacity: 1,
        ease: Power2.easeOut,
      })
      .to(
        ".manset3",
        2,
        {
          width: "40%",
          opacity: 1,
          ease: Power2.easeOut,
        },
        "-= 0.5"
      )
      .to(".home-button", 1, {
        pointerEvents: "none",
      });
    tl3.play();
  }
  function handleClick4(e) {
    // handlePic(screenimg);
    tl4
      .to(".manset-sekil4", 1, {
        width: "60%",
        opacity: 1,
        ease: Power2.easeOut,
      })
      .to(
        ".manset4",
        2,
        {
          width: "40%",
          opacity: 1,
          ease: Power2.easeOut,
        },
        "-= 0.5"
      )
      .to(".home-button", 1, {
        pointerEvents: "none",
      });
    tl4.play();
  }
  function handleReverse(e) {
    tl.reverse();
  }
  function handleReverse2(e) {
    tl2.reverse();
  }
  function handleReverse3(e) {
    tl3.reverse();
  }
  function handleReverse4(e) {
    tl4.reverse();
  }

  useEffect(() => {
    // setTimeout(() => {
    //   tl5.to(".slider", { y: "-100%", duration: 1.5 });
    // }, 20000);
  }, []); // <-- empty dependency array

  return (
    <div className="home-container">
      <div className="manset-sekil"></div>
      <div className="manset">
        <a className="manset-closebtn" onClick={handleReverse}>
          &times;
        </a>
        <div className="manset-main">
          <p className="manset-rayon">Şuşa</p>
          <p className="manset-abide">Yuxarı Gövhər ağa məscidi</p>
          <p className="manset-melumat">
            Yuxarı Gövhər ağa məscidi Azərbaycan Respublikasının Nazirlər
            Kabinetinin 2 avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə ölkə
            əhəmiyyətli memarlıq abidəsi kimi (inventar № 344, tarixi-
            1768—1769-cu illər) dövlət qeydiyyatına alınmışdır. Qarabağ
            xanlığının mərkəzini Şahbulaq qalasından Şuşaya köçürməyə qərar
            verən Pənahəli xan yeni şəhər və infrastruktur tikililərini inşa
            etməyə rəvac verir.<br></br>
            <br></br> 1750–ci illərdə onun göstərişi ilə Şuşa qalası, qala
            daxilində xan ailəsi üzvləri üçün malikanə və saraylar, o cümlədən
            məscid də inşa edilir. Şuşada həmin dövrdə bütün tikililər kimi
            “Yuxarı Gövhər ağa” məscidi də ilkin olaraq kiçik həcmdə inşa
            edilmişdir. Həmin məscidin memarlıq xüsusiyyətləri haqqında heç nə
            məlum deyil.
          </p>
          <a href="/susa/yuxari_govher_aga">
            <button className="manset-button">
              <span>DAHA ƏTRALI</span>
            </button>
          </a>
        </div>
      </div>

      <div className="manset-sekil2"></div>
      <div className="manset2">
        <a className="manset-closebtn2" onClick={handleReverse2}>
          &times;
        </a>
        <div className="manset-main2">
          <p className="manset-rayon2">Füzuli</p>
          <p className="manset-abide2">
            Karvansaray, XVII əsr, Qarğabazar kəndi
          </p>
          <p className="manset-melumat2">
            Karvansaray kəndin mərkəzində çox da hündür olmayan təpənin döşündə
            (eni 23,67, uzunu 34,70) inşa olunmuşdur. Elmi mənbələrdə onun
            tikilmə tarixi 1681-ci il göstərilsə də, karvansaranın memarı məlum
            deyil. Füzuli rayonundakı Qarğabazar kəndinin mərkəzində Karvansara
            tikildiyi kəndin adına uyğun olaraq adlandırılsa da, bu tarixi
            abidəyə bəzən Şah Abbas karvansarası da deyirlər.<br></br>
            <br></br> Giriş fraqmentdən göründüyü kimi, karvansaranın partalının
            birinci yarımdairə tağbənd ilə ondan nisbətən böyük olan ikinci
            oxvari tağbəndləri arasında xüsusi şəkildə yerləşdirilmiş üç ədəd
            kvadrat formalı daşlardan kənardakılar üzərində zoomorf və həndəsi
            ornamentlər işlənmişdir.
          </p>
          <a href="/fuzuli/karvansaray">
            <button className="manset-button2">
              <span>DAHA ƏTRALI</span>
            </button>
          </a>
        </div>
      </div>

      <div className="manset-sekil3"></div>
      <div className="manset3">
        <a className="manset-closebtn3" onClick={handleReverse3}>
          &times;
        </a>
        <div className="manset-main3">
          <p className="manset-rayon3">Şuşa</p>
          <p className="manset-abide3">X.Natəvanın evi</p>
          <p className="manset-melumat3">
            X.Natəvanın evi Azərbaycan Respublikasının Nazirlər Kabinetinin 2
            avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə ölkə əhəmiyyətli
            memarlıq abidəsi kimi (inventar № 342, tarixi- XVIII əsr) dövlət
            qeydiyyatına alınmışdır.Xurşidbanu Natəvanın evi Şuşanın ilkin inşa
            edilmiş mülklərindən biridir. XIX əsrə aid olunur.<br></br>
            <br></br> Saray böyük bir ərazini əhatə edən həyətdən ibarətdir. Bu
            həyətdə Natəvanın özünün evi, ata mülkü Mehdiqulu xanın imarəti,
            böyük buzxana, boyuk düzbucaqlı formada hovuz və muxtəlif xidməti
            tikililər olmuşdur.Xurşidbanu ailənin yeganə övladı, həm də Qarabağ
            xanlığının sоnuncu vərəsəsi оlduğu ücün оnu sarayda “Durru yeкta”
            (Təк inci), el arasında isə “Xan qızı” cağırırdılar.
          </p>
          <a href="/susa/natavan">
            <button className="manset-button3">
              <span>DAHA ƏTRALI</span>
            </button>
          </a>
        </div>
      </div>

      <div className="manset-sekil4"></div>
      <div className="manset4">
        <a className="manset-closebtn4" onClick={handleReverse4}>
          &times;
        </a>
        <div className="manset-main4">
          <p className="manset-rayon4">Şuşa</p>
          <p className="manset-abide4">Aşağı Gövhər Ağa Məscidi</p>
          <p className="manset-melumat4">
            Aşağı Gövhər ağa məscidi Azərbaycan Respublikasının Nazirlər
            Kabinetinin 2 avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə ölkə
            əhəmiyyətli memarlıq abidəsi kimi (inventar № 345, tarixi- XVIII
            əsr) dövlət qeydiyyatına alınmışdır.Məscid Şuşa şəhərinin Qapan
            meydanında yerləşir.<br></br>
            <br></br> Məscid ilk dəfə Şuşanın 1855-ci ilə aid baş planında
            yaxınlıqda yerləşən mədrəsə ilə birlikdə qeydə alınmışdır. Şəhərin
            ikinci cümə məscidi olan Aşağı Gövhər ağa məscidi həm Aşağı məscid,
            həm də Kiçik məscid adları ilə tanınmışdır. Birinci ad onun Yuxarı
            Gövhər ağa məscidi ilə müqayisədə coğrafi yerləşməsini, ikinci ad
            isə onun Cümə məscidi ilə müqayisədə ölçülərini bildirir.
          </p>
          <a href="/susa/asagi_govher_aga">
            <button className="manset-button4">
              <span>DAHA ƏTRALI</span>
            </button>
          </a>
        </div>
      </div>
      <div className="home-container">
        <div className="home-up">
          <a href="/">
            <img src={logo} className="home-logo" />
          </a>
          <p className="home-az">AZ</p>

          <a href="#" class="home-hamburger" onClick={openNav}>
            <div class="home-one"></div>
            <div class="home-two"></div>
            <div class="home-three"></div>
          </a>
        </div>

        <ul className="home-numbers-ul">
          <li>
            <a className="number-1-home" onClick={handleClick}>
              01
            </a>
          </li>
          <li>
            <a className="number-2-home" onClick={handleClick2}>
              02
            </a>
          </li>
          <li>
            <a className="number-3-home" onClick={handleClick3}>
              03
            </a>
          </li>
          <li>
            <a className="number-4-home" onClick={handleClick4}>
              04
            </a>
          </li>
        </ul>
        <a href="/xerite">
          <button className="home-button">
            <span className="home-button-span">XƏRİTƏDƏ GÖSTƏR</span>
          </button>
        </a>
      </div>
      <div className="images-container">
        <img src={frame_1} className="frame1" />
        <img src={frame_2} className="frame2" />
        <img src={frame_3} className="frame3" />
        <img src={frame_4} className="frame4" />
        <img src={frame_5} className="frame5" />
        <img src={frame_6} className="frame6" />
        <img src={frame_7} className="frame7" />
        <img src={frame_8} className="frame8" />
        <img src={frame_9} className="frame9" />
        <img src={frame_10} className="frame10" />
        <img src={frame_11} className="frame11" />
        <img src={frame_12} className="frame12" />
        <img src={frame_13} className="frame13" />
        <img src={frame_14} className="frame14" />
        <img src={frame_15} className="frame15" />
        <img src={frame_16} className="frame16" />
        <img src={frame_17} className="frame17" />
        <img src={frame_18} className="frame18" />
        <img src={frame_19} className="frame19" />
        <img src={frame_20} className="frame20" />
        <img src={frame_21} className="frame21" />
      </div>
      <Menu />
      {/* <div className="slider">
        <div className="preview-container">
          <ReactAudioPlayer src={susanitq} autoPlay={true} />

          <div className="speech-container">
            <p className="speech">Əziz Şuşa, sən azadsan!</p>
            <p className="speech-1"> Əziz Şuşa, biz qayıtmışıq! </p>
            <p className="speech-2">Əziz Şuşa, biz səni dirçəldəcəyik!</p>
          </div>
          <p className="president">Ilham Əliyev</p>
          <p className="presidentx">Azerbaycan Respublikasinin Prezidenti</p>
        </div>
      </div> */}
    </div>
  );
}
