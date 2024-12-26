import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { helpInfos, instaPhotos } from "../dummyData";
import technologicFoodText from "../../Assets/Iteration-2-aseets/footer/logo-footer.svg";
import styled from "styled-components";
import {
  Button,
  Label,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

const Footer = styled.footer`
  background-color: black;

  @media screen and (max-width: 765px) {
    height: 158vh;
  }
`;

const SubFooter = styled.div``;

const AllInfoAreaContainer = styled.section`
  width: 69.5%;
  margin-left: 20rem;
  height: 20rem;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 765px) {
    margin-top: 4rem;
    flex-direction: column;
    margin-left: 16rem;
  }
`;

const InfoMenuContainer = styled.div`
  display: flex;
  width: 50%;
  height: 22rem;
`;

const TechnologicFoodsContainer = styled.div`
  color: white;
  display: flex;
  width: 25%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 2rem;
  margin-top: 3rem;

  @media screen and (max-width: 765px) {
    margin-top: 3rem;
    width: 60%;
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin-top: 1rem;
`;

const ContactImg = styled.img`
  margin-right: 1rem;
`;

const MenuInfoContainer = styled.div`
  color: white;
`;

const MenuTitleLabel = styled.p`
  margin-bottom: 2rem;
  margin-top: 2.25rem;
  font-weight: bold;
  font-family: "Barlow", serif;
  font-size: 1.25rem;
  margin-top: 7rem;
`;

const MenusAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 0.8rem;
`;

const InstaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 32vh;
  margin-top: 6.75rem;
  @media screen and (max-width: 765px) {
    margin-top: 3rem;
  }
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
  width: 60%;

  @media screen and (max-width: 765px) {
    width: 60%;
  }
`;

const BorderLine = styled.p`
  margin-top: 10rem;
  border: 1px solid gray;

  @media screen and (max-width: 765px) {
    margin-top: 60rem;
  }
`;

const SubLabel = styled(Label)`
  margin-left: 3rem;
`;

const FontIconLabel = styled(Label)`
  color: white;
  margin-left: 0.35rem;
`;

const LowestArea = styled.section`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin-left: 20rem;
  align-items: center;

  @media screen and (max-width: 765px) {
    margin-left: 16rem;
    width: 58%;
  }
`;

export default function CommonFooter() {
  return (
    <Footer>
      <SubFooter>
        <AllInfoAreaContainer>
          <TechnologicFoodsContainer>
            <img src={technologicFoodText} />
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

          <InstaContainer>
            <InstaLabel>Instagram</InstaLabel>
            <InstaImgContainer>
              {instaPhotos.map((item, index) => {
                return <InstaImg src={item} key={index} />;
              })}
            </InstaImgContainer>
          </InstaContainer>
        </AllInfoAreaContainer>
      </SubFooter>

      <BorderLine />

      <LowestArea>
        <div>
          <FontAwesomeIcon icon={faCircleUser} className="fonticon" />
          <FontIconLabel>2023 Teknolojik Yemekler.</FontIconLabel>
        </div>
        <FontAwesomeIcon icon={faTwitter} className="fa-2x fonticon" />
      </LowestArea>
    </Footer>
  );
}
