import React from "react";
import addidas from '../../../assets/img/partners/adidas.png'
import facebook from '../../../assets/img/partners/facebook.png'
import google from '../../../assets/img/partners/google.png'
import instagram from '../../../assets/img/partners/instagram.png'
import twitter from '../../../assets/img/partners/twitter.png'
import uber from '../../../assets/img/partners/uber.png'
import nike from '../../../assets/img/partners/nike.png'
import './Footer.css'

const Footer = () => {
  return (
    <>
     <div class="brand">
      <div class="brand_container">
        <h2>from top trusted brands</h2>
        <div class="partner-logos slider">
          <div class="slide">
            <a href="#">
              <img src={addidas} alt="logo" />
            </a>
          </div>
          <div class="slide">
            <a href="#">
              <img src={nike} alt="logo" />
            </a>
          </div>
          <div class="slide">
            <a href="#">
              <img src={uber}alt="logo" />
            </a>
          </div>
          <div class="slide">
            <a href="#">
              <img src={google}alt="logo" />
            </a>
          </div>
          <div class="slide">
            <a href="#">
              <img src={facebook}alt="logo" />
            </a>
          </div>
          <div class="slide">
            <a href="#">
              <img src={instagram} alt="logo" />
            </a>
          </div>
          <div class="slide">
            <a href="#">
              <img src={twitter} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <section class="footer">
     
      <div class="col">
          <h4>contact</h4>
          <p><strong>Address: </strong>Ogun-State TechHub beside PMB Estate,Kobape.</p>
          <p><strong>phone: </strong>(+234) 123 456 7890</p>
          <p><strong>Email: </strong>info@Ogunbit.com</p>
          <p><strong>hours: </strong>10:00 - 18:00, mon - sat</p>

          <div class="follow">
              <h4>follow us</h4>
              <div class="icons">
                  <i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                  <i class="fab fa-instagram"></i>
                  <i class="fab fa-pinterest-p"></i>
                  <i class="fab fa-youtube"></i>
              </div>

              <div class="copyright">
                  <p>&copy; 2023 Bureau of information technology</p>
              </div>
            </div>
</div>
   

      <div class="col">
          <h4>about</h4>
          <a href="#">about us</a>
          <a href="#">delivery information</a>
          <a href="#">privacy policies</a>
          <a href="#">terms & conditions</a>
      </div>

      <div class="col">
          <h4>my account</h4>
          <a href="#">sign in</a>
          <a href="#">view cart</a>
          <a href="#">my wishlist</a>
          <a href="#">track my order</a>
          <a href="#">help</a>
      </div>

      <div class="col install">
          <h4>Install App</h4>
          <p>from Apple store or Google Play</p>
          <div class="row">
              <img src="./img/Google_Play-Logo.wine.png" alt="google_play"/>
              <img src="./img/apple store.png" alt="google_play"/>
          </div>
          <p>Secured Payment Gateway</p>
          <div class="row">
              <img src="./img/paypal.png" alt="payment_gateway"/>
          </div>
    
      </div>
  
  </section>
    </>
   

  );
};

export default Footer;
