import api from "../api";
import type { LoginUserInput, RegisterUserInput } from "../../types/AuthSchemas";


const loginService = async (userInput: LoginUserInput) => {

    const res = await api.post("/auth/login", userInput);
    if (!res) return { error: "Erro ao realizar login" };

    return res.data; 
};

const registerService = async (userInput: RegisterUserInput) => {
    const res = await api.post("/auth/register", userInput);
    if(!res) return { error: "Erro ao realizar cadastro"};

    return res.data;
};


export { loginService, registerService };