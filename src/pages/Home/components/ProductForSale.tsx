import { ProductForSaleLayout } from "../styles";
import expresso from "../../../assets/Type=Expresso.png";
import { ShoppingCart } from "phosphor-react";
import { InputNumberButton } from "../../../components/InputNumber";
import { useContext, useState } from "react";
import { InfoCoffeeContext } from "../../../contexts/InfoCoffeeContext";

interface ProductProps {
  title: string;
  description: string;
  tagName: string[];
  price: number;
}

export function ProductForSale({
  title,
  description,
  tagName,
  price,
}: ProductProps) {
  const [valueInput, setValueInput] = useState<number>(1);
  const { updatedOrderCoffee } = useContext(InfoCoffeeContext);

  function handleAddCoffeeInCart() {

    console.log(`Adicionando ${valueInput} unidades de ${title} ao carrinho`);

    const retorno = updatedOrderCoffee(title, valueInput); 

  }

  return (
    <ProductForSaleLayout key={title}>
      <div>
        <img src={expresso} />
        <div>
          <label>{tagName}</label>
        </div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <h2>R$ {price}</h2>
        <form>
          <InputNumberButton quantity={valueInput} handleInputNumber={setValueInput} />
          <span onClick={handleAddCoffeeInCart}>
            <ShoppingCart size={22} weight="fill" />
          </span>
        </form>
      </div>
    </ProductForSaleLayout>
  );
}
