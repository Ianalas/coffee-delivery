import { HomeContainer, AdscenseHomeLayout} from "./styles";
import { Timer, Package, Coffee, ShoppingCart } from "phosphor-react";
import image from "../../assets/img-coffee.png";
import { TableShow } from "./components/TableShow";

export function Home() {
  return (
    <HomeContainer>
      <AdscenseHomeLayout>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h4>
          </div>
          <div>
            <p>
              <a><ShoppingCart size={16} weight="fill" /></a>
              <span>Compra simples e segura</span>
            </p>
            <p>
              <a><Package size={16} weight="fill" /></a>
              <span>Embalagem mantém o café intacto</span>
            </p>
            <p>
              <a><Timer size={16} weight="fill" /></a>
              <span>Entrega rápida e rastreada</span>
            </p>
            <p>
              <a><Coffee size={16} weight="fill" /></a>
              <span>O café chega fresquinho até você</span>
            </p>
          </div>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </AdscenseHomeLayout>
      <TableShow />
    </HomeContainer>
  );
}
