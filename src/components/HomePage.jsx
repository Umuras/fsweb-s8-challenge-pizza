import HomeBanner from "../../Assets/Iteration-1-assets/home-banner.png";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import { Button } from "reactstrap";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  document.body.className = "homepage-body";

  let history = useHistory();

  function handleChange(event) {
    history.push("/orderform");
  }

  return (
    <>
      <img src={logo} className="logoHomepage" />
      <h2 className="homePageH2">KOD ACIKTIRIR</h2>
      <h2 className="homePageH2">PİZZA, DOYURUR</h2>
      <Button type="button" className="homePageButton" onClick={handleChange}>
        ACIKTIM
      </Button>
    </>
  );
}
