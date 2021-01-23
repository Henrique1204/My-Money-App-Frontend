const URL_BASE_API = "http://localhost:3003/api";
const URL_BASE_OAPI = "http://localhost:3003/oapi";

export const GET_SUMMARY = (token) => ({
    url: `${URL_BASE_API}/billingCycles/summary`,
    options: {
        method: "GET",
        headers: {
            "Authorization": token
        }
    }
});

export const GET_LIST = (token) => ({
    url: `${URL_BASE_API}/billingCycles`,
    options: {
        method: "GET",
        headers: {
            "Authorization": token
        }
    }
});

export const POST_CYCLE = (body, token) => ({
    url: `${URL_BASE_API}/billingCycles`,
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(body)
    }
});

export const PUT_CYCLE = (body, id, token) => ({
    url: `${URL_BASE_API}/billingCycles/${id}`,
    options: {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(body)
    }
});

export const DELETE_CYCLE = (id, token) => ({
    url: `${URL_BASE_API}/billingCycles/${id}`,
    options: {
        method: "DELETE",
        headers: {
            "Authorization": token
        }
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
        body: token
    }
});
