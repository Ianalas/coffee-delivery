import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from "phosphor-react";
import logo  from "../../assets/logo-icon-coffee.svg";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="logotipo da marca que representa um copo de café pegando fogo." />
      </NavLink>
      <div>
        <span>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </span>
        <NavLink to="/checkout">
          <span>
            <ShoppingCart size={22} weight="fill" />
          </span>
        </NavLink>

      </div>
    </HeaderContainer>
  );
}
