import "./Abide.css";
import logored from "../Xerite/assets/logored.png";
import { BsArrowLeft } from "react-icons/bs";
import AbideMelumat from "./AbideMelumat";
import { useEffect } from "react";
import Menu from "../Menu/Menu";
import QalereyaGrid from "./QalereyaGrid";
export default function Abide(props) {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  useEffect(() => {
    document.querySelector(
      ".abide-left"
    ).style.backgroundImage = `url(${props.images[0]})`;
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

      <div className="abide-left"></div>

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
