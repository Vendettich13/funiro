import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { RxAvatar } from "react-icons/rx";
import { HiOutlineSearch } from "react-icons/hi";
import {
  HeaderIcons,
  HeaderNav,
  HeaderSt,
  Inputwrapper,
  Logo,
  NavWrapper,
  SearchInput,
} from "./Header.styled";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <HeaderSt>
          <Logo href="/">Funiro.</Logo>
          <NavWrapper>
            <HeaderNav>
              <li>
                Products
                <button>
                  <IoIosArrowDown />
                </button>
              </li>
              <li>
                Rooms
                <button>
                  <IoIosArrowDown />
                </button>
              </li>
              <li>Inspirations</li>
            </HeaderNav>
          </NavWrapper>
          <Inputwrapper>
            <button>
              <HiOutlineSearch size={20} />
            </button>
            <SearchInput
              type="text"
              placeholder="Search for minimalist chair"
            />
          </Inputwrapper>
          <div>
            <HeaderIcons>
              <li>
                <button>
                  <AiOutlineHeart size={24} />
                </button>
              </li>
              <li>
                <button>
                  <BsCart3 size={24} />
                </button>
              </li>
              <li>
                <button>
                  <RxAvatar size={40} />
                </button>
              </li>
            </HeaderIcons>
          </div>
        </HeaderSt>
      </div>
    </header>
  );
};
