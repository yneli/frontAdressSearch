import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Main } from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <Main/>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
);

