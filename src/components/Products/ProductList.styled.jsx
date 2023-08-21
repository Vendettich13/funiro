import { styled } from "styled-components";

export const ProductsWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 32px;

  img {
    width: 100%;
  }
`;

export const InfoDiv = styled.div`
  height: 100px;
  background: #f4f5f7;
  padding: 16px 16px 30px;
  p:first-child {
    color: #3a3a3a;
    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
  }
  p {
    color: #898989;
    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const AditionalWrp = styled.div`
  display: flex;
  align-items: center;

  p:first-child {
    color: #3a3a3a;
    font-family: "Gilroy";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
  p:last-child {
    color: #b0b0b0;
    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-decoration: line-through;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 32px;

  h2 {
    color: #3a3a3a;
    text-align: center;
    font-family: "Gilroy";
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
  }
`;
export const ProductsWrp = styled.div`
  padding: 44px 100px;
`;

export const ShowMoreBtn = styled.button`
  margin-top: 32px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  padding: 12px 82px;
  border: 1px solid #e89f71;
  background: #fff;
  color: #e89f71;
  font-family: "Gilroy";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
