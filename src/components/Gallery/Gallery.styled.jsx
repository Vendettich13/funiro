import { styled } from "styled-components";

export const BgGallery = styled.div`
  background: #fcf8f3;
`;

export const GalleryWrp = styled.div`
  display: flex;
  align-items: center;
  padding: 44px 100px;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 24px 50px;
  }
`;

export const ImgWrp = styled.div`
  position: relative;

  display: flex;
  align-items: flex-start;
  gap: 15px;

  img:nth-child(n + 1) {
    overflow: hidden;
  }
`;

export const DotWrp = styled.ul`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (min-width: 768px) and (max-width: 1199px) {
    position: absolute;
    left: -200px;
    bottom: -28px;
  }
`;

export const MainTextWrp = styled.div`
  width: 380px;
  margin-right: 86px;
  p:first-child {
    color: #3a3a3a;
    font-family: "Gilroy";
    font-size: 40px;
    @media (min-width: 768px) and (max-width: 1199px) {
      font-size: 34px;
    }
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
  }

  p {
    color: #616161;
    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const ExploreMoreBtn = styled.button`
  margin-top: 24px;
  padding: 12px 40px;
  background: #e89f71;
  color: #fff;
  font-family: "Gilroy";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export const DotsPosition = styled.div`
  position: absolute;
  bottom: 5px;
  right: 110px;
`;

export const ConnectingDiv = styled.div`
  position: relative;
`;

export const InfoOnThePicture = styled.div`
  bottom: 20px;
  left: 20px;
  position: absolute;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(1.5px);
  padding: 32px;
  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 18px;
  }

  p:first-child {
    color: #616161;
    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }

  p {
    color: #3a3a3a;
    font-family: Gilroy;
    font-size: 28px;
    @media (min-width: 768px) and (max-width: 1199px) {
      font-size: 24px;
    }
    font-style: normal;
    font-weight: 600;
    line-height: 34px;
  }
`;

export const ArrowBtn = styled.button`
  position: absolute;
  bottom: 0;
  right: -48px;
  height: 48px;
  background: #e89f71;
  padding: 12px;
`;

export const NextBtn = styled.button`
  position: absolute;
  right: -30px;
  top: 190px;
  @media (min-width: 768px) and (max-width: 1199px) {
    top: 270px;
  }
  border-radius: 50px;
  height: 48px;
  width: 48px;
  color: #fff;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.75);
`;
