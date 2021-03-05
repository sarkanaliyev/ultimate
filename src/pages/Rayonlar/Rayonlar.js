import "./Rayonlar.css";
import logo from "../Home/assets/medeniyyet-nazirliyi-logo.png";
import RayonlarGrid from "../Rayonlar/RayonlarGrid";
import Menu from "../Menu/Menu";
export default function Rayonlar() {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <div className="rayonlar-container">
      <div className="rayonlar-heykel">
        <a href="/">
          <img src={logo} className="rayonlar-logo" />
        </a>
        <p className="rayonlar-az">AZ</p>

        <a href="#" class="rayonlar-hamburger" onClick={openNav}>
          <div class="rayonlar-one"></div>
          <div class="rayonlar-two"></div>
          <div class="rayonlar-three"></div>
        </a>
      </div>
      <div className="rayonlar-responsive">
        <p className="rayonlar-rayonlar">Ana səhifə / Rayonlar</p>
        <p className="rayonlar-sub-rayonlar">Rayonlar</p>
        <div className="rayonlar-grid">
          <RayonlarGrid />
        </div>
      </div>
      <Menu />
    </div>
  );
}
