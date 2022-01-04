import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import Link from "next/link";
import { Layout, Menu } from "antd";
import { Content } from "antd/lib/layout/layout";
import { store } from "../store";
import { Provider } from "react-redux";
const { Header, Footer } = Layout;

const App = ({ Component }) => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
