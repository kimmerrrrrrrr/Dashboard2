import { useMemo } from "react";
import "./Header.css";

const Header = ({
  showLogoColor1Icon,
  headerWidth,
  headerHeight,
  headerPosition,
  headerTop,
  headerRight,
  headerBottom,
  headerLeft,
  signInColor,
}) => {
  const headerStyle = useMemo(() => {
    return {
      width: headerWidth,
      height: headerHeight,
      position: headerPosition,
      top: headerTop,
      right: headerRight,
      bottom: headerBottom,
      left: headerLeft,
    };
  }, [
    headerWidth,
    headerHeight,
    headerPosition,
    headerTop,
    headerRight,
    headerBottom,
    headerLeft,
  ]);

  const signInStyle = useMemo(() => {
    return {
      color: signInColor,
    };
  }, [signInColor]);

  return (
    <div className="header1" style={headerStyle}>
      <img className="vector-icon1" alt="" src="/connection-point.svg" />
      <div className="menu2">
        <b className="home1">Home</b>
        <b className="accommodations1">Accommodations</b>
        <b className="about-us1">About Us</b>
        <b className="contact-us1">Contact Us</b>
        <div className="yellow1" />
        <b className="sign-in6" style={signInStyle}>
          Sign In
        </b>
      </div>
      {showLogoColor1Icon && (
        <img className="logo-color-1-icon1" alt="" src="/logocolor-1@2x.png" />
      )}
    </div>
  );
};

export default Header;
