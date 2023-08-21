import image1 from "../../Images/image 1.jpg";
import image2 from "../../Images/image 2.jpg";
import image3 from "../../Images/image 3.jpg";
import image4 from "../../Images/image 4.jpg";
import image5 from "../../Images/image 5.jpg";
import image6 from "../../Images/image 6.jpg";
import image7 from "../../Images/image 7.jpg";
import image8 from "../../Images/image 8.jpg";
import {
  AditionalWrp,
  InfoDiv,
  ProductsWrapper,
  ProductsWrp,
  ShowMoreBtn,
  Title,
} from "./ProductList.styled";

export const ProductList = () => {
  return (
    <ProductsWrp>
      <Title>
        <h2>Our products</h2>
      </Title>
      <ProductsWrapper>
        <li>
          <img src={image1} alt="image1" />
          <InfoDiv>
            <p>Syltherine</p>
            <p>Stylish cafe chair</p>
            <AditionalWrp>
              <p>Rp 2.500.000</p>
              <p>Rp 3.500.000</p>
            </AditionalWrp>
          </InfoDiv>
        </li>
        <li>
          <img src={image2} alt="image2" />
          <InfoDiv>
            <p>Leviosa</p>
            <p>Lorem ipsum dolor</p>
            <AditionalWrp>
              <p>Lorem ipsum </p>
              <p>Lorem ipsum </p>
            </AditionalWrp>
          </InfoDiv>
        </li>
        <li>
          <img src={image3} alt="image3" />
          <InfoDiv>
            <p>Lolito</p>
            <p>Luxury big sofa</p>
            <AditionalWrp>
              <p>Rp 7.000.000</p>
              <p>Rp 14.000.000</p>
            </AditionalWrp>
          </InfoDiv>
        </li>
        <li>
          <img src={image4} alt="image4" />
          <InfoDiv>
            <p>Respira</p>
            <p>Minimalist fan</p>
            <AditionalWrp>
              <p>Rp 500.000</p>
              <p></p>
            </AditionalWrp>
          </InfoDiv>
        </li>
        <li>
          <img src={image5} alt="image5" />
          <InfoDiv>
            <p>Grifo</p>
            <p>Night lamp</p>
            <AditionalWrp>
              <p>Rp 1.500.000</p>
              <p></p>
            </AditionalWrp>
          </InfoDiv>
        </li>
        <li>
          <img src={image6} alt="image6" />
          <InfoDiv>
            <p>Muggo</p>
            <p>Small mug</p>
            <AditionalWrp>
              <p>Rp 150.000</p>
              <p></p>
            </AditionalWrp>
          </InfoDiv>
        </li>
        <li>
          <img src={image7} alt="image7" />
          <InfoDiv>
            <p>Pingky</p>
            <p>Cute bed set</p>
            <AditionalWrp>
              <p>Rp 7.000.000</p>
              <p>Rp 14.000.000</p>
            </AditionalWrp>
          </InfoDiv>
        </li>
        <li>
          <img src={image8} alt="image8" />
          <InfoDiv>
            <p>Potty</p>
            <p>Minimalist flower pot</p>
            <AditionalWrp>
              <p>Rp 500.000</p>
              <p></p>
            </AditionalWrp>
          </InfoDiv>
        </li>
      </ProductsWrapper>
      <ShowMoreBtn type="button">Show more</ShowMoreBtn>
    </ProductsWrp>
  );
};
