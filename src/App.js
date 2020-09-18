import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Pages
import Books from "./components/Books";
import Bucket from "./components/Bucket";
import store from "./components/redux/store";

import "./App.css";
import Navbar from "./components/utility/Navbar";
const theme = createMuiTheme({
    main: {
        imgFluid: {
            maxWidth: "40%",
            height: "auto",
            borderRadius: 10,
            boxShadow: "0 2px 10px 1px rgba(172, 172, 172, .3)",
        },
        card: {
            boxShadow: "0 2px 10px 1px rgba(172, 172, 172, .4)",
        },
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Navbar />
                        <Container className="container" maxWidth="lg">
                            <Switch>
                                <Route exact path="/" component={Books} />
                                <Route exact path="/bucket" component={Bucket} />
                            </Switch>
                        </Container>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
