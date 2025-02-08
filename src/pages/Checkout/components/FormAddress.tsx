import { useFormContext } from "react-hook-form";

export function FormAddress() {
  const { register } = useFormContext(); 

  return (
    <div className="input-group">
      <input type="text" placeholder="CEP" {...register("cep", { required: true })} />
      <input type="text" placeholder="Rua" {...register("rua", { required: true })} />
      <input type="text" placeholder="Número" {...register("numero", { required: true })} />
      <input type="text" placeholder="Complemento" {...register("complemento")} />
      <input type="text" placeholder="Bairro" {...register("bairro", { required: true })} />
      <input type="text" placeholder="Cidade" {...register("cidade", { required: true })} />
      <input type="text" placeholder="UF" {...register("uf", { required: true })} />
    </div>
  );
}
