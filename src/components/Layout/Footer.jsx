import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Gowthami.</div>
      <div>
        <Link to={"https://www.facebook.com/bob.g.961?mibextid=rS40aB7S9Ucbxw6v"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://youtube.com/@GowthamiKandula123?si=yupVAxlOlwX_uJjn"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/gowthami-kandula-77283b23a"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/gowthami_kandula0105/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
