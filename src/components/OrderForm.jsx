import {
  Label,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  Form,
  Input,
} from "reactstrap";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import styled from "styled-components";
import styles from "../components/OrderFormStyle.module.css";

const Styles = styled.div`
  .custom-navbar {
    padding: 5rem 5rem;
    background-color: #ce2829;
  }
`;

export default function OrderForm() {
  return (
    <Styles>
      <Navbar className="custom-navbar">
        <img src={logo} />
        <NavItem>
          <NavbarBrand href="/">Anasayfa</NavbarBrand>
        </NavItem>
      </Navbar>
      <Form>
        <Label className={styles.labelPizza}>Position Absolute Acı Pizza</Label>
        <Label className={styles.label}>85.5t</Label>
        <Label>4.9</Label>
        <Label>(200)</Label>
        <Label>
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan Italyan kökenli
          lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta denir.
        </Label>
        <Label>Boyut Seç*</Label>
        <Input type="radio" name="smallsize" />
        <Label>Küçük</Label>
        <Input type="radio" name="mediumsize" />
        <Label>Orta</Label>
        <Input type="radio" name="largesize" />
        <Label>Büyük</Label>
        <Label>Hamur Seç*</Label>
        <select name="hamur">
          <p>Hamur Kalınlığı</p>
          <option value="kalınhamur">Kalın Hamur</option>
          <option value="incehamur">Ince Hamur</option>
        </select>
      </Form>
    </Styles>
  );
}
