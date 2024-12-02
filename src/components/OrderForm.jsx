import { Label, Navbar, Form, Input, Button, FormFeedback } from "reactstrap";
import logo from "../../Assets/Iteration-1-assets/logo.svg";
import styles from "../components/OrderFormStyle.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrderForm() {
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
    pizzacost: 0,
    ordernote: "",
    pastrytype: "",
    pizzaquantity: 0,
  };

  const errorMessages = {
    name: "En az 3 karakter girmelisin",
    ingredient: "En az 4 adet veya en fazla 10 seçmelisin",
  };

  const [isValid, setValid] = useState(false);
  const [form, setForm] = useState(initialFormData);

  document.body.className = "orderform-body";

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
    console.log(form);
  }

  function changePizzaQuantity(event) {
    const { name, value } = event.target;

    if (name === "pizzaquantityincrease") {
      form.pizzaquantity++;
    } else {
      if (form.pizzaquantity > 0) {
        form.pizzaquantity--;
      }
    }

    setForm({ ...form, ["pizzaquantity"]: form.pizzaquantity });
  }

  useEffect(() => {});

  function handleSubmit(event) {}

  return (
    <>
      <div className={styles.header}>
        <Navbar className={styles.title}>
          <img src={logo} />
        </Navbar>
        <div className={styles.navbar}>
          <a href="/">Anasayfa-</a>
          <a href="#">Seçenekler-</a>
          <a href="#" style={{ fontWeight: "bold" }}>
            Sipariş Oluştur
          </a>
        </div>
      </div>

      <Form className={styles.pizzaform}>
        <Label className={styles.labelPizza}>Position Absolute Acı Pizza</Label>
        <div className={styles.costAreaContanier}>
          <Label className={styles.costPizzaLabel}>85.50₺</Label>
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
                name="smallsize"
                id="smallsize"
              />
              <Label htmlFor="smallsize" style={{ color: "#5F5F5F" }}>
                Küçük
              </Label>
            </div>

            <div>
              <Input
                className={styles.pizzasizeinput}
                type="radio"
                name="mediumsize"
                id="mediumsize"
              />
              <Label style={{ color: "#5F5F5F" }} htmlFor="mediumsize">
                Orta
              </Label>
            </div>

            <div>
              <Input
                className={styles.pizzasizeinput}
                type="radio"
                name="largesize"
                id="largesize"
              />
              <Label style={{ color: "#5F5F5F" }} htmlFor="largesize">
                Büyük
              </Label>
            </div>
          </div>

          <div className={styles.selectpastry}>
            <Label className={styles.pastrylabel}>Hamur Seç*</Label>
            <select name="hamur" id="Hamur Kalınlığı">
              <option value="Hamur Kalınlığı" selected disabled hidden>
                Hamur Kalınlığı
              </option>
              <option value="kalınhamur">Kalın Hamur</option>
              <option value="incehamur">Ince Hamur</option>
            </select>
          </div>
        </div>

        <div className={styles.additionalingredients}>
          <Label style={{ fontWeight: "bold" }}>Ek Malzemeler</Label>
          <Label>En Fazla 10 malzeme seçebilirsiniz. 5₺</Label>
          <div className={styles.alladditionalcheckboxes}>
            {ekMalzemeler.map((item, index) => {
              return (
                <div className={styles.additionalcheckbox}>
                  <input
                    type="checkbox"
                    name={item.toLowerCase()}
                    id={item.toLowerCase()}
                    className={styles.checkbox}
                  />
                  <Label
                    style={{
                      fontWeight: "bold",
                      color: "gray",
                    }}
                    htmlFor={item.toLowerCase()}
                  >
                    {item}
                  </Label>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles.username}>
          <Label style={{ fontWeight: "bold", fontSize: "1.25rem" }}>
            Ad Soyad
          </Label>
          <Input
            placeholder="Lütfen isminizi giriniz"
            style={{ padding: "1rem 1rem" }}
            name="name"
            id="name"
            onChange={handleChange}
            invalid={form.name.length > 0 && form.name.length < 3}
            valid={form.name.length >= 3}
          />
          {errorMessages.name && (
            <FormFeedback>{errorMessages.name}</FormFeedback>
          )}
        </div>

        <div className={styles.ordernotearea}>
          <Label className={styles.ordernotelabel}>Sipariş Notu</Label>
          <Input
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            style={{ padding: "1rem 1rem" }}
            name="ordernote"
            id="ordernote"
            onChange={handleChange}
          />
        </div>
        <p className={styles.borderline}></p>

        <div className={styles.sumoforderarea}>
          <div className={styles.orderquantityarea}>
            <Button
              type="button"
              className={styles.orderreducebutton}
              style={{
                backgroundColor: "#FDC913",
                color: "black",
                padding: "1rem 1.25rem",
              }}
              name="pizzaquantityreduce"
              value={form.pizzaquantity}
              onClick={changePizzaQuantity}
            >
              -
            </Button>
            <Label className={styles.orderquantitylabel}>
              {form.pizzaquantity}
            </Label>
            <Button
              type="button"
              className={styles.orderincreasebutton}
              style={{
                backgroundColor: "#FDC913",
                color: "black",
                padding: "1rem 1.25rem",
              }}
              name="pizzaquantityincrease"
              value={form.pizzaquantity}
              onClick={changePizzaQuantity}
            >
              +
            </Button>
          </div>

          <div className={styles.allcostarea}>
            <div className={styles.sumofordercost}>
              <div>
                <Label className={styles.sumorderlabel}>Sipariş Toplamı</Label>
                <div className={styles.electionsarea}>
                  <Label style={{ color: "gray", fontWeight: "bold" }}>
                    Seçimler
                  </Label>
                  <Label style={{ color: "gray", fontWeight: "bold" }}>
                    25.00₺
                  </Label>
                </div>
                <div className={styles.sumcostarea}>
                  <Label style={{ color: "#CE2829", fontWeight: "bold" }}>
                    Toplam
                  </Label>
                  <Label style={{ color: "#CE2829", fontWeight: "bold" }}>
                    110.50₺
                  </Label>
                </div>
              </div>
            </div>
            <div>
              <Button
                style={{
                  backgroundColor: "#FDC913",
                  color: "black",
                  width: "20rem",
                  paddingTop: "1rem",
                  paddingBottom: "1rem",
                }}
                type="button"
              >
                Sipariş Ver
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
}
