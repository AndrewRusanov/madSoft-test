import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    setAnswer: (
      state,
      action: PayloadAction<{ questionId: number; answer: string | string[] }>
    ) => {
      state.answers[action.payload.questionId] = action.payload.answer;
    },
  },
});

export const { setAnswer, setProgress } = testSlice.actions;

export default testSlice.reducer;
