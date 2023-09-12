import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./contexts/Pokemon.context";
import Home from "./views/Home";
import Browse from "./views/Browse";
import Profile from "./views/Profile";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/browse", element: <Browse /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

export default function App() {
  return (
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  )
}
