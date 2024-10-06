import { useState } from "react";
import { api } from "../lib/axios";
import { CustomSelect } from "./custom-select";
import { ArrowLeft } from "lucide-react";

interface NewCustomerProps{
  findAllCustomers: () => void;
  setOpenRegister: (e: boolean) => void;
}

export function NewCustomer({
  setOpenRegister,
  findAllCustomers,
}: NewCustomerProps){

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ status, setStatus ] = useState(true);

  async function registerCustomer(){
    await api.post(`/customer`, {
      name,
      email,
      status,
    })
    .then(() => console.log("cadastrado"))
    .catch((err) => console.log(err))
   };

   function handleClick(){
    if(name === "" || email === "") return
    registerCustomer();
    findAllCustomers();
    setOpenRegister(false);
   };

   
    return(
      <>
        <div className="h-auto w-1/3 border-2 py-2 bg-white rounded-lg border-gray-800">
          <h2 className="text-center font-medium text-2xl mb-3">Cadastre um novo cliente</h2>
          <div className="flex flex-col gap-2 mx-5">
            <label>Nome: </label>
            <input 
              type="text" 
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-black focus:outline-none focus:border-[3px] rounded-md"/>
            <label>Email: </label>
            <input 
              type="email" 
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-black focus:outline-none rounded-md" />
            <div className="flex justify-center">
              <CustomSelect 
                setStatus={setStatus}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-5">
        <button
          onClick={() => setOpenRegister(false)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg border-black border-[3px] px-8 py-3 text-3xl"
        >
          <ArrowLeft className="size-8"/>
        </button>
        <button
        onClick={handleClick}
        className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg border-black border-[3px] px-8 py-3 text-3xl"
      >
        Cadastrar
      </button>
        </div>
      </>
    )
};