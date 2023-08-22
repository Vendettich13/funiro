import { HiOutlineTrophy } from "react-icons/hi2";
import { BsPatchCheck } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Featurewrp, FirstP, SecondP } from "./Feature.styled";

export const Feature = () => {
  return (
    <div className="container">
      <Featurewrp>
        <li>
          <div>
            <HiOutlineTrophy size={40} />
          </div>

          <div>
            <FirstP>High Quality</FirstP>
            <SecondP>Crafted from top materials</SecondP>
          </div>
        </li>
        <li>
          <div>
            <BsPatchCheck size={40} />
          </div>

          <div>
            <FirstP>Warrany Protection</FirstP>
            <SecondP>Over 2 years</SecondP>
          </div>
        </li>
        <li>
          <div>
            <TbTruckDelivery size={40} />
          </div>

          <div>
            <FirstP>Free Shipping</FirstP>
            <SecondP>Order over 150 $</SecondP>
          </div>
        </li>
        <li>
          <div>
            <MdOutlineSupportAgent size={40} />
          </div>

          <div>
            <FirstP>24 / 7 Support</FirstP>
            <SecondP>Dedicated support</SecondP>
          </div>
        </li>
      </Featurewrp>
    </div>
  );
};
