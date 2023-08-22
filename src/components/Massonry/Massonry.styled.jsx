import { styled } from "styled-components";

export const MassonryWrp = styled.div`
  padding-bottom: 88px;
  @media (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 44px;
  }
`;

export const ChaosWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 16px;
  @media (min-width: 768px) and (max-width: 1199px) {
    gap: 10px;
  }
  align-items: baseline;

  li > img {
    width: 100%;
  }
`;

export const BottomOfLayout = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1000px;
  @media (min-width: 768px) and (max-width: 1199px) {
    width: 650px;
  }
  border: 1px solid #d8d8d8;
`;

export const MasonryTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: #616161;
    text-align: center;
    font-family: "Gilroy";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }

  h2 {
    color: #3a3a3a;
    text-align: center;
    font-family: "Gilroy";
    font-size: 40px;
    @media (min-width: 768px) and (max-width: 1199px) {
      font-size: 36px;
    }
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
  }
`;
