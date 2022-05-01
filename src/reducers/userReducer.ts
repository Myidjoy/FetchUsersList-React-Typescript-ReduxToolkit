import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { IInitialState, IUser } from '../interfaces/interfaces';
import axios from 'axios';

const initialState: IInitialState = {
  users: [],
  status: '',
  searchingUsers: [],
  findAttribute: 'name'
};

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<IUser>) {
      state.users.push(action.payload);
    },
    deleteUser(state, action: PayloadAction<number>) {
      state.users = state.users.filter(user => user.id !== action.payload);
      state.searchingUsers = state.searchingUsers.filter(user => user.id !== action.payload);
    },
    filterInUsers(state, action: PayloadAction<IUser[]>) {
      state.searchingUsers = action.payload;
    },
    changeFindAttribute(state, action: PayloadAction<string>) {
      state.findAttribute = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.status = 'succeeded';
        state.users = state.users.concat(action.payload);
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'failed';
      });
  }
});

export const {addUser, deleteUser, filterInUsers, changeFindAttribute} = userSlice.actions;
export default userSlice.reducer;