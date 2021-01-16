import React from "react";
// Importando componentes da interface.
import InputList from "./InputList.js";
// Importando utilitários do redux.
import { useSelector } from "react-redux";

const CreditList = ({ method }) => {
    // Estados globais.
    const { dados } = useSelector((state) => state.form);
    // Estados locais.
    const [nameCredit, setNameCredit] = React.useState([]);
    const [valueCredit, setValueCredit] = React.useState([]);

    const gerarCampos = (dados) => {
        if (dados) {
            return dados.credits.map((credit, i) => (
                <tr key={i}>
                    <td>
                        <InputList
                            useFormConfig={[credit.name]}

                            inputConfig={{
                                name: `name_credit_${i}`,
                                type:"text",
                                readonly: (method === "DELETE")
                            }}

                            setState={setNameCredit}
                        />
                    </td>

                    <td>
                        <InputList
                            useFormConfig={[credit.value, "numero"]}

                            inputConfig={{
                                name:"value_credit",
                                type:"text",
                                readonly: (method === "DELETE")
                            }}

                            setState={setValueCredit}
                        />
                    </td>
                </tr>
            ))
        }

        return (
            <tr>
                <td>
                    <InputList
                        useFormConfig={[""]}

                        inputConfig={{
                            name:"name_credit",
                            type:"text",
                            readonly: false
                        }}

                        setState={setNameCredit}
                    />
                </td>

                <td>
                    <InputList
                        useFormConfig={["", "number"]}

                        inputConfig={{
                            name:"value_credit",
                            type:"text",
                            readonly: false
                        }}

                        setState={setValueCredit}
                    />
                </td>
            </tr>
        )
    }

    return (
        <div>
            <fieldset>
                <legend>Créditos</legend>

                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {gerarCampos(dados)}                        
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
};

export default CreditList;
