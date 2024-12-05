import { Label, Input, FormFeedback } from "reactstrap";
import styles from "../components/OrderFormStyle.module.css";
import styled from "styled-components";

const ExpandInput = styled(Input)`
  padding: 1rem 1rem;
  background-color: #faf7f2;
`;

export default function PizzaInputArea(props) {
  const { handleChange, form, errorMessages } = props;
  return (
    <section>
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
    </section>
  );
}
