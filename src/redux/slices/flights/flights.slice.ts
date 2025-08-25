import { Flight } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const FlightsSlice = createSlice({
  name: "flights",
  initialState: null as Flight[] | null,
  reducers: {
    commitFlights(_state, action: PayloadAction<Flight[] | null>) {
      return action.payload;
    },
  },
});

export const { commitFlights } = FlightsSlice.actions;

export default FlightsSlice.reducer;
