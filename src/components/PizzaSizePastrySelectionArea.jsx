import styles from "./OrderFormStyle.module.css";
import { Label, Input } from "reactstrap";
import styled from "styled-components";

const LabelLightGray = styled(Label)`
  color: #5f5f5f;
`;

export default function PizzaSizePastrySelectionArea(props) {
  const { handleChange } = props;

  return (
    <section className={styles.selectcontainer}>
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
    </section>
  );
}
