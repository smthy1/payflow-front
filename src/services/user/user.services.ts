import api from "../api";


const getUserBalance = async() => {
    const res = await api.get("/user/balance");
    if (!res) return { error: "Erro ao buscar dados" };

    return res.data;
};


export { getUserBalance };