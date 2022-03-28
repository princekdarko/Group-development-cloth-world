import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/images/Search-icon.png";
import userIcon from "../../assets/images/User-icon.png";
import cartIcon from "../../assets/images/Cart-icon.png";
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import Logo from "../../assets/images/Cloth-World-Logo.png";
import { getUser } from "../../reducks/users/selectors";

import CartLink from "./CartLink";
import Search from "./Search";
import SignInLink from "./SignInLink";
import SignOutLink from "./SignOutLink";
import SignUpLink from "./SignUpLink";

export default function Header(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { pathname } = history.location;
  const { totalCart, setSearch, setPage } = props;
  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const token = user ? user.token : null;

  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="clothworld" />
      </Link>

    

      {
        <ul className="menu__box">
          {pathname === "/sign-in" ? (
            <SignUpLink />
          ) : pathname === "/sign-up" ? (
            <SignInLink />
          ) : token ? (
            <>
              {setSearch && <Search setSearch={setSearch} setPage={setPage} />}
              <CartLink totalCart={totalCart} />
              <SignOutLink />
            </>
          ) : (
            <>
              <SignInLink />
              <SignUpLink />
            </>
          )}
        </ul>
      }
    </header>
  );
}
