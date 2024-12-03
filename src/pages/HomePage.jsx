import logo from "../../Assets/Iteration-1-assets/logo.svg";
import { Button } from "reactstrap";
import "../components/HomePage.css";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  document.body.className = "homepage-body";

  let history = useHistory();

  function handleChange(event) {
    history.push("/orderform");
  }

  return (
    <>
      <header>
        <img src={logo} className="logoHomepage" />
      </header>
      <section className="homeinfo">
        <h1 className="homePageH1">KOD ACIKTIRIR</h1>
        <h1 className="homePageH1">PİZZA, DOYURUR</h1>
        <Button type="button" className="homePageButton" onClick={handleChange}>
          ACIKTIM
        </Button>
      </section>
    </>
  );
}
