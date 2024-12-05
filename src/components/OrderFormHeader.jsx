import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import styles from "./OrderFormStyle.module.css";
import styled from "styled-components";
import pizzaBanner from "../../Assets/Iteration-2-aseets/pictures/form-banner.png";

const LogoImg = styled.img``;

export default function OrderFormHeader() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.title}>
          <LogoImg src={logo} />
        </div>

        <img className={styles.bannerpizza} src={pizzaBanner} />
      </section>
    </>
  );
}
