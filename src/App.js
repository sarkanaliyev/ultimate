import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import Xerite from "../src/pages/Xerite/Xerite";
import Abide from "./pages/Abide/Abide";
import Abide2 from "./pages/Abide/Abide2";
import Rayonlar from "./pages/Rayonlar/Rayonlar";
import Abideler from "./pages/Abideler/Abideler";
import Meram from "./pages/Meram/Meram";

import karvansaray from "../src/pages/Abideler/assets/Fuzuli/karvansaray/karvansaray1.jpg";
import karvansarayarxiv from "../src/pages/Abideler/assets/Fuzuli/karvansaray/karvansaray-sonra.jpg";
import karvansaraysonra from "../src/pages/Abideler/assets/Fuzuli/karvansaray/k-w.jpg";

import qarakopektepe from "../src/pages/Abideler/assets/Fuzuli/qarakopektepe/qarakopektepe1.jpg";
import qarakopektepe2 from "../src/pages/Abideler/assets/Fuzuli/qarakopektepe/qarakopektepe2.jpg";
import qarakopektepe3 from "../src/pages/Abideler/assets/Fuzuli/qarakopektepe/qarakopektepe3.jpg";
import qarakopektepe4 from "../src/pages/Abideler/assets/Fuzuli/qarakopektepe/qarakopektepe4.jpg";
import haci_elekber_mescidi from "../src/pages/Abideler/assets/Fuzuli/haci_elekber_mescidi/haci_elekber_new.jpg";
import turbe2 from "../src/pages/Abideler/assets/Fuzuli/turbe/turbe2.jpg";

import celebir_mescid from "../src/pages/Abideler/assets/Cebrayil/celebir_mescid/celebir_mescid.jpg";
import xudaferin from "../src/pages/Abideler/assets/Cebrayil/xudaferin/xudaferin.jpg";
import sultan_allahverdi_hamam from "../src/pages/Abideler/assets/Cebrayil/sultan_allahverdi_hamam/sultan_allahverdi_hamam.jpg";
import sekkizguseli_turbe from "../src/pages/Abideler/assets/Cebrayil/sekkizguseli_turbe/sekkizguseli_turbe.jpg";

import natavan1 from "../src/pages/Abideler/assets/Susa/natavan/natavan1.jpg";
import natavan2 from "../src/pages/Abideler/assets/Susa/natavan/natavan2.jpeg";
import natavan3 from "../src/pages/Abideler/assets/Susa/natavan/natavan3.jpg";
import natavan4 from "../src/pages/Abideler/assets/Susa/natavan/natavan4.jpg";

import govher_aga from "../src/pages/Abideler/assets/Susa/govher_aga/govher_aga_orta.jpg";
import govher_aga_evvel from "../src/pages/Abideler/assets/Susa/govher_aga/govher_aga_evvel.jpg";
import govher_aga_sonra from "../src/pages/Abideler/assets/Susa/govher_aga/govher_aga_sonra.jpg";

import asagi_govher_aga1 from "../src/pages/Abideler/assets/Susa/asagi_govher_aga/asagi_govher_aga1.jpg";
import asagi_govher_aga2 from "../src/pages/Abideler/assets/Susa/asagi_govher_aga/asagi_govher_aga2.jpg";
import asagi_govher_aga3 from "../src/pages/Abideler/assets/Susa/asagi_govher_aga/asagi_govher_aga3.jpg";
import asagi_govher_aga4 from "../src/pages/Abideler/assets/Susa/asagi_govher_aga/asagi_govher_aga4.jpg";
import asagi_govher_aga5 from "../src/pages/Abideler/assets/Susa/asagi_govher_aga/asagi_govher_aga5.jpg";
import asagi_govher_aga6 from "../src/pages/Abideler/assets/Susa/asagi_govher_aga/asagi_govher_aga6.jpg";
import asagi_govher_aga7 from "../src/pages/Abideler/assets/Susa/asagi_govher_aga/asagi_govher_aga7.jpg";
import asagi_govher_aga8 from "../src/pages/Abideler/assets/Susa/asagi_govher_aga/asagi_govher_aga8.jpg";

import hamam1 from "../src/pages/Abideler/assets/Susa/hamam/hamam1.jpg";
import hamam2 from "../src/pages/Abideler/assets/Susa/hamam/hamam2.jpg";
import hamam3 from "../src/pages/Abideler/assets/Susa/hamam/hamam3.jpg";

