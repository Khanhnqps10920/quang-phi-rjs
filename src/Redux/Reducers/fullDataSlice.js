import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myAxios } from "../../Service/axios";

export const getData = createAsyncThunk(
  'product/getProducts',
  async () => {
    const data = await myAxios.get('products')
    const products = data.data
    return products;
  }
)

const fullDataSlice =  createSlice({
  name: "data",
  initialState: {
    data: [],
    loading : false
  },
  extraReducers: (builder) =>{
    builder.addCase(getData.pending, (state) => {
      state.loading = true;
    }).addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
  }
});

export default fullDataSlice.reducer

