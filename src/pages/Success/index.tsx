import { SuccessContainer } from "./styles";
import delivery from "../../assets/Illustration.svg";
import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { InfoCoffeeContext } from "../../contexts/InfoCoffeeContext";

export function Success() {
  const { infoOrderCoffe } = useContext(InfoCoffeeContext);

  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <div>
        <div>
          <p>
            <a>
              <MapPin size={16} weight="fill" />
            </a> {" "}
            {infoOrderCoffe ? (
              <span>
                Entrega em <strong>{infoOrderCoffe.rua}, {infoOrderCoffe.numero}</strong>{" "}
                <strong>{infoOrderCoffe.bairro}</strong> -{" "}
                <strong>{infoOrderCoffe.cidade}, {infoOrderCoffe.uf}</strong>
              </span>
            ) : (
              <span>Erro ao obter informações do pedido.</span>
            )}
          </p>
          <p>
            <a>
              <Timer size={16} weight="fill" />
            </a>{" "}
            <span>
              Previsão de entrega <strong>20 min - 30 min</strong>
            </span>
          </p>
          <p>
            <a>
              <CurrencyDollar size={16} weight="fill" />
            </a>{" "}
            <span>
              Pagamento na entrega {infoOrderCoffe ? (
                <strong>{infoOrderCoffe.type_Paymment}</strong>
              ) : (
                <strong>Erro ao obter informações do pedido.</strong>
              )}
            </span>        
          </p>
        </div>
        <img src={delivery} alt="" />
      </div>
    </SuccessContainer>
  );
}
