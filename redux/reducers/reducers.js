import { combineReducers } from "redux";
import {
  allRoomsReducer,
  newRoomReducer,
  roomReducer,
  roomDetailsReducer,
  newReviewReducer,
  checkReviewReducer,
  roomReviewsReducer,
  reviewReducer,
} from "./roomReducers";
import {
  authReducer,
  userReducer,
  forgotPasswordReducer,
  loadedUserReducer,
  allUsersReducer,
  userDetailsReducer,
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
  roomReviews: roomReviewsReducer,
  review: reviewReducer,
  auth: authReducer,
  user: userReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  forgotPassword: forgotPasswordReducer,
  loadedUser: loadedUserReducer,
  checkBooking: checkBookingReducer,
  bookedDates: bookedDatesReducer,
  bookings: bookingsReducer,
  booking: bookingReducer,
  bookingDetails: bookingDetailsReducer,
});

export default reducer;
