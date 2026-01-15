import "../App.css";
import Return from "../components/Return";
import Logo from "../assets/Logo.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Collection() {
  return (
    <div className="collection-page">
      <a
        href="https:wa.me/23232214003"
        target="_blank"
        rel="noopener noreferre"
        className="whatsapp-icon"
      >
        <FaWhatsapp />
      </a>
      <img src={Logo} alt="" className="C-Logo" />
      <h1>Coming Soon</h1>
      <Return />
    </div>
  );
}
