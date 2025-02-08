import zod from "zod";
import { useContext } from "react";
import { ProductTable } from "./components/ProductTable";
import { CheckoutContainer } from "./styles";
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { InfoCoffeeContext } from "../../contexts/InfoCoffeeContext";
import { FormAddress } from "./components/FormAddress";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const newCoffeeFormValidationSchema = zod.object({
  cep: zod.string().min(8, "Informe o CEP corretamente."),
  rua: zod.string().min(1, "Informe o nome da rua corretamente."),
  numero: zod.string().min(1, "Informe o numero corretamente."),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1, "Informe o bairro corretamente."),
  cidade: zod.string().min(1, "Informe a cidade corretamente."),
  uf: zod.string().min(1, "Informe o estado corretamente."),
  type_Paymment: zod.string().min(1),
});

type newCoffeeFormData = zod.infer<typeof newCoffeeFormValidationSchema>;

export function Checkout() {
  const { infosCoffee, quantityCoffe, createInfoOrderCoffe } = useContext(InfoCoffeeContext);

  const newCoffeeForm = useForm<newCoffeeFormData>({
    resolver: zodResolver(newCoffeeFormValidationSchema),
    defaultValues: {
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      uf: "",
      type_Paymment: "",
    },
  });

  const { handleSubmit, reset, watch } = newCoffeeForm;
  const typePaymment = watch("type_Paymment");
  const navigate = useNavigate();


  function createNewOrderCoffee(data: newCoffeeFormData) {
    console.log("criado")
    createInfoOrderCoffe(data);
    console.log(data)

    navigate("/success");
    reset();
  }

  function renderProductOrder() {
    return quantityCoffe.map((order) => {
      const coffee = Object.values(infosCoffee).find(
        (coffee) => coffee.title === order.type
      );

      if (!coffee) return null;

      return (
        <ProductTable
          key={coffee.title}
          title={coffee.title}
          price={coffee.price}
          quantity={order.quantity}
        />
      );
    });
  }

  function calcTotalItems(){ 
                
    let totalItems = 0; 
    quantityCoffe.forEach((el)=>{
      totalItems += (el.quantity * 9.90);
    })

    return totalItems.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  function calcTotalOrderWithDelivery(){ 

    let totalItemsWithDelivery = 3.50; 
    quantityCoffe.forEach((el)=>{
      totalItemsWithDelivery += (el.quantity * 9.90);
    })
                

    return totalItemsWithDelivery.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(createNewOrderCoffee)}>
        <h3>Complete seu pedido</h3>
        <h3>Cafés selecionados</h3>
        <div>
          <div>
            <div>
              <MapPinLine size={22} />
              <div>
                <h4>Endereço de Entrega</h4>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <FormProvider {...newCoffeeForm}>
              <FormAddress />
            </FormProvider>
          </div>
          <div className="payment-group">
            <div>
              <CurrencyDollar size={22} />
              <div>
                <h4>Pagamento</h4>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div>
            <button 
              type="button"  
              onClick={() => newCoffeeForm.setValue("type_Paymment", "Cartão de Crédito")}
              className={ typePaymment === "Cartão de Crédito" ? "selected" : ""}
            >
              <CreditCard size={16} />
              Cartão de Crédito
            </button>
            <button 
              type="button" 
              onClick={() => newCoffeeForm.setValue("type_Paymment", "Cartão de Débito")}
              className={ typePaymment === "Cartão de Débito" ? "selected" : ""}
            >
              <Bank size={16} />
              Cartão de Débito
            </button>
            <button 
              type="button" 
              onClick={() => {newCoffeeForm.setValue("type_Paymment", "Dinheiro")}}
              className={ typePaymment === "Dinheiro" ? "selected" : ""}
            >
              <Money size={16} />
              Dinheiro
            </button>
            </div>
          </div>
        </div>

        <div className="selected-coffees">
          <table>
            <tbody>{renderProductOrder()}</tbody>
          </table>

          <div>
            <div>
              <p>Total de itens</p>
              <h5 style={{ textAlign: "end" }}>{calcTotalItems()}</h5>

              <p>Entrega</p>
              <h5 style={{ textAlign: "end" }}>R$ 3,50</h5>

              <h2>Total</h2>
              <h1 style={{ textAlign: "end" }}>{calcTotalOrderWithDelivery()}</h1>
            </div>
            <button type="submit">CONFIRMAR PEDIDO</button>
          </div>
        </div>
      </form>
    </CheckoutContainer>
  );
}
