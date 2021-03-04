import { useEffect, useState } from "react";

import "./Xerite.css";

import { Timeline } from "gsap/gsap-core";
import { Power2, TimelineLite } from "gsap";
gsap.registerPlugin(Timeline, Power2);

import XeriteSag from "./XeriteSag";
import Menu from "../Menu/Menu";

import xrt from "./assets/xerite-transparant.png";
import logored from "./assets/logored.png";

import xerite_mescid from "./assets/xerite-mescid.png";
import xerite_yasayis from "./assets/xerite-yasayis.png";
import xerite_karvansaray from "./assets/xerite-karvansaray.png";
import xerite_turbe from "./assets/xerite-turbe.png";
import xerite_korpu from "./assets/xerite-korpu.svg";

export default function Xerite() {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  const [rayonName, setRayonName] = useState("");

  const [obyekt, setObyekt] = useState([]);

  const tl = new Timeline({ paused: true });

  const handleClick = (obj) => {
    setRayonName(obj.rName);

    setObyekt(obj.rList);
    console.log(obj.rList);
    tl.to(".xerite-div", 1, {
      position: "absolute",
      width: "60%",
      //   height: "100%",
      top: 0,
      left: 0,
      //   transform: "none",
      backgroundColor: "white",
      ease: Power2.easeOut,
      borderRight: "2px solid black",
    }).to(
      ".xerite-sag-container",
      2,
      {
        width: "40%",
        // height: "100vh",
        opacity: 1,
        ease: Power2.easeOut,
      },
      "-= 0.5"
    );

    tl.play();
  };

  return (
    <div className="xerite-container">
      <a href="/">
        <img src={logored} className="xerite-logo-red" />
      </a>
      <a href="#" class="xerite-hamburger" onClick={openNav}>
        <div class="xerite-one"></div>
        <div class="xerite-two"></div>
        <div class="xerite-three"></div>
      </a>

      <div className="xerite-div">
        <img className="xerite" src={xrt} />
        <button
          className="agdam"
          onClick={() => {
            handleClick({
              rName: "Ağdam",
              rList: [
                {
                  rIcon: xerite_yasayis,
                  rText: "Üzərliktəpə yaşayış yeri, tunc dövrü, Ağdam şəhəri",
                  rRoute: "/agdam/qarakopektepe",
                },
                {
                  rIcon: xerite_karvansaray,
                  rText: "Karvansaray, XVlll əsr, Şahbulaq kəndi",
                  rRoute: "/agdam/qarakopektepe",
                },
                {
                  rIcon: xerite_mescid,
                  rText: "Məscid, 1868-ci il, Ağdam şəhəri",
                  rRoute: "/agdam/qarakopektepe",
                },
                {
                  rIcon: xerite_turbe,
                  rText:
                    "Qulu Musa oğlu türbəsi, 1314-cü il, Xaçın Türbətli kəndi",
                  rRoute: "/agdam/qarakopektepe",
                },
              ],
            });
          }}
        ></button>
        <p className="toolpit-agdam">Ağdam</p>

        <button
          className="fuzuli"
          onClick={() => {
            handleClick({
              rName: "Füzuli",
              rList: [
                {
                  rIcon: xerite_yasayis,
                  rText: "Qaraköpəktəpə yaşayış yeri",
                  rRoute: "/fuzuli/qarakopektepe",
                },
                {
                  rIcon: xerite_karvansaray,
                  rText: "Karvansaray, XVlll əsr, Qarğabazar kəndi",
                  rRoute: "/fuzuli/karvansaray",
                },
                {
                  rIcon: xerite_mescid,
                  rText: "Hacı Ələkbər Məscidi, XVll əsr, Qarğabazar kəndi",
                  rRoute: "/fuzuli/haci_elekber_mescidi",
                },
                {
                  rIcon: xerite_turbe,
                  rText: "Mirəli türbəsi. Aşağı Veysəlli kəndi",
                  rRoute: "/fuzuli/turbe",
                },
              ],
            });
          }}
        >
          fuzuli
        </button>
        <p className="toolpit-fuzuli">Füzuli</p>

        <button
          className="kelbecer"
          onClick={() => {
            handleClick({
              rName: "Kəlbəcər",
              rList: [
                {
                  rIcon: xerite_yasayis,
                  rText: "Qaraköpəktəpə yaşayış yeri",
                  rRoute: "/kelbecer/qarakopektepe",
                },
                {
                  rIcon: xerite_karvansaray,
                  rText: "Karvansaray, XVlll əsr, Qarğabazar kəndi",
                  rRoute: "/kelbecer/karvansaray",
                },
                {
                  rIcon: xerite_mescid,
                  rText: "Hacı Ələkbər Məscidi, XVll əsr, Qarğabazar kəndi",
                  rRoute: "/kelbecer/haci_elekber_mescidi",
                },
                {
                  rIcon: xerite_turbe,
                  rText: "Mirəli türbəsi. Aşağı Veysəlli kəndi",
                  rRoute: "/kelbecer/turbe",
                },
              ],
            });
          }}
        >
          kelbecer
        </button>
        <p className="toolpit-kelbecer">Kəlbəcər</p>

        <button
          className="lacin"
          onClick={() => {
            handleClick({
              rName: "Laçın",
              rList: [
                {
                  rIcon: xerite_yasayis,
                  rText: "Qaraköpəktəpə yaşayış yeri",
                  rRoute: "/lacin/qarakopektepe",
                },
                {
                  rIcon: xerite_karvansaray,
                  rText: "Karvansaray, XVlll əsr, Qarğabazar kəndi",
                  rRoute: "/lacin/karvansaray",
                },
                {
                  rIcon: xerite_mescid,
                  rText: "Hacı Ələkbər Məscidi, XVll əsr, Qarğabazar kəndi",
                  rRoute: "/lacin/haci_elekber_mescidi",
                },
                {
                  rIcon: xerite_turbe,
                  rText: "Mirəli türbəsi. Aşağı Veysəlli kəndi",
                  rRoute: "/lacin/turbe",
                },
              ],
            });
          }}
        >
          lacin
        </button>
        <p className="toolpit-lacin">Laçın</p>

        <button
          className="susa"
          onClick={() => {
            handleClick({
              rName: "Şuşa",
              rList: [
                {
                  rIcon: xerite_yasayis,
                  rText: "X. Natavanın evi",
                  rRoute: "/susa/natavan",
                },
                {
                  rIcon: xerite_karvansaray,
                  rText: "Yuxarı Gövhər ağa məscidi",
                  rRoute: "/susa/yuxari_govher_aga",
                },
                {
                  rIcon: xerite_mescid,
                  rText: "Hacı Ələkbər Məscidi, XVll əsr, Qarğabazar kəndi",
                  rRoute: "/susa/haci_elekber_mescidi",
                },
                {
                  rIcon: xerite_turbe,
                  rText: "Mirəli türbəsi. Aşağı Veysəlli kəndi",
                  rRoute: "/susa/turbe",
                },
              ],
            });
          }}
        >
          susa
        </button>
        <p className="toolpit-susa">Şuşa</p>

        <button
          className="qubadli"
          onClick={() => {
            handleClick({
              rName: "Qubadlı",
              rList: [
                {
                  rIcon: xerite_yasayis,
                  rText: "Qaraköpəktəpə yaşayış yeri",
                  rRoute: "/qubadli/qarakopektepe",
                },
                {
                  rIcon: xerite_karvansaray,
                  rText: "Karvansaray, XVlll əsr, Qarğabazar kəndi",
                  rRoute: "/qubadli/karvansaray",
                },
                {
                  rIcon: xerite_mescid,
                  rText: "Hacı Ələkbər Məscidi, XVll əsr, Qarğabazar kəndi",
                  rRoute: "/qubadli/haci_elekber_mescidi",
                },
                {
                  rIcon: xerite_turbe,
                  rText: "Mirəli türbəsi. Aşağı Veysəlli kəndi",
                  rRoute: "/qubadli/turbe",
                },
              ],
            });
          }}
        >
          qubadli
        </button>
        <p className="toolpit-qubadli">Qubadlı</p>

        <button
          className="cebrayil"
          onClick={() => {
            handleClick({
              rName: "Cəbrayıl",
              rList: [
                {
                  rIcon: xerite_korpu,
                  rText: "Xudafərin körpüsü",
                  rRoute: "/cebrayil/xudaferin",
                },
                {
                  rIcon: xerite_karvansaray,
                  rText: "Çələbilər məscidi",
                  rRoute: "/cebrayil/celebir_mescid",
                },
                {
                  rIcon: xerite_mescid,
                  rText: "Sultan Allahveri hamamı",
                  rRoute: "/cebrayil/sultan_allahverdi_hamam",
                },
                {
                  rIcon: xerite_turbe,
                  rText: "Səkkizguşəli türbə",
                  rRoute: "/cebrayil/sekkizguseli_turbe",
                },
              ],
            });
          }}
        >
          cebrayil
        </button>
        <p className="toolpit-cebrayil">Cəbrayıl</p>

        <button
          className="zengilan"
          onClick={() => {
            handleClick({
              rName: "Zəngilan",
              rList: [
                {
                  rIcon: xerite_yasayis,
                  rText: "Qaraköpəktəpə yaşayış yeri",
                  rRoute: "/zengilan/qarakopektepe",
                },
                {
                  rIcon: xerite_karvansaray,
                  rText: "Karvansaray, XVlll əsr, Qarğabazar kəndi",
                  rRoute: "/zengilan/karvansaray",
                },
                {
                  rIcon: xerite_mescid,
                  rText: "Hacı Ələkbər Məscidi, XVll əsr, Qarğabazar kəndi",
                  rRoute: "/zengilan/haci_elekber_mescidi",
                },
                {
                  rIcon: xerite_turbe,
                  rText: "Mirəli türbəsi. Aşağı Veysəlli kəndi",
                  rRoute: "/zengilan/turbe",
                },
              ],
            });
          }}
        >
          zengilan
        </button>
        <p className="toolpit-zengilan">Zəngilan</p>
      </div>
      {/* <div class="vl"></div> */}

      <XeriteSag name={rayonName} obyekt={obyekt} />

      <Menu />
    </div>
  );
}
