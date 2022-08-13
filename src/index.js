import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from './storeContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntierTreee = (state) => {

    root.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

rerenderEntierTreee(store.getState());
store.subscribe(() => {
    rerenderEntierTreee(store.getState())
});