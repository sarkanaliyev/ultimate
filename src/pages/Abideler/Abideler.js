import "./Abideler.css";
import logo from "../Home/assets/medeniyyet-nazirliyi-logo.png";
// import NestedGrid from "../components/NestedGrid";
// import FullWidthGrid3 from "../components/FullWidthGrid3";
import { BsArrowLeft } from "react-icons/bs";
// import search from "../assets/search.png";
// import AbidelerGrid from "../components/AbidelerGrid";
import { BsSearch } from "react-icons/bs";
// import AbidelerGrid2 from "../components/AbidelerGrid2";
import { useState } from "react";
import RayonlarGrid from "../Rayonlar/RayonlarGrid";
import AbidelerGrid from "../Abideler/AbidelerGrid";
import Menu from "../Menu/Menu";
export default function Abideler(props) {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <div className="abideler-container">
      <div className="abideler-heykel">
        <a href="/">
          <img src={logo} className="abideler-logo" />
        </a>
        <p className="abideler-az">AZ</p>

        <a href="#" class="abideler-hamburger" onClick={openNav}>
          <div class="abideler-one"></div>
          <div class="abideler-two"></div>
          <div class="abideler-three"></div>
        </a>
      </div>

      <div className="abideler-responsive">
        <div className="abideler-arrow">
          <a href="/rayonlar">
            <BsArrowLeft size={"2.6525198938992043vh"} />
          </a>
        </div>
        <p className="abideler-rayonlar">
          Ana səhifə / Rayonlar / {props.name}
        </p>
        <p className="abideler-sub-rayonlar">Abidələr</p>
        <div className="grid-wrap">
          <button className="button-1">
            <span>MEMARLIQ ABİDƏLƏRİ</span>
          </button>
          <button className="button-2">
            <span>BAĞ-PARK,MONOMENTAL VƏ XATİRƏ ABİDƏLƏRİ</span>
          </button>
          <button className="button-3">
            <span>ARXEOLOJİ ABİBƏLƏR</span>
          </button>
          <button className="button-4">
            <span>DEKORATİV-TƏTBİQİ SƏNƏT NÜMUNƏLƏRİ</span>
          </button>
        </div>
        <div className="abide-grid">
          <AbidelerGrid
            images={props.images}
            names={props.names}
            routes={props.routes}
          />
          {/* <RayonlarGrid /> */}
        </div>
      </div>
      <Menu />
    </div>
  );
}
