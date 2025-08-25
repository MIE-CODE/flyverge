export type UserType = {
  email?: string;
  name?: string;
  role?: "user" | "admin";
};

export type Flight = {
  totalSeats: number;
  airline: string;
  flightNumber: number;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  seatsAvailable: number;
  price: number;
  class: string;
  _id: string;
};
export type Booking = {
  _id: string;
  flight: Flight;
  user: string;
  seatNumber: number;
  bookingDate: string;
  status: "pending" | "confirmed" | "cancelled" | string;
};

export type Annoucement = {
  message: string;
  type: "general" | "gate-change" | "delay" | "boarding" | "cancellation";
  priority: "low" | "medium" | "high" | "critical";
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};
