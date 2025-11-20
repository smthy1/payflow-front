import React, { type ReactNode } from "react";

interface DefaultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const DefaulButton: React.FC<DefaultButtonProps> = ({ children, className, ...props }) => {
    
    return (
        <button
            {...props}
            className={`flex justify-center
                items-center rounded-2xl 
                bg-fuchsia-600 px-6 py-3 font-medium
                hover:cursor-pointer text-white
                hover:bg-fuchsia-800 transition
                ${className}
            `}
        >
            <strong>{children}</strong>
        </button>
    );
};

export default DefaulButton;