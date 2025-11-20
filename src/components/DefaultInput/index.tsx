import React from "react";

interface DefaultInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

const DefaultInput: React.FC<DefaultInputProps> = ({ placeholder, ...props }) => {
    
    return (
        <div className="flex justify-center p-2">
            <input {...props} placeholder={placeholder}  className="text-center bg-gray-100 rounded-lg border border-gray-400 p-1"/>
        </div>
    );
};

export default DefaultInput;