import { styled } from "styled-components";

export const HeroCard = styled.div`
  right: 20px;
  left: 98px;
  @media (min-width: 768px) and (max-width: 1199px) {
    left: 50px;
  }
  z-index: 5;
  position: absolute;
  width: calc(494px - 120px);
  padding: 60px;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 40px;
  }
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(15.5px);

  h1 {
    margin-bottom: 16px;
    color: #3a3a3a;
    font-family: "Gilroy";
    font-size: 56px;
    @media (min-width: 768px) and (max-width: 1199px) {
      font-size: 48px;
    }
    font-style: normal;
    font-weight: 700;
    line-height: 67px;
  }
  p {
    color: #898989;
    font-family: "Gilroy";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
  }
  button {
    margin-top: 50px;
    padding: 24px 140px;
    width: 100%;
    background: #e89f71;
    color: #fff;

    font-family: "Gilroy";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
`;

export const HeroWrapper = styled.div`
  padding-left: 100px;
  padding-right: 100px;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;

export const ImageWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: flex-end;
  height: 555px;
  width: 900px;

  img {
    overflow: hidden;
  }
`;

export const ImageList = styled.ul`
  display: flex;
  gap: 32px;
`;
export const Dots = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    li {
      color: #d8d8d8;
    }
  }
`;

export const ButtonsWrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowWrp = styled.ul`
  display: flex;
  gap: 8px;
  align-items: center;

  li:first-child {
    button {
      color: #e89f71;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px;
      width: 50px;
      height: 50px;
      background-color: #f9f1e7;
    }
  }

  button:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    color: #fff;
    background-color: #e89f71;
  }
`;

export const OnImgCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  bottom: 40px;
  right: 40px;
  padding: 24px;
  position: absolute;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(15.5px);

  p:first-child {
    color: #3a3a3a;
    font-family: "Gilroy";
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 33px;
  }
  p {
    color: #616161;
    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  p:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #3a3a3a;
    font-family: "Gilroy";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
`;
