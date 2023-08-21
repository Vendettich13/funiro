import card1 from "../../Images/1528 1.jpg";
import card2 from "../../Images/157dc756f64c0f2e4e93d6fea0c7c23b.jpeg";
// import card3 from "../../Images/965eb67a69b0e20edcbe632460a2627c.png";
import { RxDotFilled } from "react-icons/rx";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { LiaDotCircleSolid } from "react-icons/lia";

import {
  ArrowWrp,
  ButtonsWrp,
  Dots,
  HeroCard,
  HeroWrapper,
  ImageList,
  ImageWrapper,
  OnImgCard,
} from "./Hero.styled";

export const Hero = () => {
  return (
    <>
      <HeroWrapper>
        <ButtonsWrp>
          <Dots>
            <ul>
              <li>
                <button
                  style={{
                    width: "30px",
                  }}
                >
                  <LiaDotCircleSolid size={30} color="#E89F71" />
                </button>
              </li>
              <li>
                <button
                  style={{
                    width: "15px",
                  }}
                >
                  <RxDotFilled size={15} color="#D8D8D8" />
                </button>
              </li>
              <li>
                <button
                  style={{
                    width: "15px",
                  }}
                >
                  <RxDotFilled size={15} color="#D8D8D8" />
                </button>
              </li>
              <li>
                <button
                  style={{
                    width: "15px",
                  }}
                >
                  <RxDotFilled size={15} color="#D8D8D8" />
                </button>
              </li>
            </ul>
          </Dots>
          <div style={{ marginLeft: "250px" }}>
            <ArrowWrp>
              <li>
                <button>
                  <MdKeyboardArrowLeft size={24} />
                </button>
              </li>
              <li>
                <button>
                  <MdKeyboardArrowRight size={24} />
                </button>
              </li>
            </ArrowWrp>
          </div>
        </ButtonsWrp>
      </HeroWrapper>
      <div>
        <ImageList>
          <ImageWrapper>
            <img src={card1} alt="card" />
            <HeroCard>
              <h1>High-Quality Furniture Just For You</h1>
              <p>
                Our furniture is made from selected and best quality materials
                that are suitable for your dream home
              </p>
              <button>Shop now</button>
            </HeroCard>
          </ImageWrapper>
          <ImageWrapper>
            <img src={card2} alt="card2" />
            <OnImgCard>
              <p>Bohauss</p>
              <p>Luxury big sofa 2-seat</p>
              <p>
                Rp 17.000.000 <MdKeyboardArrowRight />
              </p>
            </OnImgCard>
          </ImageWrapper>
        </ImageList>
      </div>
    </>
  );
};
