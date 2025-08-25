import { Booking, Flight } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const BookingsSlice = createSlice({
  name: "bookings",
  initialState: null as Booking[] | null,
  reducers: {
    commitBookings(_state, action: PayloadAction<Booking[] | null>) {
      return action.payload;
    },
  },
});

export const { commitBookings } = BookingsSlice.actions;

export const BookingsReducer = BookingsSlice.reducer;
