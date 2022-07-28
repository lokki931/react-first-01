import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntierTreee = (state) => {

    root.render(
        <React.StrictMode>
            <App
                state={state}
                // store={store}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </React.StrictMode>
    );
}

rerenderEntierTreee(store.getState());
store.subscribe(rerenderEntierTreee);