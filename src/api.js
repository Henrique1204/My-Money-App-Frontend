const URL_BASE = "http://localhost:3003/api";

export const GET_SUMMARY = () => ({
    url: `${URL_BASE}/billingCycles/summary`,
    options: {
        method: "GET"
    }
});

export const GET_LIST = () => ({
    url: `${URL_BASE}/billingCycles`,
    options: {
        method: "GET"
    }
});

export const POST_CYCLE = (body) => ({
    url: `${URL_BASE}/billingCycles`,
    options: {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
});

export const PUT_CYCLE = (body, id) => ({
    url: `${URL_BASE}/billingCycles/${id}`,
    options: {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
});

export const DELETE_CYCLE = (id) => ({
    url: `${URL_BASE}/billingCycles/${id}`,
    options: {
        method: "DELETE"
    }
});
