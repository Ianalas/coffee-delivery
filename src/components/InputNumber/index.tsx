import { InputHTMLAttributes } from "react";
import { ButtonNumberContainer } from "./styles";

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
  quantity: number;
  handleInputNumber: (num: number) => void; 
}

export function InputNumberButton({
  quantity,
  handleInputNumber,
  ...rest
}: InputNumberProps) {
  function handleMinusValue() {
    const val = quantity - 1;
    if (val >= 1) { 
      handleInputNumber(val);
    }
  }

  function handlePlusValue() {
    const val = quantity + 1;
    if (val <= 100) { 
      handleInputNumber(val);
    }
  }

  return (
    <ButtonNumberContainer>
      <button type="button" onClick={handleMinusValue}>
        −
      </button>
      <input
        type="number"
        value={quantity}
        min="1"
        max="100"
        onChange={(e) => handleInputNumber(Number(e.target.value))}
        {...rest}
      />
      <button type="button" onClick={handlePlusValue}>
        +
      </button>
    </ButtonNumberContainer>
  );
}
