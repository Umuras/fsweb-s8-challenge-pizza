import { Label, Form } from "reactstrap";
import styles from "../components/OrderFormStyle.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import OrderFormHeader from "../components/OrderFormHeader";
import PizzaCostArea from "../components/PizzaCostArea";
import PizzaDescription from "../components/PizzaDescription";
import PizzaSizePastrySelectionArea from "../components/PizzaSizePastrySelectionArea";
import PizzaAdditionalIngredients from "../components/PizzaAdditionalIngredients";
import PizzaInputArea from "../components/PizzaInputArea";
import PizzaSumOfOrder from "../components/PizzaSumOfOrder";

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
      <OrderFormHeader />

      <Form className={styles.pizzaform} onSubmit={handleSubmit}>
        <Label className={styles.labelPizza}>Position Absolute Acı Pizza</Label>
        <PizzaCostArea form={form} />

        <PizzaDescription />

        <PizzaSizePastrySelectionArea handleChange={handleChange} />

        <PizzaAdditionalIngredients
          errorMessages={errorMessages}
          ingredients={ingredients}
          changeIngredients={changeIngredients}
          ekMalzemeler={ekMalzemeler}
        />

        <PizzaInputArea
          form={form}
          handleChange={handleChange}
          errorMessages={errorMessages}
        />

        <p className={styles.borderline}></p>

        <PizzaSumOfOrder
          form={form}
          changePizzaQuantity={changePizzaQuantity}
          isValid={isValid}
        />
      </Form>
    </>
  );
}