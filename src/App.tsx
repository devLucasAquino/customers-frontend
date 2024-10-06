import { AllCustomerModal } from "./components/all-customer-modal"


export function App() {


  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      
      <AllCustomerModal />

      <div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg border-black border-[3px] px-8 py-3 text-3xl">
          Cadastrar
        </button>
      </div>
    </div>
  )
};
