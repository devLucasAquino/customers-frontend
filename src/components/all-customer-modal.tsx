import { Trash2, User } from "lucide-react"
import { api } from "../lib/axios"
import { useEffect } from "react";
import { customer } from "../App";

interface AllCustomerModalProps{
  allCustomers: customer[];
  findAllCustomers: () => void;
  setOpenRegister: (e: boolean) => void;
}

export function AllCustomerModal({
  allCustomers,
  setOpenRegister,
  findAllCustomers,
}: AllCustomerModalProps){

    useEffect(() => {
        findAllCustomers();
    }, []);

    async function deleteCustomer(id: string) {
        await api.delete(`/customer?id=${id}`)
        .then(() => findAllCustomers())
        .catch((err) => console.log(err))
    };
      

    return(
      <>
        <div className="h-auto w-1/3 border-2 py-2 bg-white rounded-lg border-gray-800">
        <h2 className="text-center font-medium text-2xl mb-3">Clientes</h2>
        <div className="flex flex-col gap-2 mx-5 max-h-[360px] overflow-y-scroll">
          {allCustomers.length > 0 && (
            allCustomers.map((customer) => (
              <div 
                className=" bg-gray-100 hover:bg-gray-200 rounded-md px-3"
                key={customer.id}
              >
                <div className="py-2">
                  <div className="flex justify-between">
                    <User />
                    <button onClick={() => deleteCustomer(customer.id)}>
                      <Trash2 className="text-red-600"/>
                    </button>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col text-lg">
                      <h2>Nome: <strong>{customer.name.toUpperCase()}</strong></h2>
                      <h2>Email: <strong>{customer.email}</strong></h2>
                    </div>
                    <div className="flex justify-end items-end">
                      <div className="flex justify-end items-center gap-2 text-zinc-600 text-base">
                        <div className={`size-3 rounded-full ${customer.status ? ("bg-green-500"): ("bg-red-500")} `}/>
                        {customer.status ? (<h4>ativo</h4>) : (<h4>desativo</h4>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <button 
      onClick={() => setOpenRegister(true)}
      className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg border-black border-[3px] px-8 py-3 text-3xl">
      Novo Cliente
    </button>
    </>
    )
};