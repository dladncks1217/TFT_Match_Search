import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import Link from "next/link";
import { Layout, Menu } from "antd";
import { Content } from "antd/lib/layout/layout";
const { Header, Footer } = Layout;

import reducer from "../reducer";
import rootSaga from "../sagas";

const App = ({ Component }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Head>
        <title>TFT Match</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="gohome">
            <Link href="/">
              <a style={{ color: "white" }}>홈으로</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="Rank">
            <Link href="/Rank">
              <a style={{ color: "white" }}>rank</a>
            </Link>
          </Menu.Item>
          <li
            style={{ display: "inline", color: "white", textAlign: "center" }}
          ></li>
        </Menu>
      </Header>
      <Content>
        <AppLayout>
          <Component />
        </AppLayout>
      </Content>
      <Footer style={{ textAlign: "center", height: 5 }}>Footer</Footer>
    </Layout>
  );
};

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          typeof window !== "undefined" &&
            window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (f) => f
        );
  const store = createStore(reducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);
  return store;
};

export default withRedux(configureStore)(App);
