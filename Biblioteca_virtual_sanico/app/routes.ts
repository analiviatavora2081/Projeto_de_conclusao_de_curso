import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("aventura", "routes/aventura.tsx"),
  route("fantasia", "routes/fantasia.tsx"),
  route("kids", "routes/kids.tsx"),
  route("login", "routes/login.tsx"),
  route("romance", "routes/romance.tsx"),
  route("suspense", "routes/suspense.tsx"),
  route("terror", "routes/terror.tsx"),
] satisfies RouteConfig;