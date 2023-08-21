import { styled } from "styled-components";

export const TipsWrp = styled.div`
  padding: 44px 100px;
`;

export const TipsTitle = styled.h2`
  margin-bottom: 32px;
  color: #3a3a3a;
  text-align: center;
  font-family: "Gilroy";
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
`;

export const TipsList = styled.ul`
  margin-bottom: 44px;
  display: flex;
  gap: 32px;
`;

export const TipInfo = styled.li`
  width: calc(100% / 3);
  p {
    color: #3a3a3a;
    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 29px;
    margin-bottom: 8px;
  }

  p:last-child {
    color: #898989;
    font-family: "Gilroy";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
`;

export const AdditionalInfoTip = styled.div`
  padding: 16px;
`;

export const DotsPosition = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
`;
