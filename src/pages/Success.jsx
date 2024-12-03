import logo from "../../Assets/Iteration-1-assets/logo.svg";
import "../components/Success.css";
export default function Success() {
  document.body.className = "success-body";
  return (
    <>
      <header>
        <img src={logo} alt="" className="success-logo" />
      </header>
      <section>
        <h1 className="successh1">TEBRIKLER!</h1>
        <h1 className="successh1">SİPARİŞİNİZ ALINDI!</h1>
      </section>
    </>
  );
}
