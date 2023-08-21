import {
  BottomOfLayout,
  ChaosWrapper,
  MasonryTitle,
  MassonryWrp,
} from "./Massonry.styled";
import chaos1 from "../../Images/Chaos1.jpg";
import chaos2 from "../../Images/Chaos2.jpg";
import chaos3 from "../../Images/Chaos3.jpg";
import chaos4 from "../../Images/Chaos4.jpg";
import chaos5 from "../../Images/Chaos5.jpg";
import chaos6 from "../../Images/Chaos6.jpg";
import chaos7 from "../../Images/Chaos7.jpg";
import chaos8 from "../../Images/Chaos8.jpg";
import chaos9 from "../../Images/Chaos9.jpg";

export const Massonry = () => {
  return (
    <>
      <MasonryTitle>
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </MasonryTitle>
      <MassonryWrp>
        <div>
          <ChaosWrapper>
            <li>
              <img src={chaos1} alt="chaos1" />
            </li>
            <li>
              <img src={chaos2} alt="chaos2" />
            </li>
            <li>
              <img src={chaos3} alt="chaos3" />
            </li>
            <li>
              <img src={chaos4} alt="chaos4" />
            </li>
            <li>
              <img src={chaos5} alt="chaos5" />
            </li>
            <li>
              <img src={chaos6} alt="chaos6" />
            </li>
            <li>
              <img src={chaos7} alt="chaos7" />
            </li>
            <li>
              <img src={chaos8} alt="chaos8" />
            </li>
            <li>
              <img src={chaos9} alt="chaos9" />
            </li>
          </ChaosWrapper>
        </div>
      </MassonryWrp>
      <BottomOfLayout />
    </>
  );
};
