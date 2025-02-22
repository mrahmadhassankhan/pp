import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  layout("./routes/auth/authLayout.tsx", [
    route("login", "./routes/auth/login/login.tsx"),
    route("register", "./routes/auth/register/register.tsx"),
  ]),
] satisfies RouteConfig;
