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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

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

const OrderButton = styled(Button)`
  font-family: "Roboto Condensed", serif;
  border-radius: 2rem;
  background-color: #faf7f2;
  color: red;
  padding: 1rem 2rem 1rem 2rem;
  font-weight: bold;
  border: none;
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
  background-color: aliceblue;
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

const TechnologicFoodsContainer = styled.div`
  color: white;
  display: flex;

  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 2rem;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const ContactImg = styled.img`
  margin-right: 1rem;
`;

const InfoMenuContainer = styled.div`
  display: flex;

  width: 50%;
  height: 22rem;
  margin-top: 5rem;
`;

const MenuTitleLabel = styled.p`
  margin-bottom: 2rem;
  margin-top: 2.25rem;
  font-weight: bold;
  font-family: "Barlow", serif;
  font-size: 1.25rem;
`;

const MenuInfoContainer = styled.div`
  color: white;
`;

const MenusAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 0.8rem;
`;

const AllInfoAreaContainer = styled.section`
  width: 69.5%;
  margin-left: 20rem;
  height: 20rem;
  display: flex;
  justify-content: space-between;
`;

const BorderLine = styled.p`
  margin-top: 10rem;
  border: 1px solid gray;
`;

const InstaContainer = styled.div`
  width: 25.47%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 6.75rem;
  height: 32vh;
`;

const InstaLabel = styled.p`
  font-weight: bold;
  font-family: "Barlow", serif;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 2.25rem;
`;

const InstaImg = styled.img`
  flex: 1;
`;

const InstaImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  align-items: flex-end;
`;

const SubLabel = styled(Label)`
  margin-left: 3rem;
`;

const FontIconLabel = styled(Label)`
  color: white;
  margin-left: 0.35rem;
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

      <MiddleArea>
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
                <div className="hamburgercardlabelcontainer">
                  <HamburgerCardTitleLabel tag="h1">
                    Hackathlon
                  </HamburgerCardTitleLabel>
                  <HamburgerCardTitleLabel tag="h1">
                    Burger Menü
                  </HamburgerCardTitleLabel>
                </div>

                <OrderButton>SİPARİŞ VER</OrderButton>
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
                <OrderButton>SİPARİŞ VER</OrderButton>
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

      <footer className="restaurantinfocontainer">
        <div>
          <AllInfoAreaContainer>
            <InfoMenuContainer>
              <TechnologicFoodsContainer>
                <img src="../../Assets/Iteration-2-aseets/footer/logo-footer.svg" />
                <ContactContainer>
                  {helpInfos.map((item, index) => {
                    return (
                      <div>
                        <ContactImg src={item.icon} />
                        <Label>{item.text}</Label>
                        {index === 0 && <SubLabel>{item.text2}</SubLabel>}
                      </div>
                    );
                  })}
                </ContactContainer>
              </TechnologicFoodsContainer>
              <MenuInfoContainer>
                <MenuTitleLabel>Sıccacık Menüler</MenuTitleLabel>
                <MenusAreaContainer>
                  <Label>Terminal Pizza</Label>
                  <Label>5 Kişilik Hackathlon Pizza</Label>
                  <Label>useEffect Tavuklu Pizza</Label>
                  <Label>Beyaz Console Frost</Label>
                  <Label>Testler Geçti Mutlu Burger</Label>
                  <Label>Position Absolute Acı Burger</Label>
                </MenusAreaContainer>
              </MenuInfoContainer>
            </InfoMenuContainer>

            <InstaContainer>
              <InstaLabel>Instagram</InstaLabel>
              <InstaImgContainer>
                {instaPhotos.map((item, index) => {
                  return <InstaImg src={item} key={index} />;
                })}
              </InstaImgContainer>
            </InstaContainer>
          </AllInfoAreaContainer>
        </div>

        <BorderLine />

        <section className="lowestareacontainer">
          <div>
            <FontAwesomeIcon icon={faCircleUser} className="fonticon" />
            <FontIconLabel>2023 Teknolojik Yemekler.</FontIconLabel>
          </div>
          <FontAwesomeIcon icon={faTwitter} className="fa-2x fonticon" />
        </section>
      </footer>
    </>
  );
}
