import { FooterWrp, InputWrp } from "./Footer.styled";
import { RiSendPlaneFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer>
      <FooterWrp>
        <div>
          <h3>Funiro.</h3>
          <ul>
            <li>
              Worldwide furniture store since 2020. We sell over 1000+ branded
              products on our website
            </li>
            <li>Sawojajar Malang, Indonesia</li>
            <li>
              <a href="tel: +6289 456 3455">+6289 456 3455</a>
            </li>
            <li>
              <a href="www.funiro.com">www.funiro.com</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Menu</h3>
          <nav>
            <ul>
              <li>Products</li>
              <li>Rooms</li>
              <li>Inspirations</li>
              <li>About Us</li>
              <li>Terms & Policy</li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Account</h3>
          <nav>
            <ul>
              <li>My Account</li>
              <li>Checkout</li>
              <li>My Cart</li>
              <li>My catalog</li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Stay Connected</h3>
          <nav>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer noopener nofollow"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  rel="noreferrer noopener nofollow"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  rel="noreferrer noopener nofollow"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3>Stay Updated</h3>
          <InputWrp>
            <input type="text" placeholder="Enter your email" />
            <button>
              <RiSendPlaneFill color="#fff" />
            </button>
          </InputWrp>
        </div>
      </FooterWrp>
    </footer>
  );
};
