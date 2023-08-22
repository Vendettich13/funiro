import {
  AdditionalInfoTip,
  DotsPosition,
  TipInfo,
  TipsList,
  TipsTitle,
  TipsWrp,
} from "./Tips.styled";
import tip1 from "../../Images/Tips1.jpg";
import tip2 from "../../Images/Tips2.jpg";
import tip3 from "../../Images/Tips3.jpg";
import { LiaDotCircleSolid } from "react-icons/lia";
import { RxDotFilled } from "react-icons/rx";

export const Tips = () => {
  return (
    <TipsWrp>
      <TipsTitle>Tips & Tricks</TipsTitle>
      <div>
        <TipsList>
          <TipInfo>
            <img src={tip1} alt="tip1" />
            <AdditionalInfoTip>
              <p>How to create a TipInfoving room to love</p>
              <p>20 jan 2020</p>
            </AdditionalInfoTip>
          </TipInfo>
          <TipInfo>
            <img src={tip2} alt="tip2" />
            <AdditionalInfoTip>
              <p>Solution for clean look working space</p>
              <p>10 jan 2020</p>
            </AdditionalInfoTip>
          </TipInfo>
          <TipInfo>
            <img src={tip3} alt="tip3" />
            <AdditionalInfoTip>
              <p>Make your cooking activity more fun with good setup</p>
              <p>20 jan 2020</p>
            </AdditionalInfoTip>
          </TipInfo>
        </TipsList>

        <DotsPosition>
          <li>
            <button>
              <RxDotFilled size={15} color="#D8D8D8" />
            </button>
          </li>
          <li>
            <button>
              <LiaDotCircleSolid size={30} color="#E89F71" />
            </button>
          </li>
          <li>
            <button>
              <RxDotFilled size={15} color="#D8D8D8" />
            </button>
          </li>
          <li>
            <button>
              <RxDotFilled size={15} color="#D8D8D8" />
            </button>
          </li>
        </DotsPosition>
      </div>
    </TipsWrp>
  );
};
