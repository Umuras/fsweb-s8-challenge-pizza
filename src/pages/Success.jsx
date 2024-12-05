import logo from "../../Assets/Iteration-1-assets/logo.svg";
import CommonFooter from "../components/CommonFooter";
import "../components/Success.css";
import { Label } from "reactstrap";
import styled from "styled-components";

const LabelBoldWhite = styled(Label)`
  font-family: "Barlow", serif;
  color: #faf7f2;
`;

const LabelPizza = styled(Label)`
  display: flex;
  font-size: 1.25rem;
  font-family: "Barlow", serif;
  color: #faf7f2;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PizzaPropertyLabel = styled(Label)`
  font-weight: normal;
`;

export default function Success(props) {
  const { form } = props;

  document.body.className = "success-body";
  return (
    <>
      <header className="logoheader">
        <img src={logo} alt="" className="success-logo" />
      </header>
      <section className="ordersummarycontainer">
        <div className="firstsummary">
          <p className="orderonthewayinfo">lezzetin yolda</p>
          <h1 className="successh1">SİPARİŞ ALINDI</h1>
          <p className="borderline"></p>
        </div>

        <LabelPizza>Position Absolute Acı Pizza</LabelPizza>
        <div className="pizzapropertycontanier">
          <Label>
            Boyut: <PizzaPropertyLabel>{form.pizzasize}</PizzaPropertyLabel>
          </Label>
          <Label>
            Hamur: <PizzaPropertyLabel>{form.pastrytype}</PizzaPropertyLabel>
          </Label>
          <Label>
            Ek Malzemeler:{" "}
            <PizzaPropertyLabel>
              {form.ingredients.map((item, index) => {
                if (form.ingredients.length - 1 === index) {
                  return item;
                }
                return item + ", ";
              })}
            </PizzaPropertyLabel>
          </Label>
        </div>

        <section className="finalordersummary">
          <div className="sumofordercost">
            <div>
              <Label className="sumorderlabel">Sipariş Toplamı</Label>
              <div className="electionsarea">
                <LabelBoldWhite>Seçimler</LabelBoldWhite>
                <LabelBoldWhite>
                  {form.ingredients.length * 5 + "₺"}
                </LabelBoldWhite>
              </div>
              <div className="sumcostarea">
                <LabelBoldWhite>Toplam</LabelBoldWhite>
                <LabelBoldWhite>{form.sumcost + "₺"}</LabelBoldWhite>
              </div>
            </div>
          </div>
        </section>
      </section>

      <CommonFooter />
    </>
  );
}
