import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/reducers/configureStore";
import { PersistGate } from "redux-persist/integration/react";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
          {/* <AppLogo/>
          <App/> */}
          {/* <Switch>
            <Route path="/" exact component={App} />
            <Route path="/search" exact component={App} />
            <Route path="/about" component={About} />
            <Route path="/movie/:id" component={MovieView} />
            <Route path="*" component={Page404} />
          </Switch> */}
        </PersistGate>
      </Provider>
    );
  }
}

export default MyApp;
