import React from "react";
import Link from "next/link";
import { Col, Row } from "antd";

const AppLayout = ({ children }) => {
  return (
    <>
      <Row>
        <Col xs={24} md={4}></Col>
        <Col xs={24} md={16}>
          {children}
        </Col>
        <Col xs={24} md={4}>
          <Link href="https://blog.naver.com/dlaxodud2388">
            <a target="_blank">made by Limwoochan</a>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default AppLayout;
