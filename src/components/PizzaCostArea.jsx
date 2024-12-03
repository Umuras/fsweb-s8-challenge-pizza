import styles from "./OrderFormStyle.module.css";
import { Label } from "reactstrap";

export default function PizzaCostArea(props) {
  const { form } = props;
  return (
    <section className={styles.costAreaContanier}>
      <Label className={styles.costPizzaLabel}>{form.pizzacost + "0₺"}</Label>
      <Label className={styles.score}>4.9</Label>
      <Label className={styles.stock}>(200)</Label>
    </section>
  );
}
