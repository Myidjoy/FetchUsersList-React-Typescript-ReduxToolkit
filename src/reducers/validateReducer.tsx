import { createSlice } from '@reduxjs/toolkit';

type Validate = {
  validate: boolean
}
const initialState: Validate = {
  validate: false
};

const validateSlice = createSlice({
  name: 'validate',
  initialState,
  reducers: {
    changeValidate(state){
      state.validate = !state.validate;
    }
  }
});

export const {changeValidate} = validateSlice.actions;

export default validateSlice.reducer;