import { Annoucement } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const AnnouncementsSlice = createSlice({
  name: "announcement",
  initialState: [] as Annoucement[],
  reducers: {
    commitAnnouncements(_state, action: PayloadAction<Annoucement[]>) {
      return action.payload;
    },
    updateAnnouncements(state, action: PayloadAction<Annoucement | null>) {
      if (!action.payload) return state;
      return [action.payload, ...state];
    },
  },
});

export const { commitAnnouncements, updateAnnouncements } =
  AnnouncementsSlice.actions;

export const AnnouncementsReducer = AnnouncementsSlice.reducer;
