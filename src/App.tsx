import { useState } from "react"
import { NewCustomer } from "./components/new-customer";
import { AllCustomerModal } from "./components/all-customer-modal";

export function App() {

 const [ openRegister, setOpenRegister ] = useState(false);

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      {openRegister ? (
          <NewCustomer 
            setOpenRegister={setOpenRegister}
          />
      ) : (
        <AllCustomerModal 
          setOpenRegister={setOpenRegister}
        />
      )}
    </div>
  )
};
