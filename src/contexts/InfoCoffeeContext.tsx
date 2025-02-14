import { createContext, ReactNode, useReducer } from "react";
import { InfosCoffee } from "../infos/InfosCoffee";
import { coffeeReducer } from "../reducers/coffe/reducer";
import { addOrderAction, clearOrderAction, removeOrderAction, setInfoOrderAction } from "../reducers/coffe/actions";

export interface CoffeeProviderType {
  infosCoffee: Record<string, InfosCoffeeType>;
  quantityCoffe: OrderCoffeType[];
  infoOrderCoffe: InfoOrderCoffeType | null;
  updatedOrderCoffee: (title: string, valueInput: number) => void;
  removeOrderCoffee: (title: string) => void;
  createInfoOrderCoffe: (data: InfoOrderCoffeType) => void;
}

export const InfoCoffeeContext = createContext({} as CoffeeProviderType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export interface InfosCoffeeType {
  title: string;
  description: string;
  tagName: string[];
  price: number;
}

export interface OrderCoffeType {
  type: string;
  quantity: number;
}
export interface InfoOrderCoffeType {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  type_Paymment: string;
}

export function InfoCoffeeProvider({ children }: CoffeeContextProviderProps) {
  const [state, dispatch] = useReducer(coffeeReducer, {
    infosCoffee: InfosCoffee,
    quantityCoffe: [] as OrderCoffeType[],
    infoOrderCoffe: null as InfoOrderCoffeType | null,
  });

  function updatedOrderCoffee(title: string, valueInput: number) {
    dispatch( addOrderAction(title, valueInput) );
  }

  function createInfoOrderCoffe(data: InfoOrderCoffeType) {
    dispatch(setInfoOrderAction(data));
    dispatch(clearOrderAction()); // Limpa os pedidos após a submissão
  }

  function removeOrderCoffee(title: string) {
    dispatch(removeOrderAction(title));
  }

  return (
    <InfoCoffeeContext.Provider
      value={{
        infosCoffee: state.infosCoffee,
        quantityCoffe: state.quantityCoffe,
        updatedOrderCoffee,
        removeOrderCoffee,
        createInfoOrderCoffe,
        infoOrderCoffe: state.infoOrderCoffe,
      }}
    >
      {children}
    </InfoCoffeeContext.Provider>
  );
}
