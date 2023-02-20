import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ProductsReducer, { productsFetch } from "./Features/ProductSlice";
import { productsApi } from "./Features/ProductsAPI";
import CartReducer from "./Features/CartSlice";

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    cart: CartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

const root = ReactDOM.createRoot(document.getElementById("root"));
const authURL = "https://adarshmahe.github.io/playstation/";
root.render(
  <Auth0Provider
    domain='dev-kzrq21p3eg0gzia1.us.auth0.com'
    clientId='SG9SamEysU2ljCa6DgnzGLzaeqUOT4T8'
    redirectUri={authURL}
    // redirectUri={window.location.origin}
  >
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Auth0Provider>
);
<script src='bundle.js'></script>;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
