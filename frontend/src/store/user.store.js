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
      return rejectWithValue({ message: response?.message || "Signup failed" });
    };
    return response;
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
      return rejectWithValue({ message: response?.message || "Login failed" });
    };
    return response;
  } catch (error) {
    return rejectWithValue({ message: error?.message });
  }
});

const getRank = createAsyncThunk("users/rank", async (id, { rejectWithValue }) => {
  try {
    const res = await fetch("/v1/users/rank/" + id);
    const response = await res.json();
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const logout = createAsyncThunk("users/logout", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch("/v1/users/logout");
    const response = await res.json();
    if (res.ok) return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const upgradeCastle = createAsyncThunk("users/castle/upgrade", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch("/v1/users/castle/upgrade");
    const response = await res.json();
    if (!res.ok) {
      return rejectWithValue(response);
    };
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const upgradeTrain = createAsyncThunk("users/train/upgrade", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch("/v1/users/train/upgrade");
    const response = await res.json();
    if (!res.ok) {
      return rejectWithValue(response);
    };
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const upgradeTech = createAsyncThunk("users/tech/upgrade", async (_, { rejectWithValue }) => {
  try {
    const res = await fetch("/v1/users/tech/upgrade");
    const response = await res.json();
    if (!res.ok) {
      return rejectWithValue(response);
    };
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const buyTroops = createAsyncThunk("users/troops/buy", async (data, { rejectWithValue }) => {
  try {
    const res = await fetch("/v1/users/troops/buy", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const response = await res.json();
    if (!res.ok) {
      return rejectWithValue(response);
    };
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const sellTroops = createAsyncThunk("users/troops/sell", async (data, { rejectWithValue }) => {
  try {
    const res = await fetch("/v1/users/troops/sell", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const response = await res.json();
    if (!res.ok) {
      return rejectWithValue(response);
    };
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    rank: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      // signup
      .addCase(signup.pending, state => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
        toast.success(action?.payload?.message);
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
      // login
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
        toast.success(action.payload.message);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
      // rank
      .addCase(getRank.fulfilled, (state, action) => {
        state.rank = action.payload;
      })
      // logout
      .addCase(logout.pending, state => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
        toast.success(action?.payload?.message);
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
      // upgrade castle
      .addCase(upgradeCastle.pending, state => {
        state.loading = true;
      })
      .addCase(upgradeCastle.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
      })
      .addCase(upgradeCastle.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
      // upgrade train
      .addCase(upgradeTrain.pending, state => {
        state.loading = true;
      })
      .addCase(upgradeTrain.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
      })
      .addCase(upgradeTrain.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
      // upgrade tech
      .addCase(upgradeTech.pending, state => {
        state.loading = true;
      })
      .addCase(upgradeTech.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
      })
      .addCase(upgradeTech.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
      // buy troops
      .addCase(buyTroops.pending, state => {
        state.loading = true;
      })
      .addCase(buyTroops.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
        toast.success(action.payload.message);
      })
      .addCase(buyTroops.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
      // sell troops
      .addCase(sellTroops.pending, state => {
        state.loading = true;
      })
      .addCase(sellTroops.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action?.payload?.data;
        toast.success(action.payload.message);
      })
      .addCase(sellTroops.rejected, (state, action) => {
        state.loading = false;
        toast.error(action?.payload?.message);
      })
  }
});

export { signup, login, getRank, logout, upgradeCastle, upgradeTrain, upgradeTech, buyTroops, sellTroops };
export default userSlice.reducer;