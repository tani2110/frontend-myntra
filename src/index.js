import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./mainApp/pages/App";
// import P_App from "./mainApp/pages/P_App";
import HeaderTop from "./mainApp/components/HeaderTop";
import Calculator from "./mainApp/pages/calculator";
import Signup from "./mainApp/pages/signup";
import Login from "./mainApp/pages/login";
import Triangle from "./mainApp/pages/triangle";
import Result from "./mainApp/pages/results";
import Cart from "./mainApp/pages/Cart";
// import Sell from "./mainApp/pages/sell";
// import Chat from "./mainApp/pages/Chat";
import Profile from "./mainApp/pages/Profile";
import { Provider } from "react-redux";
import store from "./mainApp/pages/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderTop />}>
      <Route index element={<App />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/products/:name" element={<P_App />} />
      <Route path="/products/id/:id" element={<P_App />} /> */}
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/sell" element={<Sell />} /> */}
      <Route path="/calculator" element={<Calculator />} />
      {/* <Route path="/chat" element={<Chat />} /> */}
      <Route path="/triangle" element ={<Triangle/>}/>
      <Route path="/result" element ={<Result/>}/>
    </Route>
  )
);
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);
