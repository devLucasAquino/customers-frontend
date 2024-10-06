import { useState } from "react"
import { NewCustomer } from "./components/new-customer";
import { AllCustomerModal } from "./components/all-customer-modal";

export function App() {

 const [ openRegister, setOpenRegister ] = useState(false);


  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      {openRegister ? (
          <NewCustomer />
      ) : (
        <AllCustomerModal />
      )}

      <div>
        {openRegister ? (
          <button
            onClick={() => setOpenRegister(false)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg border-black border-[3px] px-8 py-3 text-3xl"
          >
            Cadastrar
          </button>
        ) : (
          <button 
            onClick={() => setOpenRegister(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg border-black border-[3px] px-8 py-3 text-3xl">
            Novo Cliente
          </button>
        )}
      </div>
    </div>
  )
};
