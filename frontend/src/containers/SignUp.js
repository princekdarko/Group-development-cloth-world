import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";

import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import { signUpError } from "../reducks/users/actions";
import { signUp } from "../reducks/users/operations";
import { getUser } from "../reducks/users/selectors";
import background1 from "../assets/images/background-1.png";
import BannerMobileImage from "../assets/images/Banner-Mobile.png";
import buyNow from "../assets/images/Buynow-image.png";
import recommand1 from "../assets/images/recommand-1.png";
import recommand2 from "../assets/images/recommand-2.png";
import recommand3 from "../assets/images/recommand-3.png";
import recommand4 from "../assets/images/recommand-4.png";
import background2 from "../assets/images/background-2.png";
import background3 from "../assets/images/background-3.png";
import background4 from "../assets/images/background-4.png";
import tagsKid from "../assets/images/tag-kids.png";
import tagsMen from "../assets/images/tags-men.png";
import tagsWomen from "../assets/images/tags-women.png";

export default function SignUp() {
  const history = useHistory();
  const { search } = useLocation();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const errors = getUser(selector).errors;

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmitSignUp = () => {
    if (values.password !== values.password_confirmation) {
      dispatch(
        signUpError({ password_confirm: ["Password are not the same."] })
      );
      return;
    }

    setIsLoading(true);
    dispatch(signUp(values, () => history.push({ pathname: "/", search })));
    setIsLoading(false);
  };
  return (
    <>
      <Header search={search} />
      <section className="main-wrapper">
        <section class="popup">
          <div class="popup-inner">
            <p className="title">
              {" "}
              Create an account and <br />
              discover the benefits
            </p>
            <p class="signUpParagraph">
              Lorem Ipsum is simply dummy text of <br />
              the printing and typesetting industry.
              <br />{" "}
            </p>
            <div className="form-container">
              <input
                className="custom-input"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={values.name}
                onChange={handleInputChange}
              />
              <input
                className="custom-input"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={handleInputChange}
              />
              {errors.email ? (
                <span className="error-text">{errors.email[0]}</span>
              ) : null}

              <input
                className="custom-input"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={values.password}
                onChange={handleInputChange}
              />
              {errors.password ? (
                <span className="error-text">{errors.password[0]}</span>
              ) : null}

              <input
                className="custom-input"
                type="password"
                name="password_confirmation"
                placeholder="Enter Confirm Password"
                value={values.password_confirmation}
                onChange={handleInputChange}
              />
              {errors.password_confirm ? (
                <span className="error-text">{errors.password_confirm[0]}</span>
              ) : null}
              <button className="custom-btn" onClick={onSubmitSignUp}>
                {isLoading ? "SIGNING UP..." : "SIGN UP"}
              </button>
              <p class="loginLink">
                Have an account ?{" "}
                <Link to={{ pathname: "/sign-in", search }}>Sign In</Link>
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="main-wrapper">
        <div className="banner">
          <img class="backgroundImg" src={background1} alt="" />
          <img className="banner-image-mobile" src={BannerMobileImage} alt="" />
          <div class="background">
            <h1>
              GET BRANDED CLOTHES AT <br />
              <span id="bold"> CLOTHWORLD</span>
            </h1>
            <p id="paragraph1">
              A transformative clothes which can be worn in any occationlike{" "}
              <br />
              Party, office, while trecking and more@
            </p>
            <div class="BuyNowbutton">
              <button class="buy">
                <img src={buyNow} alt="" />
              </button>
              <button class="tradeIn">With $599 with trade-in</button>
            </div>
          </div>
        </div>

        <center>
          <p id="awesomeProduct">EXPLORE AWESOME PRODUCTS</p>
          <h2>RECOMMENDED FOR YOU</h2>
        </center>
        <div class="recommandedImg">
          <div>
            <img src={recommand1} alt="" />
            <center>
              <p id="singleTour">Single Tour</p>
              <button id="price">$990</button>
            </center>
          </div>
          <div>
            <img src={recommand2} alt="" />
            <center>
              <p id="singleTour">Single Tour</p>
              <button id="price">$990</button>
            </center>
          </div>
          <div>
            <img src={recommand3} alt="" />
            <center>
              <p id="singleTour">Single Tour</p>
              <button id="price">$990</button>
            </center>
          </div>
          <div>
            <img src={recommand4} alt="" />
            <center>
              <p id="singleTour">Single Tour</p>
              <button id="price">$990</button>
            </center>
          </div>
        </div>
      </section>

      <section class="section-2">
        <center>
          <img id="tag" src={tagsKid} alt="" />
          <img class="backgroundImg" src={background2} alt="" />
          <img id="tag" src={tagsWomen} alt="" />
          <img class="backgroundImg" src={background3} alt="" />
          <img id="tag" src={tagsMen} alt="" />
          <img class="backgroundImg" src={background4} alt="" />
        </center>
      </section>
      <Footer />
    </>
  );
}
