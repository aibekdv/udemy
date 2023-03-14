import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { $api } from "@/utils/config/base";
import { Status, AuthUser, UserState, AuthLogin } from "./types";

export const SignIn = createAsyncThunk<string, AuthLogin>(
  "user/login",
  async (params, thunkAPI) => {
    try {
      const response = await $api.post("/account/login/", params);
      if (response.status === 200) {
        console.log(response.data);
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response);
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const SignUp = createAsyncThunk<string, any>(
  "user/register",
  async (params: AuthUser, thunkAPI) => {
    try {
      const response = await $api.post("/account/register/", params);
      if (response.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response);
      }
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "user/checkauth",
  async (params: { refresh: string }) => {
    const { data } = await $api.post<{ access: string; refresh: string }>(
      "/account/api/token/refresh/",
      { refresh: params.refresh }
    );
    localStorage.setItem("access", data.access);
  }
);

const initialState: UserState = {
  user: {} as AuthUser,
  isAuth: false,
  status: Status.DEFAULT,
  successMessage: "",
  errorMessage: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // // Extra reducers for signup
    builder.addCase(SignUp.pending, (state) => {
      state.status = Status.LOADING;
      state.successMessage = "";
    });
    builder.addCase(SignUp.rejected, (state, action: any) => {
      state.status = Status.ERROR;
      state.errorMessage = action.payload.email[0] as string;
    });
    builder.addCase(SignUp.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.successMessage = action.payload;
    });
    // // Extra reducers for signin
    builder.addCase(SignIn.pending, (state) => {
      state.status = Status.LOADING;
      state.successMessage = "";
    });
    builder.addCase(SignIn.rejected, (state, action: any) => {
      state.status = Status.ERROR;
      state.errorMessage = action.payload.email[0] as string;
    });
    builder.addCase(SignIn.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.successMessage = action.payload;
    });
    // // Extra reducers for check auth
    builder.addCase(checkAuth.pending, (state) => {
      state.status = Status.LOADING;
    });
    builder.addCase(checkAuth.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(checkAuth.fulfilled, (state) => {
      state.status = Status.SUCCESS;
      state.isAuth = true;
    });
  },
});

// export const { IssuccessMessage } = userSlice.actions;

export default userSlice.reducer;
