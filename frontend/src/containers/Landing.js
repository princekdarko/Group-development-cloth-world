import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import buyNow from "../assets/images/Buynow-image.png";

import tagsKid from "../assets/images/tag-kids.png";
import tagsMen from "../assets/images/tags-men.png";
import tagsWomen from "../assets/images/tags-women.png";
import BannerMobileImage from "../assets/images/Banner-Mobile.png";
import BannerImage from "../assets/images/background-1.png";
import background2 from "../assets/images/background-2.png";
import background3 from "../assets/images/background-3.png";
import background4 from "../assets/images/background-4.png";
import Empty from "../components/default/Empty";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
import CategoryCard from "../components/landing/CategoryCard";
import { fetchCategories } from "../reducks/category/operations";
import { getCategories } from "../reducks/category/selectors";
import { push } from "connected-react-router";

export default function Landing() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const categories = getCategories(selector);

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <section className="main-wrapper">
        <div className="banner">
          <img className="banner-image" src={BannerImage} alt="" />
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

        <section class="section-2">
          <center>
            <img id="tag" src={tagsKid} alt="" />
            <a href="/sign-up">
              <img class="backgroundImg" src={background2} alt="" />
            </a>
            <img id="tag" src={tagsWomen} alt="" />
            <a href="/sign-up">
              <img class="backgroundImg" src={background3} alt="" />
            </a>
            <img id="tag" src={tagsMen} alt="" />
            <a href="/sign-up">
              <img class="backgroundImg" src={background4} alt="" />
            </a>
          </center>
        </section>
      </section>
      <Footer />
    </>
  );
}
