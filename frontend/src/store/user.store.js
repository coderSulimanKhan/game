import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const signup = createAsyncThunk("users/signup", async (data, { rejectWithValue }) => {
  try {
    const res = await fetch("/v1/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const response = await res.json();
    if (!response?.success) {
      return toast.error(response?.message);
    };
    toast.success(response?.message);
    return response.data;
  } catch (error) {
    return rejectWithValue({ message: error?.message });
  }
});

const login = createAsyncThunk("users/login", async (data, { rejectWithValue }) => {
  try {
    const res = await fetch("/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const response = await res.json();
    if (!response?.success) {
      return toast.error(response?.message);
    };
    toast.success(response?.message);
    return response.data;
  } catch (error) {
    return rejectWithValue({ message: error?.message });
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, state => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action?.payload));
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action?.payload));
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
  }
});

export { signup, login };
export default userSlice.reducer;