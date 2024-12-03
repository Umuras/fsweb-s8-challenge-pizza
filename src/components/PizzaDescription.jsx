import styles from "./OrderFormStyle.module.css";
import { Label } from "reactstrap";

export default function PizzaDescription() {
  return (
    <section className={styles.pizzadescription}>
      <Label className={styles.pizzadescriptionlabel}>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan Italyan kökenli lezzetli bir
        yemektir..Küçük bir pizzaya bazen pizzetta denir.
      </Label>
    </section>
  );
}
