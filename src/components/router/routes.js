import LoginPage from "../../pages/Login";
import AboutPage from "../../pages/About";
import PostsPage from "../../pages/Posts";
import PostsIdPage from "../../pages/Posts[id]";

export const privateRoutes = [
  { id: "2", path: "/about", element: <AboutPage /> },
  { id: "3", path: "/posts", element: <PostsPage /> },
  { id: "4", path: "/posts/:id", element: <PostsIdPage /> },
];

export const publicRoutes = [
  { id: "1", path: "/login", element: <LoginPage /> },
];
