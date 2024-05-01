import { createContext, useContext, useState } from "react";

const useInputUserName = (params: type) => {
   const [inputValue, setInputValue] = useState<string>('');
   const userContextInput = createContext<string>('user');
   return { userContextInput, inputValue, setInputValue }

}
export default useInputUserName;