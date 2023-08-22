import { styled } from "styled-components";

export const HeaderSt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Inputwrapper = styled.div`
  width: 280px;

  @media (min-width: 768px) and (max-width: 1199px) {
    overflow: hidden;
  }
  margin-right: auto;
  position: relative;

  button {
    position: absolute;
    top: 15px;
    left: 15px;
  }
`;
export const NavWrapper = styled.div`
  margin-right: 43px;
  @media (min-width: 768px) and (max-width: 1199px) {
    margin-right: 20px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 12px;
  padding-left: 44px;
  background-color: #fff;
  flex-shrink: 0;

  &::placeholder {
    color: #616161;
    font-family: "Gilroy";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
  }
`;

export const Logo = styled.a`
  margin-right: 40px;
  font-family: "Gilroy";
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media (min-width: 768px) and (max-width: 1199px) {
    font-size: 22px;
    margin-right: 20px;
  }
`;

export const HeaderNav = styled.ul`
  gap: 40px;
  display: flex;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1199px) {
    gap: 15px;
  }

  li {
    display: flex;
    align-items: center;
    font-family: "Gilroy";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    @media (min-width: 768px) and (max-width: 1199px) {
      font-size: 14px;
    }
  }
  button {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderIcons = styled.ul`
  gap: 32px;
  @media (min-width: 768px) and (max-width: 1199px) {
    gap: 12px;
  }
  display: flex;
  align-items: center;
`;
