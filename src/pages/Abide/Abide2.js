import "./Abide.css";
import logored from "../Xerite/assets/logored.png";
import { BsArrowLeft } from "react-icons/bs";
import AbideMelumat from "./AbideMelumat";
import { useEffect } from "react";
import Menu from "../Menu/Menu";
import QalereyaGrid from "./QalereyaGrid";
import { BsArrowRight } from "react-icons/bs";
import karvansaray from "../Abideler/assets/Fuzuli/karvansaray/karvansaray.JPG";
import karvansarayarxiv from "../Abideler/assets/Fuzuli/karvansaray/karvansaray-sonra.jpeg";
import karvansaraysonra from "../Abideler/assets/Fuzuli/karvansaray/k-w.jpeg";
import { useState } from "react";

export default function Abide(props) {
  console.log(props.images);

  let [isgalindex, setIsgalIndex] = useState(0);

  function handleIsgal() {
    if (isgalindex < 2) {
      isgalindex += 1;
    }

    document.querySelector(
      ".abide-left"
    ).style.backgroundImage = `url(${props.images[2]})`;
  }

  function handleIsgalNext() {
    if (isgalindex !== 0) {
      isgalindex -= 1;
    }
    document.querySelector(
      ".abide-left"
    ).style.backgroundImage = `url(${props.images[0]})`;
  }

  function handleIsgalText() {
    // if (isgalindex !== 0) {
    //   isgalindex -= 1;
    // }
    document.querySelector(
      ".abide-left"
    ).style.backgroundImage = `url(${props.images[1]})`;
  }

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  useEffect(() => {
    document.querySelector(
      ".abide-left"
    ).style.backgroundImage = `url(${props.images[1]})`;
  });

  return (
    <div>
      <a href="/">
        <img src={logored} className="abide-logo" />
      </a>
      <a href="#" class="abide-hamburger" onClick={openNav}>
        <div class="abide-one"></div>
        <div class="abide-two"></div>
        <div class="abide-three"></div>
      </a>

      <div className="abide-left">
        <p className="isgal-sonra" onClick={handleIsgalText}>
          İşğaldan Sonra
        </p>
        {/* <BsArrowLeft
          size={30}
          color={"white"}
          className="isgal-ox"
          onClick={handleIsgalNext}
        />
        <BsArrowRight
          size={30}
          color={"white"}
          className="isgal-ox-sag"
          onClick={handleIsgal}
        /> */}
        <p className="isgal-ox-sag" onClick={handleIsgal}>
          Böyük Qayıdışdan Sonra
        </p>
        <p className="isgal-ox" onClick={handleIsgalNext}>
          İşğaldan Əvvəl
        </p>
      </div>

      <div className="abide-right">
        <div className="abide-right-main">
          <a href="/xerite">
            <BsArrowLeft size={"1.78125vw"} />
          </a>

          <p className="abide-right-rayon">{props.rayonName}</p>
          <p className="abide-right-abide">{props.abideName}</p>
          <div className="abide-right-melumat-div">
            <AbideMelumat
              abideUnvan={props.abideUnvan}
              abideTarix={props.abideTarix}
              abideEhemiyyet={props.abideEhemiyyet}
            />
          </div>
          <p className="abide-right-text">{props.abideText}</p>
          <p className="abide-right-qalereya">Qalereya</p>
          <QalereyaGrid images={props.images} />
        </div>
      </div>
      <Menu />
    </div>
  );
}
