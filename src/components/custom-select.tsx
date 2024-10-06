import { useState } from "react";

interface CustomSelectProps{
    setStatus: (e: boolean) => void;
};

export function CustomSelect({
    setStatus,
}: CustomSelectProps){
    const [selectedOption, setSelectedOption] = useState("ativo");
    const [ isOpen, setIsOpen ] = useState(false);

    const handleClick = (value: string) => {
        setSelectedOption(value);
        setStatus((value === "ativo" ? (true) : (false)))
        setIsOpen(false);
    };

    return(
        <div className="relative w-1/4">
            <div 
                className="border border-gray-300 rounded-lg p-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
                >
                {selectedOption === "ativo" ? (
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                    Ativo
                </div>
                ) : (
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                    Desativo
                </div>
                )}
            </div>
            {isOpen && (
                <div className="absolute left-0 top-full mt-2 w-full border border-gray-300 bg-white rounded-lg shadow-lg">
                    <div
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleClick("ativo")}
                    >
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2" />
                    Ativo
                    </div>
                    <div
                    className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleClick("desativo")}
                    >
                    <div className="w-3 h-3 rounded-full bg-red-500 mr-2" />
                    Desativo
                    </div>
                </div>
            )}
        </div>
    )
};