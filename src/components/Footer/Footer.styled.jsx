import { styled } from "styled-components";

export const FooterWrp = styled.div`
  display: flex;
  gap: 70px;
  padding: 80px 100px 60px;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 24px 50px;
    gap: 40px;
  }

  h3 {
    margin-bottom: 16px;
    color: #000;
    font-family: "Gilroy";
    font-size: 24px;
    @media (min-width: 768px) and (max-width: 1199px) {
      font-size: 20px;
    }
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (min-width: 768px) and (max-width: 1199px) {
      gap: 12px;
    }

    li {
      max-width: 250px;
      color: #616161;
      font-family: "Gilroy";
      font-size: 16px;
      @media (min-width: 768px) and (max-width: 1199px) {
        font-size: 14px;
      }
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      a {
        color: #616161;
      }
    }
  }
  input {
    @media (min-width: 768px) and (max-width: 1199px) {
      width: 100%;
    }
    border: none;
    background: #f4f5f7;
    padding: 10px 12px;

    &::placeholder {
      color: #828282;
      font-family: Gilroy;
      font-size: 16px;
      @media (min-width: 768px) and (max-width: 1199px) {
        font-size: 14px;
      }
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: #e89f71;
  }
`;
export const InputWrp = styled.div`
  display: flex;

  @media (min-width: 768px) and (max-width: 1199px) {
    display: block;
  }
`;
