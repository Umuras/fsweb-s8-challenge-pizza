import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import styles from "./OrderFormStyle.module.css";

export default function OrderFormHeader() {
  return (
    <section className={styles.header}>
      <div className={styles.title}>
        <img src={logo} />
      </div>

      <div className={styles.navbar}>
        <NavLink className={styles.navlink} to="/">
          Anasayfa-
        </NavLink>
        <NavLink className={styles.navlink} to="/">
          Seçenekler-
        </NavLink>

        <NavLink
          className={
            window.location.href.includes("/orderform")
              ? styles.activepage
              : styles.navlink
          }
          to="/orderform"
        >
          Sipariş Oluştur
        </NavLink>
      </div>
    </section>
  );
}
