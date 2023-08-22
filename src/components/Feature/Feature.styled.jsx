import { styled } from "styled-components";

export const Featurewrp = styled.ul`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: space-between;

  li {
    gap: 24px;
    @media (min-width: 768px) and (max-width: 1199px) {
      gap: 20px;
    }
    display: flex;
    align-items: center;
  }
`;
export const FirstP = styled.p`
  color: #3a3a3a;
  font-family: "Gilroy";
  font-size: 18px;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 14px;
  }
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
`;
export const SecondP = styled.p`
  color: #898989;
  font-family: Gilroy;
  font-size: 16px;
  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 14px;
  }
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
