import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import runChat from "../../config/gemni";

interface ChatState {
  responseValue: string;
  loading: boolean;
  error: string;
  showResponse: boolean;
  inputValue: string;
}

const initialState: ChatState = {
  responseValue: "",
  loading: false,
  error: "",
  showResponse: false,
  inputValue: "",
};

export const chat = createAsyncThunk(
  "chat/setChat",
  async ({ props }: { props: string }) => {
    const response = await runChat({ props });
    console.log(response);
    return response;
  }
);

export const chstSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    newChat:(state)=>{
        state.showResponse = false;
        state.responseValue = ""
    },
    valueOnClick: (state, action) => {
      state.inputValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(chat.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.showResponse = true;
    })
    builder.addCase(chat.fulfilled, (state, action) => {
        state.loading = false;
        state.responseValue = action.payload;
        state.showResponse = true;
    });
    builder.addCase(chat.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
      state.showResponse = true;
    });
  },
});

export default chstSlice.reducer;

export const { newChat, valueOnClick } = chstSlice.actions;
