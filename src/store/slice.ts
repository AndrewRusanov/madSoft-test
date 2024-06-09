import { createSlice } from "@reduxjs/toolkit";

type State = {
  progress: number;
  answers: { [key in number]: string | string[] };
};

const initialState: State = {
  progress: 0,
  answers: {},
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setProgress: (state, action) => {
      state.progress = action.payload;
    },
    setAnswer: (state, action) => {
      state.answers[action.payload.questionId] = action.payload.answer;
    },
  },
});

export const { setAnswer, setProgress } = testSlice.actions;

export default testSlice.reducer;
