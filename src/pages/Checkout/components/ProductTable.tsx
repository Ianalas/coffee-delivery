import { InputNumberButton } from "../../../components/InputNumber";
import { ContainerProduct } from "./styles";
import coffee from "../../../assets/Type=Expresso.png";
import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { InfoCoffeeContext } from "../../../contexts/InfoCoffeeContext";

interface ProductTableProps {
  title: string;
  price: number;
  quantity: number;
}

export function ProductTable({ title, price, quantity }: ProductTableProps) {
  const [valueQuantity, setValueQuantity] = useState(quantity);
  const { updatedOrderCoffee, removeOrderCoffee } = useContext(InfoCoffeeContext);

  useEffect(() => {
    if (quantity !== valueQuantity) {
      updatedOrderCoffee(title, valueQuantity);
    }
  }, [valueQuantity]);

  function handleRemoveCoffee() {
    removeOrderCoffee(title); 
  }

  return (
    <ContainerProduct>
      <td>
        <div>
          <div>
            <img src={coffee} alt={title} />
            <div>
              <p>{title}</p>
              <InputNumberButton quantity={valueQuantity} handleInputNumber={setValueQuantity} />
              <button type="button" onClick={handleRemoveCoffee}>
                <Trash /> Remover
              </button>
            </div>
          </div>
          <strong>R$ {price.toFixed(2)}</strong>
        </div>
      </td>
    </ContainerProduct>
  );
}
