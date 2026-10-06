import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/home.tsx"),
  route("aventura", "routes/aventura/aventura.tsx"),
  route("fantasia", "routes/fantasia/fantasia.tsx"),
  route("kids", "routes/kids/kids.tsx"),
  route("login", "routes/login/login.tsx"),
  route("romance", "routes/romance/romance.tsx"),
  route("suspense", "routes/suspense/suspense.tsx"),
  route("terror", "routes/terror/Terror.tsx"),
] satisfies RouteConfig;