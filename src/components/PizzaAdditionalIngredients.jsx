import { Label, Input, FormFeedback } from "reactstrap";
import styles from "../components/OrderFormStyle.module.css";
import styled from "styled-components";

const LabelBold = styled(Label)`
  font-weight: bold;
`;

export default function PizzaAdditionalIngredients(props) {
  const { ekMalzemeler, changeIngredients, errorMessages, ingredients } = props;

  return (
    <section className={styles.additionalingredients}>
      <LabelBold>Ek Malzemeler</LabelBold>
      <Label>En Fazla 10 malzeme seçebilirsiniz. 5₺</Label>
      <div className={styles.alladditionalcheckboxes}>
        {ekMalzemeler.map((item, index) => {
          return (
            <Label className={styles.additionalcheckbox} key={index}>
              <input
                type="checkbox"
                name={item}
                id={item.toLowerCase()}
                className={styles.checkbox}
                onChange={changeIngredients}
                data-cy={"ingredient-checkboxi" + index}
              />
              <span
                className={styles.checkmark}
                data-cy={"ingredient-checkbox" + index}
              ></span>

              <Label
                className={styles.checboxlabel}
                htmlFor={item.toLowerCase()}
              >
                {item}
              </Label>
            </Label>
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
    </section>
  );
}
