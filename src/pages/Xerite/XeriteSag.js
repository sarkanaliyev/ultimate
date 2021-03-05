import "./XeriteSag.css";
import { BsArrowLeft } from "react-icons/bs";

export default function XeriteSag(props) {
  console.log(props.routeName);
  return (
    <div className="xerite-sag-container">
      <div className="xerite-sag-main-div">
        <BsArrowLeft color={"black"} size={30} className="xerite-arrow" />
        <h1 className="xerite-rayon">{props.name}</h1>

        {/* <div className="xerite-sag-ul-div"> */}
        <ul className="xerite-sag-ul">
          {props.obyekt.map((value) => (
            <li>
              <img src={value.rIcon} />
              <a href={value.rRoute}>
                <span>{value.rText}</span>
              </a>
            </li>
          ))}
        </ul>
        <a href={"/" + props.routeName}>
          <button className="xerite-sag-button">
            <span className="xerite-sag-button-span">DAHA ÇOX</span>
          </button>
        </a>
        {/* </div> */}
      </div>
    </div>
  );
}
