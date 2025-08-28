import "./Logo.css";
import logo from "../assets/Logo.png"; // ✅ make sure Logo.png is inside src/assets

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="WikiClub Tech Logo" />
    </div>
  );
};

export default Logo;
