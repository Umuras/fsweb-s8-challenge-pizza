import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { helpInfos, instaPhotos } from "../dummyData";
import styled from "styled-components";
import "../components/HomePage.css";
import {
  Button,
  Label,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

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

export default function CommonFooter() {
  return (
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
  );
}
