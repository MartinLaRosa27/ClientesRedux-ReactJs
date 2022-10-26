import { Navbar } from "./components/Navbar";
import { UserList } from "./components/UserList";
// REDUX
import { Provider } from "react-redux";
import store from "./store";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <UserList />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
