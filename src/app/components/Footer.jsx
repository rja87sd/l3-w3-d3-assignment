import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
  return (
    <footer
      className="fixed-bottom flex justify-content-center">
      <Navbar bg="body" expand="lg" variant="dark">
        <Container>
          <div>
            {/* Add your custom footer content here */}
            <p>
              &copy; 2024 Ryan Arnold. All rights reserved. |{" "}
              <a href="#">Twitter</a> | <a href="#">LinkedIn</a>{" "}
              {/* Anchor tag without an href attribute */}
            </p>
          </div>
        </Container>
      </Navbar>
    </footer>
  );
}
