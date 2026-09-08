import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("romance", "routes/romance.tsx"),
  route("fantasia", "routes/fantasia.tsx"),
  route("kids", "routes/kids.tsx"),
] satisfies RouteConfig;