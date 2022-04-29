import { createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import { IInitialState, IUser } from '../interfaces/interfaces';
import axios from 'axios'

const initialState: IInitialState = {
  users: [],
  status: '',
}

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  return response.data
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // addUser(state) {      
    //     state.users.push({id: Date.now(), name: 'Vasya', age: 26}); 
    // }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
        state.status = 'succeeded'
        // Add any fetched posts to the array
        state.users = state.users.concat(action.payload)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        console.log(action.error.message)
      })
  }
})

// export const {addUser} = userSlice.actions;
export default userSlice.reducer;