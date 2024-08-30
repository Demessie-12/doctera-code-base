import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getAddress } from "../Services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAdress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form , so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that  we are intrestd in
    // payload of the FURLFILED state
    return { position, address };
  }
);

const initialState = {
  username: "",
  position: {},
  address: "",
  status: "idle",
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUsername(state, action) {
      // payload = name
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error =
          "There was a problm getting your address. Make to fill this field!";
      }),
});

export const { updateUsername } = userSlice.actions;

export default userSlice.reducer;
