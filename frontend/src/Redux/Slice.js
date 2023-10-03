import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import APIS from "../../services/apiService";

const initialState = {
  form: null,
  userName: null,
};

export const createUsername = createAsyncThunk(
  "createUsername",
  async (data) => {
    const response = await APIS.addUserName(data);
    return response.data;
  }
);
export const createFormData = createAsyncThunk(
  "createFormData",
  async (data) => {
    const response = await APIS.createForm(data);
    return response.data;
  }
);
export const updateCurrectForm = createAsyncThunk(
  "updateCurrectForm",
  async (data) => {
    const response = await APIS.updateForm(data);
    return response.data;
  }
);
const userSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserForm: (state, action) => {
      state.form = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUsername.fulfilled, (state, action) => {
      if (action.payload.hasOwnProperty("form")) {
        state.form = action.payload.form;
      } else {
        state.form = null;
      }
    });
    builder.addCase(createFormData.fulfilled, (state, action) => {
      state.form = action.payload;
    });
    builder.addCase(updateCurrectForm.fulfilled, (state, action) => {
      state.form = action.payload;
    });
  },
});

export const { setUserName,setUserForm } = userSlice.actions;

export default userSlice.reducer;
