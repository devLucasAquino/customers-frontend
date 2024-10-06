import { useState } from "react"
import { NewCustomer } from "./components/new-customer";
import { AllCustomerModal } from "./components/all-customer-modal";
import { api } from "./lib/axios";

export interface customer{
  id: string;
  name: string;
  email: string;
  status: boolean;
  create_at: Date;
  updated?: Date;
};

export function App() {

 const [ openRegister, setOpenRegister ] = useState(false);
 const [ allCustomers, setAllCustomers ] = useState<customer[]>([]);
    
    async function findAllCustomers(){
        await api.get(`/customers`)
        .then((json) => {
            const data = json.data;
            if(data !== ""){
                setAllCustomers(data.map((item: customer) => ({
                    id: item.id,
                    name: item.name,
                    email: item.email,
                    status: item.status,
                    created_at: item.create_at,
                    updated: item.updated,
                })));
            };
        })
    };

  return (
    <div className="flex flex-col gap-3 justify-center items-center h-screen">
      {openRegister ? (
          <NewCustomer 
            findAllCustomers={findAllCustomers}
            setOpenRegister={setOpenRegister}
          />
      ) : (
        <AllCustomerModal 
          allCustomers={allCustomers}
          setOpenRegister={setOpenRegister}
          findAllCustomers={findAllCustomers}
        />
      )}
    </div>
  )
};
