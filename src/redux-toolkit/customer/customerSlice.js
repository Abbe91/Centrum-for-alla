import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "info@allacentrum.se",
  phone: "07000000",
  business: "Centrum för alla",
  adress: "hella Sverige",
  zip: "12345",
  city: "Stockholm",
  coords: { lat: 57.71674387891259, lng: 11.947577329191638 },
  weatherData: [],
  searchTerms: [
    "Webbdesign",
    "Sökmotoroptimering ",
    "Digital marknadsföring",
    "Sociala medier hantering",
    "E-postmarknadsföring",
    "PPC-annonsering (Pay-per-click)"
  ]
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setWeatherData: (state, { payload }) => {
      state.weatherData = payload;
    }
  }
});
export const { setWeatherData } = customerSlice.actions;
export const getCustomerData = (state) => state.customer;
export default customerSlice.reducer;
