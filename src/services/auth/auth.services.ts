import axios from "axios";
import { api } from "../api";
import type { LoginUserInput, RegisterUserInput } from "./auth.schemas";


const loginService = async (userInput: LoginUserInput) => {

    const res = await axios.post(`${api}/auth/login`, userInput);
    if (!res) return { error: "Erro ao realizar login" };

    return res.data;
};

const registerService = async (userInput: RegisterUserInput) => {
    const res = await axios.post(`${api}/auth/register`, userInput);
    if(!res) return { error: "Erro ao realizar cadastro"};

    return res.data;
};


export { loginService, registerService };