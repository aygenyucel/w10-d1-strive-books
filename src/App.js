import { Col, Container, Row } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookList from "./components/BookList";
// import CommentArea from "./components/CommentArea";
import { Component } from "react";

class App extends Component {
  state = {
    selectedBookAsin: "",
  };

  changeSelectedBookAsin = (newBookAsin) => {
    this.setState({ selectedBookAsin: newBookAsin });
    console.log(
      "changed book asin inside app.js:",
      this.state.selectedBookAsin
    );
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col xs={6}>
              <BookList changeSelectedBookAsin={this.selectedBookAsin} />
            </Col>
            <Col xs={6}>
              <div>fkdlsjfh</div>
              {/* <CommentArea /> */}
            </Col>
          </Row>
        </Container>
        <BookList />
      </div>
    );
  }
}

export default App;
