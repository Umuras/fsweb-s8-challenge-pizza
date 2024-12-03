import { Label, Button } from "reactstrap";
import styles from "../components/OrderFormStyle.module.css";
import styled from "styled-components";

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

export default function PizzaSumOfOrder(props) {
  const { form, changePizzaQuantity, isValid } = props;

  return (
    <section className={styles.sumoforderarea}>
      <section className={styles.orderquantityarea}>
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
      </section>

      <section className={styles.allcostarea}>
        <div className={styles.sumofordercost}>
          <div>
            <Label className={styles.sumorderlabel}>Sipariş Toplamı</Label>
            <div className={styles.electionsarea}>
              <LabelBoldGray>Seçimler</LabelBoldGray>
              <LabelBoldGray>{form.ingredients.length * 5 + "₺"}</LabelBoldGray>
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
      </section>
    </section>
  );
}
