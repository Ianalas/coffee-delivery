import { createContext, ReactNode, useState } from "react";
import { InfosCoffee } from "../infos/InfosCoffee";

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

interface InfosCoffeeType {
  title: string;
  description: string;
  tagName: string[];
  price: number;
}

interface OrderCoffeType {
  type: string;
  quantity: number;
}

interface InfoOrderCoffeType {
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
  const [infosCoffee, setInfosCoffee] = useState<Record<string, InfosCoffeeType>>(InfosCoffee);
  const [quantityCoffe, setQuantityCoffe] = useState<OrderCoffeType[]>([]);
  const [infoOrderCoffe, setInfoOrderCoffe] = useState<InfoOrderCoffeType | null>(null);

  function updatedOrderCoffee(title: string, valueInput: number) {
    setQuantityCoffe((prevOrders) => {
      const existingOrder = prevOrders.find((order) => order.type === title);

      if (existingOrder) {
        return prevOrders.map((order) =>
          order.type === title ? { ...order, quantity: valueInput } : order
        );
      } else {
        return [...prevOrders, { type: title, quantity: valueInput }];
      }
    });
  }

  function createInfoOrderCoffe(data: InfoOrderCoffeType) {
    setInfoOrderCoffe(data);

    setQuantityCoffe([]); //Ao submitar irá limpar a order criada.
  }

  function removeOrderCoffee(title: string) {
    setQuantityCoffe((prevOrders) => prevOrders.filter((order) => order.type !== title));
  }

  return (
    <InfoCoffeeContext.Provider
      value={{ infosCoffee, quantityCoffe, updatedOrderCoffee, removeOrderCoffee, createInfoOrderCoffe, infoOrderCoffe }}
    >
      {children}
    </InfoCoffeeContext.Provider>
  );
}
