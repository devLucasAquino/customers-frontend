import { CustomSelect } from "./custom-select";

export function NewCustomer(){
    return(
        <div className="h-auto w-1/3 border-2 py-2 bg-white rounded-lg border-gray-800">
          <h2 className="text-center font-medium text-2xl mb-3">Cadastre um novo cliente</h2>
          <div className="flex flex-col gap-2 mx-5">
            <label>Nome: </label>
            <input type="text" className="border-2 border-black focus:outline-none focus:border-[3px] rounded-md"/>
            <label>Email: </label>
            <input type="email" className="border-2 border-black focus:outline-none rounded-md" />
            <div className="flex justify-center">
              <CustomSelect />
            </div>
          </div>
        </div>
    )
};