import { styled } from "styled-components";

export const FooterWrp = styled.div`
  display: flex;
  gap: 70px;
  padding: 80px 100px 60px;

  h3 {
    margin-bottom: 16px;
    color: #000;
    font-family: "Gilroy";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;

    li {
      color: #616161;
      font-family: "Gilroy";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      a {
        color: #616161;
      }
    }
  }
  input {
    border: none;
    background: #f4f5f7;
    padding: 10px 12px;

    &::placeholder {
      color: #828282;
      font-family: Gilroy;
      font-size: 16px;
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
