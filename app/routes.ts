import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("search", "routes/search.tsx"),
    route("my-bikes", "routes/my-bikes.tsx"),
    route("add-bike", "routes/add-bike.tsx"),
    route("add-bike-2", "routes/add-bike-2.tsx"),
] satisfies RouteConfig;