import saatli_evvel from "../src/pages/Abideler/assets/Susa/saatli/saatli_evvel.jpg";
import saatli_orta from "../src/pages/Abideler/assets/Susa/saatli/saatli_orta.jpg";
import saatli_sonra from "../src/pages/Abideler/assets/Susa/saatli/saatli_sonra.jpg";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/xerite" component={Xerite} />
        <Route exact path="/abide" component={Abide} />
        <Route exact path="/rayonlar" component={Rayonlar} />
        <Route exact path="/abideler" component={Abideler} />
        <Route exact path="/meram" component={Meram} />
        {/* Abide */}
        {/* Fuzuli */}
        <Route exact path="/fuzuli/abideler">
          <Abideler
            exact
            name={"Füzuli"}
            images={[karvansaray, qarakopektepe, haci_elekber_mescidi, turbe2]}
            names={[
              "Karvansaray, XVII əsr, Qarğabazar kəndi",
              "Qaraköpəktəpə yaşayış yeri",
              "Hacı Ələkbər Məscidi",
              "Qarğabazar türbəsi",
            ]}
            routes={[
              "fuzuli/karvansaray",
              "fuzuli/qarakopektepe",
              "fuzuli/haci_elekber_mescidi",
              "fuzuli/turbe",
            ]}
          />
        </Route>
        <Route exact path="/cebrayil/abideler">
          <Abideler
            exact
            name={"Cəbrayıl"}
            images={[
              xudaferin,
              celebir_mescid,
              sultan_allahverdi_hamam,
              sekkizguseli_turbe,
            ]}
            names={[
              "Xudafərin körpüsü",
              "Çələbilər məscidi",
              "Sultan Allahverdi Hamamı",
              "Səkkizguşəli türbə",
            ]}
            routes={[
              "cebrayil/xudaferin",
              "cebrayil/celebir_mescid",
              "cebrayil/sultan_allahverdi_hamam",
              "cebrayil/sekkizguseli_turbe",
            ]}
          />
        </Route>
        <Route exact path="/susa/abideler">
          <Abideler
            exact
            name={"Şuşa"}
            images={[natavan1, govher_aga, asagi_govher_aga1, hamam1]}
            names={[
              "X. Natavanın Evi",
              "Yuxarı Gövhər Ağa Məscidi",
              "Aşağı Gövhər ağa məscidi",
              "Şirin Su Hamamı",
            ]}
            routes={[
              "susa/natavan",
              "susa/yuxari_govher_aga",
              "susa/asagi_govher_aga",
              "susa/hamam",
            ]}
          />
        </Route>
        <Route path="/fuzuli/karvansaray">
          <Abide2
            exact
            rayonName={"Füzuli"}
            abideName={"Karvansaray, XVII əsr, Qarğabazar kəndi"}
            abideText1={
              "Karvansara kəndin mərkəzində çox da hündür olmayan təpənin döşündə (eni 23,67, uzunu 34,70) inşa olunmuşdur. Elmi mənbələrdə onun tikilmə tarixi 1681-ci il göstərilsə də, karvansaranın memarı məlum deyil. Füzuli rayonundakı Qarğabazar kəndinin mərkəzində Karvansara tikildiyi kəndin adına uyğun olaraq adlandırılsa da, bu tarixi abidəyə bəzən Şah Abbas karvansarası da deyirlər."
            }
            abideText2={
              "Giriş fraqmentdən göründüyü kimi, karvansaranın partalının birinci yarımdairə tağbənd ilə ondan nisbətən böyük olan ikinci oxvari tağbəndləri arasında xüsusi şəkildə yerləşdirilmiş üç ədəd kvadrat formalı daşlardan kənardakılar üzərində zoomorf və həndəsi ornamentlər işlənmişdir. Həmin daşların arasındakı nisbətən böyük daşın üzərində isə karvansara memarının adı və tikilmə tarixi həkk olunduğu güman edilir. Lakin orada tədqiqat işləri aparanda heç bir yazı nümunəsi qalmamışdır. Bu məsələ ilə əlaqədar yerli yaşlı sakinlərin dediyinə görə burada doğrudan da əski əlifba ilə yazılmış yazı nümunəsi olmuşdur."
            }
            abideText3={
              "Həmin daşların arasındakı nisbətən böyük daşın üzərində isə karvansara memarının adı və tikilmə tarixi həkk olunduğu güman edilir. Lakin orada tədqiqat işləri aparanda heç bir yazı nümunəsi qalmamışdır. Bu məsələ ilə əlaqədar yerli yaşlı sakinlərin dediyinə görə burada doğrudan da əski əlifba ilə yazılmış yazı nümunəsi olmuşdur."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[karvansaray, karvansaraysonra, karvansarayarxiv]}
          />
        </Route>
        <Route path="/fuzuli/qarakopektepe">
          <Abide
            exact
            rayonName={"Füzuli"}
            abideName={"Qaraköpəktəpə yaşayış yeri"}
            abideText1={
              "Qaraköpəktəpə yaşayış yeri Füzuli şəhəri yaxınlığında Kiçik Qafqazın cənub-şərq ətəklərində, Köndələnçayın sahilində yerləşir. Abidə üst hissəsi yastı olan konus formalı yüksək təpə şəklindədir. Təpənin hündürlüyü 50 m olub, diametri şimaldan cənuba 220 m, şərqdən qərbə 180 m təşkil edir."
            }
            abideText2={
              "Burada ilk araşdırmaları həvəskar alman arxeoloqu E.A.Resler, Moskva İmperator Arxeoloji Cəmiyyətinin üzvü A.A.İvanovski etmiş, 1964-cü ildən başlayaraq 80-ci illərin sonunadək Qüdrət İsmayılzadə arxeoloji qazıntılar aparmışdır.Aparılan arxeoloji tədqiqatlar abidənin e.ə. V minillikdən b.e.-nın XVIII əsrinə kimi yaşayış yeri olduğunu müəyyən etmişdir. "
            }
            abideText3={
              "Qarakopəktəpənin ən qədim mərhələsi mezolit dövrünə təsadüf edir. Abidədə aşkar olunan çaxmaq daşı və obsidiandan hazırlanmış mikrolit əşyaiar həmin dovrdə bu ərazinin məskunlaşmasının əyani sübutudur. Qaraköpəktəpədə üzə çıxarılan növbəti təbəqə formalaşmış oturaq əkinçilik dövrü ilə bağlıdır. Bu dövr e.ə. VI-V minilliklərə təsadüf edir. Abidənin bu mədəni qatında daş, sumuk və buynuzdan hazırlanmış kərki və oraqlar, xarakterik xususiyyətlərə malik olan qablar aşkar edilmişdir. Tunc emalının başlandığı və Azərbaycan ərazisində ilkin tunc mədəniyyətinin yayılması dövründə, e.ə. IV—III minilliklərdə bu arxeoloji abıdənin yamacı və ətəkiərində dairəvi və düzbucaq şəkilli yaşayış və məişət-təsərrüfat xarakterli tikililər inşa edilmişdir. Burada qədim sənətkarlıq növləri olan metalişlemə, dulusçuluq, toxuculuq və s. inkişaf etmişdir."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[
              qarakopektepe,
              qarakopektepe2,
              qarakopektepe3,
              qarakopektepe4,
            ]}
          />
        </Route>
        <Route path="/fuzuli/haci_elekber_mescidi">
          <Abide
            exact
            rayonName={"Füzuli"}
            abideName={"Hacı Ələkbər Məscidi"}
            abideText1={
              "Füzuli şəhərindəki Hacı Ələkbər məscidi memar Kərbalayı Səfixanın ilkin işlərindəndir. Kitabədə məscidin tikilmə tarixi də – hicri tarixi ilə 1307-ci il göstərilir. Bu tarixi miladi təqviminə çevirəndə 1889–1890-cı illərə uyğun gəlir."
            }
            abideText2={
              "Bu dini ocaq Hacı Ələkbər məscidi adlandırılmışdır. Hacı Ələkbər xeyriyyəçi olduğundan o, bu məscidin inşası üçün vəsait ayıraraq, Şuşadan ustalar dəvət edib."
            }
            abideText3={
              "Xeyirxah işlərinə hörmət və ehtiram əlaməti olaraq yerli camaat Hacı Ələkbər bəyi öz tikdirdiyi məscidin ibadət zalının sol pəncərələrindən birincisinin yaxınlığında dəfn etmişdir."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[haci_elekber_mescidi]}
          />
        </Route>
        <Route path="/fuzuli/turbe">
          <Abide
            exact
            rayonName={"Füzuli"}
            abideName={"Qarğabazar türbəsi"}
            abideText1={
              "Füzuli rayonunun Qarğabazar kəndində yerləşən XVIII əsrə aid tarix-memarlıq abidəsi olan türbə təməldə səkkizguşəli plana malikdir. Türbənin inşası zamanı bişmiş qırmıızı kərpiclərdən istifadə edilmişdir. Qarğabazar türbəsinin əsas kompozisiya üstünlüyü qeyri-adi böyüklüyə malik olan giriş qapısıdır.Arazboyu ərazinin digər səkkizguşəli türbələrindən fərqli olaraq kərpic, Qarğabazar türbəsinin inşasında əsas inşaat materialı olaraq seçilmişdir. "
            }
            abideText2={
              "Daha əvvəlki dövrlərdə də kərpic əsas inşaat materialı kimi istifadə edilsə də, bu, heç vaxt türbə inşasına xas edilmirdi. Bu baxımdan Füzuli rayonunun Babı kəndi ərazisindəki Şeyx Babı türbəsi və onun ətrafındakı dini kompleks xarakterik xüsusiyyət daşıyır. Belə ki, kompleks ərazisinə daxil olan bütün tikililər (məscid, minarə və sair) kərpicdən inşa edilsə də, Şeyx Babı türbəsi daşdan tikilmişdir. "
            }
            abideText3={
              "Qarğabazar türbəsinin əsas kompozisiya üstünlüyü qeyri-adi böyüklüyə malik olan giriş qapısıdır. Bu cür böyük giriş XVI-XIX əsrdə nəinki abidənin yerləşdiyi Qarabağ və Arazboyu ərazi, o cümlədən, ümumilikdə Şimali Azərbaycan ərazisi üçün xarakterik deyildir. Şirvan və Arran memarları XIX əsrə kimi türbə inşası zamanı əvvəlki ustadların kompozisiya yanaşmalarını saxlamış, türbələr üçün kiçik giriş qapısı inşa etməklə ümumilikdə tikiliyə monumental xarakter verə bilmişlər."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[turbe2]}
          />
        </Route>
        {/* Cebrayil */}
        <Route path="/cebrayil/xudaferin">
          <Abide
            exact
            rayonName={"Cərayıl"}
            abideName={"Xudafərin körpüsü"}
            abideText1={
              "11 tağlı Xudafərin körpüsü (inventar №12, XI-XII əsrlər) və 15 tağlı Xudafərin körpüsü (inventar №13, XIII əsr) Azərbaycan Respublikası Nazirlər Kabinetinin 2 avqust 2001-ci il tarixli, 132 nömrəli qərarı ilə dünya əhəmiyyətli memarlıq abidələrinin siyahısına salınmışdır. Tikilmə tarixinə görə dövrünün ən əzəmətli mühəndis qurğularından olan Xudafərin körpüləri Azərbaycan Respublikası ilə İran İslam Respublikası arasında yerləşən möhtəşəm tarixi abidədir. "
            }
            abideText2={
              "Makedoniyalı İsgəndər, Elxani hökmdarı Hülakü xan və Şah İsmayılın rəhbərliyi ilə Qızılbaşlar öz yürüşləri zamanı bu körpülərdən istifadə etmişdir. Transkontinental yollar, o sıradan Böyük ipək Yolu üzərində olduğundan Xudafərin körpüləri yüzillər boyu yalnız ölkədaxili və ölkələrarası əlaqələrdə deyil, qitələrarası münasibətlərin, həmçinin ticarət yolu kimi də əhəmiyyətli rol oynamışdır. Müxtəlif çağlarda ayrı-ayrı xalqların və qüvvələrin miqrasiyasını istiqamətləndirən Xudafərin körpüləri Yaxın və Orta Şərq regionunun həm ən əzəmətli, həm də ən məşhur körpülərindən sayılır. Araz çayı üzərində tikilmiş 15 aşırımlı körpü antik dövrdə inşa edilmiş körpünün dayaqları üstündə qurulmuşdur."
            }
            abideText3={
              "Coğrafi mövqeyinin əlverişli olması, yəni sahillərin daha yaxın olaraq sal qayalarla əhatələnməsi burada körpünün tikilməsinə şərait yaratmışdır. 15 aşırımlı körpünün tağları bişmiş kərpicdən yığılsa da, doldurucu kimi çay daşından istifadə edilmişdir. Dayaqlar sərt qayanın üstündə qoyulduğundan aşırımların ölçülərində fərq vardır. 15 aşırımlı körpüdən 750 metrə qədər məsafədə yerləşən, Elxanilər dövründə (XIII əsrdə) tikilmiş 11 aşırımlı körpü daha əzəmətli görünür. Körpü tikinti materialı kimi yonulmuş sal qaya daşından inşa edilmişdir. Burada da dayaqlar çayın içərisindəki qayaların üstündə tikilmişdir."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[xudaferin]}
          />
        </Route>
        <Route path="/cebrayil/celebir_mescid">
          <Abide
            exact
            rayonName={"Cərayıl"}
            abideName={"Çələbir məscidi"}
            abideText1={
              "Cəbrayıl rayonunun Çələbilər kəndi ərazisində tikintisi XVI əsrə aid olan bu əzəmətli məscid Məhəmməd İbn Hacı Qaraman Əhmədli tərəfindən hicri 1088, miladi 1678-ci ildə tikilib."
            }
            abideText2={
              "Dini və dünyəvi elmlərin tədris edildiyi bu məscid-mədrəsədə ən böyük din xadimləri alimlər dərs deyiblər. XVIII əsr məşhur Azərbaycan klassik şairi Molla Vəli Vidadi də bu mədrəsədə dərs vermişdir."
            }
            abideText3={
              "Məscid kompleksi ərazisində xüsusi otaqlar, hücrələr olub ki, bu hücrələrdə şagirdlərə dərs keçilmişdir. İşğaldan əvvəl bu məscid-mədrəsə kompleksi yüksək səviyyədə bərpa olunmuş, ilkin formasına gətirilmişdir."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[celebir_mescid]}
          />
        </Route>
        <Route path="/cebrayil/sultan_allahverdi_hamam">
          <Abide
            exact
            rayonName={"Cərayıl"}
            abideName={"Sultan Allahverdi Hamamı"}
            abideText1={
              "Füzuli rayonunun Qarğabazar kəndində yerləşən XVIII əsrə aid tarix-memarlıq abidəsi olan türbə təməldə səkkizguşəli plana malikdir. Türbənin inşası zamanı bişmiş qırmıızı kərpiclərdən istifadə edilmişdir. Qarğabazar türbəsinin əsas kompozisiya üstünlüyü qeyri-adi böyüklüyə malik olan giriş qapısıdır.Arazboyu ərazinin digər səkkizguşəli türbələrindən fərqli olaraq kərpic, Qarğabazar türbəsinin inşasında əsas inşaat materialı olaraq seçilmişdir."
            }
            abideText2={
              "Daha əvvəlki dövrlərdə də kərpic əsas inşaat materialı kimi istifadə edilsə də, bu, heç vaxt türbə inşasına xas edilmirdi. Bu baxımdan Füzuli rayonunun Babı kəndi ərazisindəki Şeyx Babı türbəsi və onun ətrafındakı dini kompleks xarakterik xüsusiyyət daşıyır. Belə ki, kompleks ərazisinə daxil olan bütün tikililər (məscid, minarə və sair) kərpicdən inşa edilsə də, Şeyx Babı türbəsi daşdan tikilmişdir."
            }
            abideText3={
              "Qarğabazar türbəsinin əsas kompozisiya üstünlüyü qeyri-adi böyüklüyə malik olan giriş qapısıdır. Bu cür böyük giriş XVI-XIX əsrdə nəinki abidənin yerləşdiyi Qarabağ və Arazboyu ərazi, o cümlədən, ümumilikdə Şimali Azərbaycan ərazisi üçün xarakterik deyildir. Şirvan və Arran memarları XIX əsrə kimi türbə inşası zamanı əvvəlki ustadların kompozisiya yanaşmalarını saxlamış, türbələr üçün kiçik giriş qapısı inşa etməklə ümumilikdə tikiliyə monumental xarakter verə bilmişlər."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[sultan_allahverdi_hamam]}
          />
        </Route>
        <Route path="/cebrayil/sekkizguseli_turbe">
          <Abide
            exact
            rayonName={"Cərayıl"}
            abideName={"Səkkizguşəli türbə"}
            abideText1={
              "Füzuli rayonunun Qarğabazar kəndində yerləşən XVIII əsrə aid tarix-memarlıq abidəsi olan türbə təməldə səkkizguşəli plana malikdir. Türbənin inşası zamanı bişmiş qırmıızı kərpiclərdən istifadə edilmişdir. Qarğabazar türbəsinin əsas kompozisiya üstünlüyü qeyri-adi böyüklüyə malik olan giriş qapısıdır.Arazboyu ərazinin digər səkkizguşəli türbələrindən fərqli olaraq kərpic, Qarğabazar türbəsinin inşasında əsas inşaat materialı olaraq seçilmişdir."
            }
            abideText2={
              "Daha əvvəlki dövrlərdə də kərpic əsas inşaat materialı kimi istifadə edilsə də, bu, heç vaxt türbə inşasına xas edilmirdi. Bu baxımdan Füzuli rayonunun Babı kəndi ərazisindəki Şeyx Babı türbəsi və onun ətrafındakı dini kompleks xarakterik xüsusiyyət daşıyır. Belə ki, kompleks ərazisinə daxil olan bütün tikililər (məscid, minarə və sair) kərpicdən inşa edilsə də, Şeyx Babı türbəsi daşdan tikilmişdir."
            }
            abideText3={
              "Qarğabazar türbəsinin əsas kompozisiya üstünlüyü qeyri-adi böyüklüyə malik olan giriş qapısıdır. Bu cür böyük giriş XVI-XIX əsrdə nəinki abidənin yerləşdiyi Qarabağ və Arazboyu ərazi, o cümlədən, ümumilikdə Şimali Azərbaycan ərazisi üçün xarakterik deyildir. Şirvan və Arran memarları XIX əsrə kimi türbə inşası zamanı əvvəlki ustadların kompozisiya yanaşmalarını saxlamış, türbələr üçün kiçik giriş qapısı inşa etməklə ümumilikdə tikiliyə monumental xarakter verə bilmişlər."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[sekkizguseli_turbe]}
          />
        </Route>
        {/* Susa */}
        <Route path="/susa/natavan">
          <Abide2
            exact
            rayonName={"Şuşa"}
            abideName={"X.Natəvanın evi"}
            abideText1={
              "X.Natəvanın evi Azərbaycan Respublikasının Nazirlər Kabinetinin 2 avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə ölkə əhəmiyyətli memarlıq abidəsi kimi (inventar № 342, tarixi- XVIII əsr)  dövlət qeydiyyatına alınmışdır."
            }
            abideText2={
              "Xurşidbanu Natəvanın evi Şuşanın ilkin inşa edilmiş mülklərindən biridir. Sifarişçisi Xan qızı olan sarayın tikilmə tarixi və kim tərəfindən inşa olunduğu haqqında dəqiq məlumat yoxdur. XIX əsrə aid olunur. Saray böyük bir ərazini əhatə edən həyətdən ibarətdir. Bu həyətdə Natəvanın özünün evi, ata mülkü Mehdiqulu xanın imarəti, böyük buzxana, boyuk düzbucaqlı formada hovuz və muxtəlif xidməti tikililər olmuşdur.Xurşidbanu ailənin yeganə övladı, həm də Qarabağ xanlığının sоnuncu vərəsəsi оlduğu ücün оnu sarayda “Durru yeкta” (Təк inci), el arasında isə “Xan qızı” cağırırdılar."
            }
            abideText3={
              " Zəmanəsinin görkəmli şəxsiyyətlərindən olub, təkcə Azərbaycanda deyil, bütün Zaqafqaziyada xeyirxahlığı və mesenatlığı ilə tanınmışdı. O, kasıblara əl tutmuş, Şuşaya su cəkdirmişdi. Cəkdirdiyi bulaq “Xan qızı bulağı”adı ilə məşhur idi. Xurşidbanu Natəvan 1897-ci il oktyabrın 1-də vəfat etmişdir və məzarı Ağdamın “İmarət” qəbiristanlığındadır. Təssüflə qeyd etmək yerinə düşər ki, “Xan qızı”nın məzarı da məhv edilərək erməni vandalizminin qurbanına çevrilmişdir.Sovet donəmində Bülbülün təşəbbüsü ilə Azərbaycan SSR Xalq Maarif Komissarlığının 10 oktyabr 1932-ci il tarixli Qərarına əsasən rəsmi olaraq Şuşa Musiqi Məktəbi yaradılmışdır (bu həm də Azərbaycanda yaradılan ilk uşaq musiqi məktəbi idi). Məktəb Xan qızı Natəvanın evi olmuş binada fəaliyyətə başlamışdır. Ata mülkünün binasında isə uşaq sanatoriyası yerləşdirilmişdir. 1987-ci ildə musiqi məktəbi digər binaya köcürülərək binada bərpa işləri aparıldıqdan sonra Nizami Gəncəvi adına Milli Azərbaycan Ədəbiyyatı Muzeyinin filialı olan Xurşidbanu Natəvanın evi ev-muzeyi kimi fəaliyyətə başlamışdır. 8 may 1992-ci ildə Şuşa şəhəri Ermənistan silahlı qüvvələri tərəfindən işğal olunduqdan sonra saray kompleksi də dağıntıya məruz qalmışdır.Bu abidə iki evdən ibarətdir ki, hazırda hər iki evin yalnız divarlarının bir hissəsi qalmışdır. İşğaldan sonra ermənilər tərəfindən dam örtüyü tamamilə, eləcə də divarlarının bir hissəsi uçurulmuş, tikililərin hər ikisinin ilkin görkəminə ciddi xələl dəymişdir."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[natavan1, natavan3, natavan4]}
          />
        </Route>
        <Route path="/susa/yuxari_govher_aga">
          <Abide2
            exact
            rayonName={"Şuşa"}
            abideName={"Yuxarı Gövhər ağa məscidi"}
            abideText1={
              "Yuxarı Gövhər ağa məscidi Azərbaycan Respublikasının Nazirlər Kabinetinin 2 avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə ölkə əhəmiyyətli memarlıq abidəsi kimi (inventar № 344, tarixi- 1768—1769-cu illər)  dövlət qeydiyyatına alınmışdır.Qarabağ xanlığının mərkəzini Şahbulaq qalasından Şuşaya köçürməyə qərar verən Pənahəli xan yeni şəhər və infrastruktur tikililərini inşa etməyə rəvac verir. 1750–ci illərdə onun göstərişi ilə Şuşa qalası, qala daxilində xan ailəsi üzvləri üçün malikanə və saraylar, o cümlədən məscid də inşa edilir. "
            }
            abideText2={
              " Şuşada həmin dövrdə bütün tikililər kimi “Yuxarı Gövhər ağa” məscidi də ilkin olaraq kiçik həcmdə inşa edilmişdir. Həmin məscidin memarlıq xüsusiyyətləri haqqında heç nə məlum deyil. Qarabağ tarixçisi Baharlının məlumatına görə, məscid iki qapıya malik idi. E.Avalovun “Şuşa şəhərinin memarlığı” adlı kitabında isə bele qeyd olunur: Qamışın inşaat materialı kimi seçilməsi məscidin tez bir zamanda inşa olunması üçün idi. Lakin bu məlumatın nə dərəcədə dəqiq olub-olmaması barədə məlumat yoxdur."
            }
            abideText3={
              "Pənahəli xanın oğlu İbrahimxəlil xan hakimiyyətə gəldikdən sonra, miladi 1768-1769-cu illərdə (hicri 1182-ci il) ilkin tikilmiş kiçik həcmli binanın yerində qoşa minarəli iri həcmli məscid tikdirir. Yeni məscidin inşasında ağ rəngli yerli qaya daşından, bişmiş kərpicdən istifadə olunmuşdur.Biblioqrafik məlumatlara əsasən məscidin növbəti dəfə XIX əsrin I yarısında Gövhər ağanın maddi dəstəyi ilə İbrahimxəlil xanın yararsız hala düşmüş məscidinin yerində qoşa minarəli növbəti məscid inşa etdirdiyi qeyd olunur. Bu barədə Qarabağ xanlığının baş vəziri olmuş tarixçi Mirzə Camal Cavanşir Qarabaği (1773 – 1853) 1847 – ci ildə qələmə aldığı “Qarabağ tarix”əsərində İbrahim xandan qalmış bina və imarətləri qeyd edərkən belə yazır: “I müsəlman tarixi il 1182-ci ildə (1768/69) tikilmiş böyük camaat məscididir. Bu məscid köhnəldikdən sonra onu möhtərəm qızı rəhmətlik Gövhər ağa təmir edib, əvvəlkindən daha gözəl şəklə salmışdır”Şuşa şəhəri Ermənistan silahlı qüvvələri tərəfindən işğal edildikdən sonra məscid vandalizmə məruz qalmış, məscidin minarələri erməni əsgərləri tərəfindən hədəfə alınaraq atəşə məruz qalmışdır.	Ermənistan Respublikası 2019-cu ildə növbəti təxribata əl ataraq, Yuxarı Gövhər-ağa məscidində “bərpa” işləri aparmış və abidənin fars məscidi olmasını iddia etmişdir."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[govher_aga_evvel, govher_aga, govher_aga_sonra]}
          />
        </Route>
        <Route path="/susa/asagi_govher_aga">
          <Abide
            exact
            rayonName={"Şuşa"}
            abideName={"Aşağı Gövhər Ağa Məscidi"}
            abideText1={
              "Aşağı Gövhər ağa məscidi Azərbaycan Respublikasının Nazirlər Kabinetinin 2 avqust 2001-ci il tarixli 132 nömrəli Qərarı ilə ölkə əhəmiyyətli memarlıq abidəsi kimi (inventar № 345, tarixi- XVIII əsr)  dövlət qeydiyyatına alınmışdır.Məscid Şuşa şəhərinin Qapan meydanında yerləşir. Məscid ilk dəfə Şuşanın 1855-ci ilə aid baş planında yaxınlıqda yerləşən mədrəsə ilə birlikdə qeydə alınmışdır."
            }
            abideText2={
              "Şəhərin ikinci cümə məscidi olan Aşağı Gövhər ağa məscidi həm Aşağı məscid, həm də Kiçik məscid adları ilə tanınmışdır. Birinci ad onun Yuxarı Gövhər ağa məscidi ilə müqayisədə coğrafi yerləşməsini, ikinci ad isə onun Cümə məscidi ilə müqayisədə ölçülərini bildirir. 1855-ci ilin baş planına əsasən Aşağı məscidin ölçüləri həqiqətən də Yuxarı məscidin ölçülərindən kiçik olmuşdur. Aşağı məscidin əsas girişi şimal-qərb istiqamətdə yerləşir və onun oxu üzbəüz yerləşən mədrəsə binasının girişinin oxu ilə üst-üstə düşür. Bu baxımdan Aşağı məscid kompleksinin həlli Yuxarı məscid kompleksinin kiçildilmiş formasını xatırladır. ."
            }
            abideText3={
              "1874-1875-ci illərdə Yuxarı məscid kimi, Aşağı məscid kompleksində də əsaslı yenidənqurma işləri aparılmışdır.“Qarabağ – irsimizin əbədi yaddaşıdır” kitabında isə Aşağı məscidin 1868-1870-ci illərdə tikildiyi qeyd olunmuşdur. Yeni məscidin inşası Gövhər ağanın maddi dəstəyi əsasında həyata keçirildiyinə görə sonradan Aşağı məscid həm də Aşağı Gövhər ağa məscidi adı ilə tanınmağa başlamışdır."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[
              asagi_govher_aga1,
              asagi_govher_aga2,
              asagi_govher_aga3,
              asagi_govher_aga4,
              asagi_govher_aga5,
              asagi_govher_aga6,
              asagi_govher_aga7,
              asagi_govher_aga8,
            ]}
          />
        </Route>
        <Route path="/susa/saatli_mescid">
          <Abide2
            exact
            rayonName={"Şuşa"}
            abideName={"Şirin Su Hamamı"}
            abideText1={
              "Şuşanın məhəllə məscidləri sırasında kompozisiya həllinə və xüsusilə minarəsinin olması ilə ön cərgədə duran «Saatlı» məscidi Kərbəlayi Səfiхanın Qarabağda tikdiyi minarəli məscidlərdən sonuncusu hesab olunur. Saatlı məscidi - Şuşa şəhərində 1883-cu ildə «Saatlı» məhəlləsində tikilib. Məscidin tikilmə tarixi və memarının adı baş fasadın giriş qapısının ustundəki 74x52 sm və 52x36.5 sm olculu kitabələrdə belə qeyd olunur: “Əməli Kərbəlaya Səfixan memar Qara Bağı (1301)” və “Bismillah Rəhmani Rəhim İnnama Yuəmmuru məscidicibi Allah Min Amin Billah Vəlyomil Axer. Allah, Məhəmməd, Əli, Fatimə, Həsən, Huseyn Məsci Sautlu sene (1312)”.Ustundəki kitabələrdə həkk olunan tarixlərin fərqli olduğu gorunur. Tarix memarlıq abidələrinin divarlarında memarın adı həkk olunmuş kitabələrdəki tarix abidənin tikilmə tarixi kimi qəbul olunur. Ola bilsin ki, ikinci kitabə sonradan abidənin uzərinə yerləşdirilmişdir. Şuşada Aşağı Govhər ağa məscidi, Ağdam cumə məscidi və Abdal Gulablı kəndindəki Hamam kompleksi və Bərdə İmamzadəsi ilə yanaşı Yuxarı Govhər ağa məscidi də memarın ən yaxşı əsərləri sırasına daxildir."
            }
            abideText2={
              " “Saatlı” məscidini tikərkən memar yerin relyefini əsas goturməklə həcm və məkan prinsipinə sadiq qalmış və beləliklə, məscidə tək minarə əlavə etməyi ustun tutmuşdur. Kərbəlayi Səfixan oz sənətkarlıq qabiliyyətini “Saatlı” məscidi uzərində lazımi səviyyədə numayiş etdirmişdir. Şuşanın məhəllə məscidləri sırasında kompozisiya həllinə və xususilə, minarəsinin olması ilə secilən “Saatlı” məscidi Kərbəlayi Səfixanın Qarabağda tikdiyi minarəli məscidlərin sonuncusu hesab olunur. Şuşada sonralar tikilən məscidlər minarəsiz olmuş və bəzilərinin damında minarə şərəfəsini xatırladan “Guldəstə” lər quraşdırılmışdır. Məscidin inşa edildiyi yerdə əvvəl Molla Pənah Vaqifin dərs kecdiyi bir-birinə bitişik mədrəsə və məscid binaları olmuşdur. Şuşanın işğalından sonra məscid xarabalığa cevrilmiş, onun zəngin interyerləri tamamilə, minarəsi isə qismən dağıdılmışdır."
            }
            abideText3={
              "Abidənin divarları yerli sərt qaya daşından tikilmişdir. Əhəngdən suvaq və boya materialı kimi istifadə edilmişdir. Qadınların ibadət zalının doşəməsi ağac materialındandır. Tavan ortuyu, gunbəz və tağlar bişmiş kərpicdən yığılmışdır. Sutun və plyastralar sərt qaya daşındandır. İnteryerdəki nəqqaşlıq işlərinin və yazıların bərpasına ehtiyac vardır. Ağac konstruksiyalı şəbəkə pəncərələr və qapılar yararsız vəziyyətdədir. Məscidin qərb divarında uc ədəd taxca, şimal divarında isə bir ədəd ocaq vardır. Minarə isə bişmiş kərpicdən horulmuşdur. Şərəfənin metal məhəccəri və ortuyu yararsız vəziyyətdə olduğundan bərpa olunmasına ehtiyac vardır. Deformasiyaya uğramış dam ortuyunun bərpası vacibdir."
            }
            abideUnvan={"Qarğabazar kəndi"}
            abideTarix={"XVII əsr"}
            abideEhemiyyet={"Yerli əhəmiyyətli"}
            images={[saatli_evvel, saatli_orta, saatli_sonra]}
          />
        </Route>
        {/*  */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
