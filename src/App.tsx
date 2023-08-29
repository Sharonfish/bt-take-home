import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/Container";
import Home from "./views/Home";
import NavigationBar from "./components/NavigationBar";
import { Provider } from "react-redux";
import Browse from "./views/Browse";
import Profile from "./views/Profile";
import store from "./lib/store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavigationBar />

        <Container>
          <Routes>
            <Route index element={<Home />} />
            <Route path="browse" element={<Browse />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}
