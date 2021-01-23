import { GET_SUMMARY } from "../api.js";
import createAsyncSlice from "./util/createAsyncSlice.js";

const slice = createAsyncSlice({
    name: "sumarry",
    fetchConfig: () => GET_SUMMARY(localStorage.getItem("token"))
});

export const fetchSummary = slice.asyncActions;
export default slice.reducer;
