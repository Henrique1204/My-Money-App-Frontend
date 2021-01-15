import React from "react";

const useFetch = () => {
    const [dados, setDados] = React.useState(null);
    const [erro, setErro] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;

        try {
            setErro(null);
            setLoading(true);

            response = await fetch(url, options);
            json = await response.json();

            if (response.ok === false) throw new Error(json.message);
        } catch(erro) {
            json = null;
            setErro(erro.message);
        } finally {
            setDados(json);
            setLoading(false);
            return { response, json };
        }

    }, []);

    return { dados, erro, loading, request };
};

export default useFetch;
