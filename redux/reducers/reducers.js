import { combineReducers } from "redux";
import {
  allRoomsReducer,
  newRoomReducer,
  roomReducer,
  roomDetailsReducer,
  newReviewReducer,
  checkReviewReducer,
} from "./roomReducers";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  loadedUserReducer,
} from "./userReducers";
import {
  checkBookingReducer,
  bookedDatesReducer,
  bookingsReducer,
  bookingDetailsReducer,
  bookingReducer,
} from "./bookingReducers";

const reducer = combineReducers({
  allRooms: allRoomsReducer,
  newRoom: newRoomReducer,
  room: roomReducer,
  roomDetails: roomDetailsReducer,
  newReview: newReviewReducer,
  checkReview: checkReviewReducer,
  auth: authReducer,
  user: userReducer,
  forgotPassword: forgotPasswordReducer,
  loadedUser: loadedUserReducer,
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingsReducer,
  booking: bookingReducer,
  bookingDetails: bookingDetailsReducer,
});

export default reducer;
