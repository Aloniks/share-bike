import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("search", "routes/search.tsx"),
    route("my-bikes", "routes/my-bikes.tsx"),
] satisfies RouteConfig;
