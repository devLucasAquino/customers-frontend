import { useState } from "react"
import { AllCustomerModal } from "./components/all-customer-modal"
import { CustomerSelect } from "./components/customer-select";


export function App() {

 const [ openRegister, setOpenRegister ] = useState(false);


  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      {openRegister ? (
        <div className="h-auto w-1/3 border-2 py-2 bg-white rounded-lg border-gray-800">
          <h2 className="text-center font-medium text-2xl mb-3">Cadastre um novo cliente</h2>
          <div className="flex flex-col gap-2 mx-5">
            <label>Nome: </label>
            <input type="text" className="border-2 border-black focus:outline-none focus:border-[3px] rounded-md"/>
            <label>Email: </label>
            <input type="email" className="border-2 border-black focus:outline-none rounded-md" />
            <div className="flex justify-center">
              <CustomerSelect />
            </div>
          </div>
        </div>
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
