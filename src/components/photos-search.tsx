import InputText from "./inpux-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";
import { debouce } from "../helpers/utils";

export default function PhotosSearch() {
  const [inputValue, setInputValue] = React.useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = React.useCallback(
    debouce((value: string) => console.log("Valor com debounce", value), 200),
    [],
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
