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
import {
  foodItems,
  foodItemsNew,
  foodCardInfos,
  helpInfos,
  instaPhotos,
} from "../dummyData";
import FoodCardPizza from "../../Assets/Iteration-2-aseets/cta/kart-1.png";
import FoodCardHamburger from "../../Assets/Iteration-2-aseets/cta/kart-2.png";
import FoodCardMessenger from "../../Assets/Iteration-2-aseets/cta/kart-3.png";
import CommonFooter from "../components/CommonFooter";

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
  margin-bottom: 5rem;
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

const HamburgerCard = styled(Card)`
  border-radius: 1rem;
`;

const HamburgerCardImg = styled(CardImg)`
  border-radius: 1rem;
`;

const HamburgerCardTitleLabel = styled(CardTitle)`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: "Barlow", serif;
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
  margin: 0 0 0 0;
  font-family: "Roboto Condensed", serif;
  font-weight: bold;
`;

const WrapperCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  border: 0;
`;

const MostOrderedLabel = styled(Label)`
  font-family: "Satisfy", serif;
  color: #ce2829;
  font-size: 2rem;
  margin: 0 auto;
`;

const FlavorsLabel = styled(Label)`
  font-family: "Barlow", serif;
  font-weight: bold;
  font-size: 3rem;
  margin: 0 auto;
`;

const SubFoodMenuArea = styled.nav`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  margin-left: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const FoodButton = styled(Button)`
  border-radius: 2rem;
  background-color: white;
  color: black;
  border: none;
  padding: 1.25rem 3rem 1.25rem 3rem;
`;

const FoodCardNameLabel = styled(Label)`
  margin: 0 0 0 0;
  margin-bottom: 1rem;
  font-weight: bold;
  font-family: "Barlow", serif;
  font-size: 1.5rem;
`;

const FoodCardSpecsLabel = styled(Label)`
  margin: 0 0 0 0;
  color: #5f5f5f;
  font-weight: bold;
`;

const FoodCardCostLabel = styled(Label)`
  margin: 0 0 0 0;
  font-weight: bold;
  font-family: "Barlow", serif;
  font-size: 1.5rem;
`;

const FoodSpecsLabelContainer = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
`;

const MiddleArea = styled.section`
  background-color: #faf7f2;
  margin-bottom: 5rem;
`;

export default function HomePage() {
  document.body.className = "homepage-body";

  let history = useHistory();

  function handleClick(event) {
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
            onClick={handleClick}
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

      <MiddleArea>
        <section className="OrderFoodCardContainer">
          <PizzaCard inverse>
            <PizzaCardImg alt="Card image cap" src={FoodCardPizza} />
            <CardImageContentArea>
              <PizzaCardTitleLabel tag="h1">Özel</PizzaCardTitleLabel>
              <PizzaCardTitleLabel tag="h1">Lezzetus</PizzaCardTitleLabel>
              <PizzaCardText>Position:Absolute Acı Burger</PizzaCardText>
              <Button className="orderbutton" onClick={handleClick}>
                SİPARİŞ VER
              </Button>
            </CardImageContentArea>
          </PizzaCard>

          <WrapperCard>
            <HamburgerCard inverse>
              <HamburgerCardImg alt="Card image cap" src={FoodCardHamburger} />
              <CardImageContentArea>
                <div className="hamburgercardlabelcontainer">
                  <HamburgerCardTitleLabel tag="h1">
                    Hackathlon
                  </HamburgerCardTitleLabel>
                  <HamburgerCardTitleLabel tag="h1">
                    Burger Menü
                  </HamburgerCardTitleLabel>
                </div>

                <Button className="orderbutton" onClick={handleClick}>
                  SİPARİŞ VER
                </Button>
              </CardImageContentArea>
            </HamburgerCard>

            <FoodMessengerCardArea>
              <FoodCardMessengerImg
                alt="Card image cap"
                src={FoodCardMessenger}
              />
              <CardImageContentArea>
                <div className="foodmessengercardlabelcontainer">
                  <FoodCardMessengerTitleLabel tag="h1">
                    <Label className="npmCardLabel">Çoook</Label> hızlı{" "}
                  </FoodCardMessengerTitleLabel>
                  <FoodCardMessengerTitleLabel tag="h1">
                    npm gibi kurye
                  </FoodCardMessengerTitleLabel>
                </div>
                <Button className="orderbutton" onClick={handleClick}>
                  SİPARİŞ VER
                </Button>
              </CardImageContentArea>
            </FoodMessengerCardArea>
          </WrapperCard>
        </section>

        <section className="choosingfoodlabelarea">
          <MostOrderedLabel>en çok paketlenen menüler</MostOrderedLabel>
          <FlavorsLabel>Acıktıran Kodlara Doyuran Lezzetler</FlavorsLabel>
        </section>

        <SubFoodMenuArea>
          {foodItemsNew.map((item, index) => {
            return (
              <FoodIconContainer key={index}>
                <FoodButton>
                  <img src={item.foodicon} alt="" />
                  <FoodIconLabel>{item.foodiconlabel}</FoodIconLabel>
                </FoodButton>
              </FoodIconContainer>
            );
          })}
        </SubFoodMenuArea>

        <section className="foodproductscontainer">
          {foodCardInfos.map((item, index) => {
            return (
              <div className="foodCard" key={index}>
                <img src={item.foodImg} />
                <div className="foodCardLabelContainer">
                  <FoodCardNameLabel>{item.foodName}</FoodCardNameLabel>
                  <FoodSpecsLabelContainer>
                    <FoodCardSpecsLabel>{item.foodScore}</FoodCardSpecsLabel>{" "}
                    <FoodCardSpecsLabel>{item.foodQuantity}</FoodCardSpecsLabel>{" "}
                    <FoodCardCostLabel>{item.foodCoast}</FoodCardCostLabel>
                  </FoodSpecsLabelContainer>
                </div>
              </div>
            );
          })}
        </section>
      </MiddleArea>

      <CommonFooter />
    </>
  );
}
