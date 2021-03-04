import "./Meram.css";
import logo from "../Home/assets/medeniyyet-nazirliyi-logo.png";
import { BsArrowLeft } from "react-icons/bs";
import Menu from "../Menu/Menu";
function Meram() {
  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  return (
    <div className="meram-container">
      <div className="meram-heykel">
        <a href="/">
          <img src={logo} className="meram-logo" />
        </a>
        <a href="#" class="meram-hamburger" onClick={openNav}>
          <div class="meram-one"></div>
          <div class="meram-two"></div>
          <div class="meram-three"></div>
        </a>
      </div>

      <div className="meram-responsive">
        <div className="meram-arrow">
          <BsArrowLeft size={30} />
        </div>
        <p className="meram-rayonlar">Ana səhifə / Məramımız</p>
        <p className="meram-sub-rayonlar">Məramımız</p>

        <p className="meram-p">
          Ali Baş Komandan Prezident İlham Əliyevin rəhbərliyi altında rəşadətli
          ordumuz işğal olunmuş torpaqlarımızın azad edilməsi üçün uğurlu hərbi
          əməliyyatlar həyata keçirmiş, 30 ilə yaxın düşmən tapdağında olan
          ərazilərimiz həqiqi sahibinə geri qaytarılmışdır.<br></br>
          <br></br> Hazırda işğaldan azad olunmuş ərazilərdə dövlət qeydiyyatına
          alınmış 706 tarix və mədəniyyət abidəsi var ki, bu abidələrin
          əksəriyyəti məhv edilmiş və ya mənimsənilmişdir. Dövlət qeydiyyatına
          alınan abidələrin siyahısı aşağıdakılardır.
          <ul>
            <li> - 6 dünya əhəmiyyətli memarlıq abidələri </li>
            <li>- 5 dünya əhəmiyyətli arxeoloji abidələr </li>
            <li>- 119 ölkə əhəmiyyətli memarlıq abidələri </li>
            <li>- 121 ölkə əhəmiyyətli arxeoloji abidələr </li>
            <li> - 393 yerli əhəmiyyətli memarlıq abidələri </li>
            <li>
              - 23 yerli əhəmiyyətli bağ-park, monumental və xatirə abidələri
            </li>
            <li>- 22 yerli əhəmiyyətli arxeoloji abidələr </li>
            <li>- 17 dekorativ-tətbiqi sənət nümunələridir.</li>
          </ul>
          İşğal edilmiş ərazilərdə yerləşən dünya əhəmiyyətli tarix və
          mədəniyyət abidələri - Ağdam rayonunda Qutlu Musa oğlu türbəsi,
          Üzərliktəpə yaşayış yeri, Cəbrayıl rayonunda Xudafərin körpüləri,
          Niftalı kurqanları, Xocavənd rayonunda Azıx və Tağlar mağara
          düşərgələri, Kəlbəcər rayonunda Gəncəsər və Xudavəng monastırları,
          Şuşa şəhərində Şuşa Tarix-Memarlıq Qoruğu, Xocalı rayonunda Xocalı
          kurqanlarıdır.<br></br>
          <br></br> “Azərbaycan Respublikasının işğaldan azad olunmuş
          ərazilərində müvəqqəti xüsusi idarəetmənin təşkili” haqqında
          Azərbaycan Respublikası Prezidentinin 29 oktyabr 2020-ci il tarixli
          Fərmanının 7.8-ci bəndinin icrası üçün Dövlət Xidmətinin əməkdaşları
          işğaldan azad olunmuş rayonlara ezam edilmiş və mədəniyyət
          obyektlərinin (abidələrinin və müəssisələrinin) ilkin
          inventarlaşdırılması və mühafizəsi ilə bağlı vəzifələrin yerinə
          yetirilməsinə başlanılmışdır.<br></br>
          <br></br> İndiyədək aparılmış ilkin monitorinqlər zamanı dövlət
          qeydiyyatında olan 312 tarix-mədəniyyət abidəsinə baxış keçirilmişdir.
          <br></br>
          <br></br>
          Bundan əlavə həmin ərazilərdə yerləşən dövlət qeydiyyatında olmayan
          tarixi, memarlıq, arxeoloji əlamət daşıyan 108 obyektin* (yeni aşkar
          olunmuş abidə) monitorinqi aparılmışdır.<br></br>
          <br></br> Baxış keçirilən tarix-mədəniyyət abidələrinin və tarixi,
          memarlıq, arxeoloji əlamət daşıyan obyektlərin əksəriyyətinin
          işğalçılar tərəfindən tamamilə dağıdılaraq yalnız qalıqlarının
          qaldığı, müdaxilələrin olunduğu və vandalizmə məruz qaldığı aşkar
          edilmişdir.<br></br>
          <br></br>
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Meram;
