import "bootstrap/dist/css/bootstrap.min.css";
import BookstoreNavbar from "../components/BookstoreNavbar";
import BookstoreFooter from "../components/BookstoreFooter";
import Welcome from "../components/Welcome";
import { Container } from "react-bootstrap";
import AllTheBooks from "../components/AllTheBooks";

function App() {
  return (
    <Container
      fluid={true}
      className="d-flex flex-column p-0 min-vh-100"
      style={{ backgroundColor: "#76583c" }}
    >
      <header>
        <BookstoreNavbar></BookstoreNavbar>
      </header>
      <main className="flex-grow-1 d-flex flex-column justify-content-center align-items-start">
        <Welcome
          alertClassName="w-75 mt-2 text-light border-white"
          alertMessage="Welcome to the Bookstore!"
        />
        <AllTheBooks />
      </main>
      <footer>
        <BookstoreFooter />
      </footer>
    </Container>
  );
}

export default App;
