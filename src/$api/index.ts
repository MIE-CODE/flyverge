import { UserType } from "@/utils/types";
import AuthRepository from "./auth.module";
import LoginRepository from "./flight.module";
import BookingsRepository from "./booking.module";
import AnnouncementModule from "./announcement.module";
export interface ApiResponse {
  data: { email: string; token: string } | null;
  error?: { message: string } | null;
}
export default {
  auth: AuthRepository(),
  flights: LoginRepository(),
  bookings: BookingsRepository(),
  announcement: AnnouncementModule(),
};
