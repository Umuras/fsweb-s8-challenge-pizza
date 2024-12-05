import styles from "./OrderFormStyle.module.css";
import { Label, Input } from "reactstrap";
import styled from "styled-components";

const LabelLightGrayS = styled(Label)`
  color: #5f5f5f;
  position: relative;
  text-align: center;
  transform: translateX(23px) translateY(12px);
`;

const LabelLightGrayM = styled(Label)`
  color: #5f5f5f;
  position: relative;
  text-align: center;
  transform: translateX(20px) translateY(12px);
`;

const LabelLightGrayL = styled(Label)`
  color: #5f5f5f;
  position: relative;
  text-align: center;
  transform: translateX(24px) translateY(13px);
`;

const SmallInputRadio = styled(Input)`
  background-color: "red";
  border: "none";
`;

const SpeacialSelect = styled.select`
  padding: 1rem 1rem 1rem 1rem;
  background-color: #faf7f2;
  border: none;
`;

const WrapperPizzaSizeArea = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export default function PizzaSizePastrySelectionArea(props) {
  const { handleChange } = props;

  return (
    <section className={styles.selectcontainer}>
      <div className={styles.sizeArea}>
        <Label className={styles.selectPizzaSize}>Boyut Seç*</Label>
        <WrapperPizzaSizeArea>
          <Label className={styles.allradiobuttons}>
            <SmallInputRadio
              type="radio"
              name="pizzasize"
              id="smallsizeradio"
              value={"S"}
              onChange={handleChange}
              data-cy="smallsize-radio"
            />
            <span className={styles.pizzasizeinput}></span>
            <LabelLightGrayS
              className={styles.radiolabelsmall}
              htmlFor="smallsizeradio"
            >
              S
            </LabelLightGrayS>
          </Label>

          <Label className={styles.allradiobuttons}>
            <Input
              className={styles.pizzasizeinput}
              type="radio"
              name="pizzasize"
              id="mediumsizeradio"
              value={"M"}
              onChange={handleChange}
              data-cy="mediumsize-radio"
            />
            <span className={styles.pizzasizeinput}></span>

            <LabelLightGrayM
              className={styles.radiolabelmedium}
              htmlFor="mediumsizeradio"
            >
              M
            </LabelLightGrayM>
          </Label>

          <Label className={styles.allradiobuttons}>
            <Input
              className={styles.pizzasizeinput}
              type="radio"
              name="pizzasize"
              id="largesizeradio"
              value={"L"}
              onChange={handleChange}
              data-cy="largesize-radio"
            />
            <span className={styles.pizzasizeinput}></span>

            <LabelLightGrayL
              className={styles.radiolabellarge}
              htmlFor="largesizeradio"
            >
              L
            </LabelLightGrayL>
          </Label>
        </WrapperPizzaSizeArea>
      </div>

      <div className={styles.selectpastry}>
        <Label className={styles.pastrylabel}>Hamur Seç*</Label>
        <SpeacialSelect
          name="pastrytype"
          id="Hamur Kalınlığı"
          onChange={handleChange}
          data-cy="pastry-select"
        >
          <option value="Hamur Kalınlığı" selected disabled hidden>
            -Hamur Kalınlığı Seç-
          </option>
          <option value="kalınhamur" data-cy="thickcrust-option">
            Kalın Hamur
          </option>
          <option value="incehamur" data-cy="thincrust-option">
            Ince Hamur
          </option>
        </SpeacialSelect>
      </div>
    </section>
  );
}
