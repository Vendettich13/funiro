import {
  ArrowBtn,
  BgGallery,
  ConnectingDiv,
  DotWrp,
  DotsPosition,
  ExploreMoreBtn,
  GalleryWrp,
  ImgWrp,
  InfoOnThePicture,
  MainTextWrp,
  NextBtn,
} from "./Gallery.styled";
import gall1 from "../../Images/Gall1.jpg";
import gall2 from "../../Images/Gall2.jpg";
// import gall3 from "../../Images/Gall3.jpg";
import { LiaDotCircleSolid } from "react-icons/lia";
import { RxDotFilled } from "react-icons/rx";
import { BsArrowRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

export const Gallery = () => {
  return (
    <BgGallery>
      <GalleryWrp>
        <MainTextWrp>
          <p>50+ Beautiful rooms inspiration</p>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <ExploreMoreBtn type="button">Explore more</ExploreMoreBtn>
        </MainTextWrp>
        <ImgWrp>
          <ConnectingDiv>
            <img src={gall1} alt="gallery" />
            <InfoOnThePicture>
              <p>01 --- Bed Room</p>
              <p>Inner Peace</p>
              <ArrowBtn type="button">
                <BsArrowRight size={24} color="#fff" />
              </ArrowBtn>
            </InfoOnThePicture>
          </ConnectingDiv>
          <img src={gall2} alt="gallery2" />
          {/* <img src={gall3} alt="gallery3" /> */}
          <NextBtn type="button">
            <IoIosArrowForward color="#E89F71" />
          </NextBtn>
          <DotsPosition>
            <DotWrp>
              <li>
                <button>
                  <LiaDotCircleSolid size={30} color="#E89F71" />
                </button>
              </li>
              <li>
                <button>
                  <RxDotFilled size={15} color="#D8D8D8" />
                </button>
              </li>
              <li>
                <button>
                  <RxDotFilled size={15} color="#D8D8D8" />
                </button>
              </li>
              <li>
                <button>
                  <RxDotFilled size={15} color="#D8D8D8" />
                </button>
              </li>
            </DotWrp>
          </DotsPosition>
        </ImgWrp>
      </GalleryWrp>
    </BgGallery>
  );
};
