import createAsyncSlice from "./util/createAsyncSlice.js";
import { GET_LIST } from "../api.js";

const slice = createAsyncSlice({
    name: "billingCyclesLista",
    fetchConfig: GET_LIST
});

export const fetchList = slice.asyncActions;
export default slice.reducer;
