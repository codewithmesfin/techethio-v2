
import React from "react";

interface PROPS {
    placeholder?: string
    label?: string
    value?: string
    type?: string
    error?: boolean
    success?: boolean
    isTextArea?: boolean;
    rows?: number;
    onchange: any
}

export default function Input({ label, isTextArea, placeholder, rows ,type}: PROPS) {
    return <div>
        <div>
            {label && <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label} </label>}
            {
                isTextArea ?
                    <textarea
                        className="w-full bg-white border border-gray-300 
                          text-gray-900  
                          text-sm rounded-lg focus:ring-0 focus:outline-none block  p-2.5"
                        placeholder={placeholder}
                        rows={rows}
                    />
                    : <input
                        type={type} id="first_name"
                        className="bg-white border focus:ring-0 focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " 
                        placeholder={placeholder} />}
        </div>
    </div>
}