import "./Menu.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function Menu() {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <div id="myNav" className="menu">
      <div className="menu-container">
        <ul>
          <div>
            <a href="/">
              <h1>Ana Səhifə</h1>
            </a>
            <a href="/xerite">
              <p>Xəritə</p>
            </a>
          </div>
          <div>
            <a href="/meram">
              <h1>Məramımız</h1>
            </a>
            <a href="/meram">
              <p>Məlumat</p>
            </a>
          </div>
          <div>
            <a href="/rayonlar">
              <h1>Rayonlar</h1>
            </a>
            <p>Ağdam</p>
            <a href="/cebrayil/abideler">
              <p>Cəbrayıl</p>
            </a>
            <a href="/fuzuli/abideler">
              <p>Füzuli</p>
            </a>
            {/* <p>Xankəndi</p> */}
            {/* <p>Xocalı</p> */}
            {/* <p>Xocavənd</p> */}
            <p>Kəlbəcər</p>
            <p>Qubadlı</p>
            <p>Qazax</p>
            <p>Laşın</p>
            <a href="/susa/abideler">
              <p>Şuşa</p>
            </a>
            <p>Zəngilan</p>
          </div>
          <div>
            <h1>Əhəmiyyət dərəcəsi üzrə</h1>
            <p>Dünya əhəmiyyətli abidələr</p>
            <p>Ölkə əhəmiyyətli abidələr</p>
            <p>Yerli əhəmiyyətli abidələr</p>
          </div>
          <div>
            <h1>Növ üzrə</h1>
            <p>Məscid</p>
            <p>Hamam</p>
            <p>İnzibati bina</p>
            <p>Yaşayış yeri</p>
            <p>Kurqan</p>
            <p>Türbə</p>
            <p>Körpü</p>
          </div>
        </ul>
      </div>
      <a className="closebtn" onClick={closeNav}>
        &times;
      </a>
    </div>
  );
}
