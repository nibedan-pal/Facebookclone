// import Topbar from "../../components/topbar/Topbar";

import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Container fluid style={{ backgroundColor: "rgb(240, 240, 240)" }}>
        <Row>
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6} style={{ padding: "20px 80px 20px 80px" }}>
            <Feed username={user.username} />
          </Col>
          <Col md={3}>
            <Rightbar />
          </Col>
        </Row>
      </Container>
    </>
  );
}
