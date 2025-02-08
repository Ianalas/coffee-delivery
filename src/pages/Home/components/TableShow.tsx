import { ReactNode, useContext } from "react";
import { TableHomeLayout } from "../styles"
import { ProductForSale } from "./ProductForSale"
import { InfoCoffeeContext } from "../../../contexts/InfoCoffeeContext";



export function TableShow(){
  const {infosCoffee}  = useContext(InfoCoffeeContext);


  function despackedInfosCoffe(): ReactNode[]{

    const  retorno = Object
    .entries(infosCoffee)
    .map(([key, el])=>{
      return (
        <ProductForSale
        key={key}
        title={el.title}
        description={el.description}
        tagName={el.tagName}
        price={el.price}
      />
      )
    })

    return retorno
  }


  return(
    <TableHomeLayout>
      <h1>Nossos cafés</h1>
      <div>
        {despackedInfosCoffe()}
      </div>
    </TableHomeLayout>  
  )
}