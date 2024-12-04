import logo from "../../Assets/Iteration-1-assets/logo.svg";
import {
  Button,
  Label,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";
import "../components/HomePage.css";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import HomeBackground from "../../Assets/Iteration-1-assets/home-banner.png";
import { foodItems } from "../dummyData";
import FoodCardPizza from "../../Assets/Iteration-2-aseets/cta/kart-1.png";
import FoodCardHamburger from "../../Assets/Iteration-2-aseets/cta/kart-2.png";
import FoodCardMessenger from "../../Assets/Iteration-2-aseets/cta/kart-3.png";

const OpportunityLabel = styled(Label)`
  font-family: "Satisfy", serif;
  color: #fdc913;
  font-size: 2rem;
  margin: 0 0;
`;

const FoodIconContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`;

const FoodIconLabel = styled(Label)`
  margin: 0 0;
`;

const FoodMenuArea = styled.nav`
  display: flex;
  justify-content: center;
  column-gap: 6.5rem;
  margin-top: 2rem;
  margin-bottom: 7.5rem;
`;

const PizzaCard = styled(Card)`
  border-radius: 1rem;
`;

const PizzaCardImg = styled(CardImg)`
  border-radius: 1rem;
`;

const CardImageContentArea = styled(CardImgOverlay)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: 1.5rem;
`;

const PizzaCardTitleLabel = styled(CardTitle)`
  font-size: 4rem;
  margin: 0 0 0 0;
  font-family: "Quattrocento", serif;
  font-weight: bold;
`;

const PizzaCardText = styled(CardText)`
  font-family: "Barlow", serif;
  font-weight: bold;
  font-size: 1.18rem;
`;

const OrderButton = styled(Button)`
  font-family: "Roboto Condensed", serif;
  border-radius: 2rem;
  background-color: #faf7f2;
  color: red;
  padding: 1rem 2rem 1rem 2rem;
  font-weight: bold;
`;

const HamburgerCard = styled(Card)`
  border-radius: 1rem;
`;

const HamburgerCardImg = styled(CardImg)`
  border-radius: 1rem;
`;

const HamburgerCardTitleLabel = styled(CardTitle)`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: "Quattrocento", serif;
  font-weight: bold;
`;

const FoodMessengerCardArea = styled(Card)`
  display: flex;
  row-gap: 1rem;
  border-radius: 1rem;
`;

const FoodCardMessengerImg = styled(CardImg)`
  border-radius: 1rem;
`;

const FoodCardMessengerTitleLabel = styled(CardTitle)`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: "Quattrocento", serif;
  font-weight: bold;
`;

const WrapperCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  border: 0;
`;

export default function HomePage() {
  document.body.className = "homepage-body";

  let history = useHistory();

  function handleChange(event) {
    history.push("/orderform");
  }

  return (
    <>
      <header className="firstcontainer">
        <img src={HomeBackground} alt="" />

        <section className="homeinfo">
          <img src={logo} className="logoHomepage" />

          <OpportunityLabel>fırsatı kaçırma</OpportunityLabel>
          <h1 className="homePageH1">KOD ACIKTIRIR</h1>
          <h1 className="homePageH1">PİZZA, DOYURUR</h1>
          <Button
            type="button"
            className="homePageButton"
            onClick={handleChange}
          >
            ACIKTIM
          </Button>
        </section>
      </header>

      <FoodMenuArea>
        {foodItems.map((item, index) => {
          return (
            <FoodIconContainer key={index}>
              <img src={item.foodicon} alt="" />
              <FoodIconLabel>{item.foodiconlabel}</FoodIconLabel>
            </FoodIconContainer>
          );
        })}
      </FoodMenuArea>

      <section className="OrderFoodCardContainer">
        <PizzaCard inverse>
          <PizzaCardImg alt="Card image cap" src={FoodCardPizza} />
          <CardImageContentArea>
            <PizzaCardTitleLabel tag="h1">Özel</PizzaCardTitleLabel>
            <PizzaCardTitleLabel tag="h1">Lezzetus</PizzaCardTitleLabel>
            <PizzaCardText>Position:Absolute Acı Burger</PizzaCardText>
            <OrderButton>SİPARİŞ VER</OrderButton>
          </CardImageContentArea>
        </PizzaCard>

        <WrapperCard>
          <HamburgerCard inverse>
            <HamburgerCardImg alt="Card image cap" src={FoodCardHamburger} />
            <CardImageContentArea>
              <HamburgerCardTitleLabel tag="h1">
                Hackathlon
              </HamburgerCardTitleLabel>
              <HamburgerCardTitleLabel tag="h1">
                Burger Menü
              </HamburgerCardTitleLabel>
              <OrderButton>SİPARİŞ VER</OrderButton>
            </CardImageContentArea>
          </HamburgerCard>

          <FoodMessengerCardArea>
            <FoodCardMessengerImg
              alt="Card image cap"
              src={FoodCardMessenger}
            />
            <CardImageContentArea>
              <FoodCardMessengerTitleLabel tag="h1">
                Çoook hızlı
              </FoodCardMessengerTitleLabel>
              <FoodCardMessengerTitleLabel tag="h1">
                npm gibi kurye
              </FoodCardMessengerTitleLabel>
              <OrderButton>SİPARİŞ VER</OrderButton>
            </CardImageContentArea>
          </FoodMessengerCardArea>
        </WrapperCard>
      </section>
    </>
  );
}
