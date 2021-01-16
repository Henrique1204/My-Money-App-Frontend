import React from "react";
// Importando componentes da interface.
import InputList from "./InputList/InputList.js";
// Importando utilitários do redux.
import { useSelector } from "react-redux";

const CreditList = () => {
    // Estados globais.
    const { dados } = useSelector((state) => state.form);
    // Estados locais.
    const [nameCredit, setNameCredit] = React.useState([]);
    const [valueCredit, setValueCredit] = React.useState([]);

    const gerarCampos = (dados) => {
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
                        {gerarCampos()}                        
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
};

export default CreditList;
