import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import Link from "next/link";
import { Layout, Menu } from "antd";
const { Header, Footer } = Layout;

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>CodingTest_Collection</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
        <link rel="stylesheet" href="../public/index.css" />
      </Head>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="gohome">
            <Link href="/">
              <a style={{ color: "white" }}>홈으로</a>
            </Link>
          </Menu.Item>

          <li
            style={{ display: "inline", color: "white", textAlign: "center" }}
          ></li>
        </Menu>
      </Header>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default App;
