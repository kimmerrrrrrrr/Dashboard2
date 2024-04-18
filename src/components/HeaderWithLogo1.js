import { useMemo } from "react";
import "./HeaderWithLogo1.css";

const HeaderWithLogo1 = ({
  logoColor1,
  logo,
  headerWithLogoPosition,
  headerWithLogoTop,
  headerWithLogoLeft,
  showLogoColor1Icon,
}) => {
  const headerWithLogoStyle = useMemo(() => {
    return {
      position: headerWithLogoPosition,
      top: headerWithLogoTop,
      left: headerWithLogoLeft,
    };
  }, [headerWithLogoPosition, headerWithLogoTop, headerWithLogoLeft]);

  return (
    <div className="header-with-logo1" style={headerWithLogoStyle}>
      <div className="header2">
        <img className="vector-icon2" alt="" src="/connection-point.svg" />
        <div className="menu3">
          <b className="home2">Home</b>
          <b className="accommodations2">Accommodations</b>
          <b className="about-us2">About Us</b>
          <b className="contact-us2">Contact Us</b>
          <div className="yellow2" />
          <b className="sign-in7">Sign In</b>
        </div>
        <img className="logo-color-1-icon2" alt="" src={logoColor1} />
      </div>
      <img className="logo-icon1" alt="" src={logo} />
    </div>
  );
};

export default HeaderWithLogo1;
