import { createSlice } from '@reduxjs/toolkit'
import { ILoginState } from '../interfaces/interfaces';



const initialState: ILoginState = {
  login: 'admin',
  password: 'admin'
  
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {}
})

export default loginSlice.reducer;