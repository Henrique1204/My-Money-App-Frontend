const URL_BASE = "http://localhost:3003/api";

export const GET_SUMMARY = () => ({
    url: `${URL_BASE}/billingCycles/summary`,
    options: {
        method: "GET"
    }
});

export const GET_LIST = () => ({
    ulr: `${URL_BASE}/billingCycles`,
    options: {
        method: "GET"
    }
});
