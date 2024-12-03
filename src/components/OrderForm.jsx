import { Label, Navbar, Form, Input, Button, FormFeedback } from "reactstrap";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import styles from "../components/OrderFormStyle.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const ekMalzemeler = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Kanada Jambonu",
  "Salam",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
  "Sarımsak",
];

const initialFormData = {
  name: "",
  pizzasize: "",
  ingredients: [],
  pizzacost: 85.5,
  ordernote: "",
  pastrytype: "",
  pizzaquantity: 1,
  sumcost: 85.5,
};

const errorMessages = {
  name: "En az 3 karakter girmelisin",
  ingredient: "En az 4 adet veya en fazla 10 adet malzeme seçmelisin",
};

const LabelLightGray = styled(Label)`
  color: #5f5f5f;
`;

const LabelBold = styled(Label)`
  font-weight: bold;
`;

const ExpandInput = styled(Input)`
  padding: 1rem 1rem;
`;

const OrderQuantityButton = styled(Button)`
  background-color: #fdc913;
  color: black;
  padding: 1rem 1.25rem;
`;

const LabelBoldGray = styled(Label)`
  font-weight: bold;
  color: gray;
`;

const LabelBoldRed = styled(Label)`
  font-weight: bold;
  color: #ce2829;
`;

const OrderButton = styled(Button)`
  background-color: #fdc913;
  color: black;
  width: 20rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export default function OrderForm() {
  const [isValid, setIsValid] = useState(false);
  const [form, setForm] = useState(initialFormData);
  const [ingredients, setIngredients] = useState([]);

  let history = useHistory();

  document.body.className = "orderform-body";

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  }

  useEffect(() => {
    if (
      form.name.length >= 3 &&
      form.pastrytype &&
      form.pizzasize &&
      form.ingredients.length >= 4
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [form]);

  function handleSubmit(event) {
    event.preventDefault();

    if (isValid) {
      axios
        .post("https://reqres.in/api/pizza", form)
        .then((response) => {
          console.log(response.data);
          history.push("/success");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function changePizzaQuantity(event) {
    const { name } = event.target;

    if (name === "pizzaquantityincrease") {
      form.pizzaquantity++;
    } else {
      if (form.pizzaquantity > 0) {
        form.pizzaquantity--;
      }
    }
    form.sumcost = ingredients.length * 5 + form.pizzacost * form.pizzaquantity;
    setForm({ ...form, ["pizzaquantity"]: form.pizzaquantity });
  }

  function changeIngredients(event) {
    const { name, type } = event.target;
    if (type === "checkbox") {
      let result = ingredients.find((item) => item === name);
      if (result === undefined) {
        setIngredients([...ingredients, name]);
        form.sumcost = form.sumcost + 5;
      } else {
        setIngredients(ingredients.filter((item) => item != name));
        form.sumcost = form.sumcost - 5;
      }
    }
  }

  useEffect(() => {
    setForm({ ...form, ["ingredients"]: ingredients });
  }, [ingredients]);

  return (
    <>
      <div className={styles.header}>
        <Navbar className={styles.title}>
          <img src={logo} />
        </Navbar>

        <div className={styles.navbar}>
          <NavLink className={styles.navlink} to="/">
            Anasayfa-
          </NavLink>
          <NavLink className={styles.navlink} to="/options">
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
      </div>

      <Form className={styles.pizzaform} onSubmit={handleSubmit}>
        <Label className={styles.labelPizza}>Position Absolute Acı Pizza</Label>
        <div className={styles.costAreaContanier}>
          <Label className={styles.costPizzaLabel}>
            {form.pizzacost + "0₺"}
          </Label>
          <Label className={styles.score}>4.9</Label>
          <Label className={styles.stock}>(200)</Label>
        </div>

        <div className={styles.pizzadescription}>
          <Label className={styles.pizzadescriptionlabel}>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan Italyan
            kökenli lezzetli bir yemektir..Küçük bir pizzaya bazen pizzetta
            denir.
          </Label>
        </div>

        <div className={styles.selectcontainer}>
          <div className={styles.sizeArea}>
            <Label className={styles.selectPizzaSize}>Boyut Seç*</Label>

            <div>
              <Input
                className={styles.pizzasizeinput}
                type="radio"
                name="pizzasize"
                id="smallsizeradio"
                value={"Küçük"}
                onChange={handleChange}
                data-cy="smallsize-radio"
              />
              <LabelLightGray htmlFor="smallsizeradio">Küçük</LabelLightGray>
            </div>

            <div>
              <Input
                className={styles.pizzasizeinput}
                type="radio"
                name="pizzasize"
                id="mediumsizeradio"
                value={"Orta"}
                onChange={handleChange}
                data-cy="mediumsize-radio"
              />
              <LabelLightGray htmlFor="mediumsizeradio">Orta</LabelLightGray>
            </div>

            <div>
              <Input
                className={styles.pizzasizeinput}
                type="radio"
                name="pizzasize"
                id="largesizeradio"
                value={"Büyük"}
                onChange={handleChange}
                data-cy="largesize-radio"
              />
              <LabelLightGray htmlFor="largesizeradio">Büyük</LabelLightGray>
            </div>
          </div>

          <div className={styles.selectpastry}>
            <Label className={styles.pastrylabel}>Hamur Seç*</Label>
            <select
              name="pastrytype"
              id="Hamur Kalınlığı"
              onChange={handleChange}
              data-cy="pastry-select"
            >
              <option value="Hamur Kalınlığı" selected disabled hidden>
                Hamur Kalınlığı
              </option>
              <option value="kalınhamur" data-cy="thickcrust-option">
                Kalın Hamur
              </option>
              <option value="incehamur" data-cy="thincrust-option">
                Ince Hamur
              </option>
            </select>
          </div>
        </div>

        <div className={styles.additionalingredients}>
          <LabelBold>Ek Malzemeler</LabelBold>
          <Label>En Fazla 10 malzeme seçebilirsiniz. 5₺</Label>
          <div className={styles.alladditionalcheckboxes}>
            {ekMalzemeler.map((item, index) => {
              return (
                <div className={styles.additionalcheckbox} key={index}>
                  <input
                    type="checkbox"
                    name={item.toLowerCase()}
                    id={item.toLowerCase()}
                    className={styles.checkbox}
                    onChange={changeIngredients}
                    data-cy={"ingredient-checkbox" + index}
                  />

                  <Label
                    className={styles.checboxlabel}
                    htmlFor={item.toLowerCase()}
                  >
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
          <Input
            type="hidden"
            valid={ingredients.length >= 4 && ingredients.length <= 10}
            invalid={
              (ingredients.length >= 0 && ingredients.length < 4) ||
              ingredients.length > 10
            }
          />
          {errorMessages.ingredient && (
            <FormFeedback>{errorMessages.ingredient}</FormFeedback>
          )}
        </div>

        <div className={styles.username}>
          <Label className={styles.usernamelabel}>Ad Soyad</Label>
          <ExpandInput
            placeholder="Lütfen isminizi giriniz"
            name="name"
            id="name"
            onChange={handleChange}
            invalid={form.name.length > 0 && form.name.length < 3}
            valid={form.name.length >= 3}
            data-cy="name-input"
          />
          {errorMessages.name && (
            <FormFeedback>{errorMessages.name}</FormFeedback>
          )}
        </div>

        <div className={styles.ordernotearea}>
          <Label className={styles.ordernotelabel}>Sipariş Notu</Label>
          <ExpandInput
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            name="ordernote"
            id="ordernote"
            onChange={handleChange}
            data-cy="ordernote-input"
          />
        </div>
        <p className={styles.borderline}></p>

        <div className={styles.sumoforderarea}>
          <div className={styles.orderquantityarea}>
            <OrderQuantityButton
              type="button"
              name="pizzaquantityreduce"
              value={form.pizzaquantity}
              onClick={changePizzaQuantity}
            >
              -
            </OrderQuantityButton>
            <Label className={styles.orderquantitylabel}>
              {form.pizzaquantity}
            </Label>
            <OrderQuantityButton
              type="button"
              name="pizzaquantityincrease"
              value={form.pizzaquantity}
              onClick={changePizzaQuantity}
            >
              +
            </OrderQuantityButton>
          </div>

          <div className={styles.allcostarea}>
            <div className={styles.sumofordercost}>
              <div>
                <Label className={styles.sumorderlabel}>Sipariş Toplamı</Label>
                <div className={styles.electionsarea}>
                  <LabelBoldGray>Seçimler</LabelBoldGray>
                  <LabelBoldGray>
                    {form.ingredients.length * 5 + "₺"}
                  </LabelBoldGray>
                </div>
                <div className={styles.sumcostarea}>
                  <LabelBoldRed>Toplam</LabelBoldRed>
                  <LabelBoldRed>{form.sumcost + "₺"}</LabelBoldRed>
                </div>
              </div>
            </div>
            <div>
              <OrderButton disabled={!isValid} data-cy="order-button">
                Sipariş Ver
              </OrderButton>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}
