import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  login: [],
  wishlist: [],
  historyBook: [],
};

export const loginUser = createAsyncThunk('profile/loginUser', async ({ username, password, redirect, notFound }) => {
  try {
    if (username === 'hacktiv8' && password === 'ks05') {
      redirect(true);
      return { name: 'James Smith', email: 'jamessmith@gmail.com', phoneNumber: '02456982' };
    }
    notFound(true);
  } catch (error) {
    throw error(error);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    wishlistAdded: (state, action) => {
      const exist = state.wishlist.find((item) => item.name === action.payload.item.name);
      if (!exist) {
        state.wishlist.push(...action.payload);
      }
    },
    changeProfile: (state, action) => {
      state.login = action.payload;
    },
    bookingAdded: (state, action) => {
      state.historyBook.push(...action.payload);
    },
    logout: (state, action) => {
      state.login = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.login = action.payload;
    });
  },
});

export const { logout, bookingAdded, changeProfile, wishlistAdded } = profileSlice.actions;
export default profileSlice.reducer;
