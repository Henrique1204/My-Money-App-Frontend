const URL_BASE_API = "http://localhost:3003/api";
const URL_BASE_OAPI = "http://localhost:3003/oapi";

export const GET_SUMMARY = () => ({
    url: `${URL_BASE_API}/billingCycles/summary`,
    options: {
        method: "GET"
    }
});

export const GET_LIST = () => ({
    url: `${URL_BASE_API}/billingCycles`,
    options: {
        method: "GET"
    }
});

export const POST_CYCLE = (body) => ({
    url: `${URL_BASE_API}/billingCycles`,
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
});

export const PUT_CYCLE = (body, id) => ({
    url: `${URL_BASE_API}/billingCycles/${id}`,
    options: {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
});

export const DELETE_CYCLE = (id) => ({
    url: `${URL_BASE_API}/billingCycles/${id}`,
    options: {
        method: "DELETE"
    }
});

export const LOGIN = (body) => ({
    url: `${URL_BASE_OAPI}/login`,
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
});

export const SIGNUP = (body) => ({
    url: `${URL_BASE_OAPI}/login`,
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
});

export const VALIDAR_TOKEN = (token) => ({
    url: `${URL_BASE_OAPI}/validarToken`,
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(token)
    }
});
