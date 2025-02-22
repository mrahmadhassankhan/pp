import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("aboutUs", "routes/aboutUs/aboutUs.tsx"),
  route("careers", "routes/Carrers/careers.tsx"),
  route("careers/:jobTitle", "routes/Carrers/carrerDetail.tsx"),

  route("blogs", "routes/blogs/blogs.tsx"),
  route("blog/:id", "routes/blogs/singleBlogPost.tsx"),
  route("faqs", "routes/Faqs/faqs.tsx"),
  route(
    "communityGuidelines",
    "routes/CommunityGuidelines/communityGuidelines.tsx"
  ),

  route("contactUs", "routes/contactUs/contactUs.tsx"),
  route("privacyPolicy", "routes/privacy-policy/privacyPolicy.tsx"),
  route(
    "termsAndConditions",
    "routes/termsAndConditions/termsAndConditions.tsx"
  ),

  layout("./routes/auth/authLayout.tsx", [
    route("login", "./routes/auth/login/login.tsx"),
    route("register", "./routes/auth/register/register.tsx"),
  ]),
] satisfies RouteConfig;
