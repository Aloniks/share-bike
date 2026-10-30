import { Link, useLocation } from "react-router";

export default function MenuNav() {
  const location = useLocation();

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: (active: boolean) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#FFFFFF" : "#1C2C2D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: "Search",
      path: "/search",
      icon: (active: boolean) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#FFFFFF" : "#1C2C2D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      name: "Chat",
      path: "/chat",
      icon: (active: boolean) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#FFFFFF" : "#1C2C2D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      name: "Your bike",
      path: "/my-bikes",
      icon: (active: boolean) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#FFFFFF" : "#1C2C2D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="18.5" cy="17.5" r="3.5" />
          <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h4" />
        </svg>
      ),
    },
    {
      name: "Profile",
      path: "/profile",
      icon: (active: boolean) => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={active ? "#FFFFFF" : "#1C2C2D"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#F3EEE9",
        padding: "8px 12px 16px 12px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxSizing: "border-box",
        borderTopLeftRadius: "16px",
        borderTopRightRadius: "16px",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.05)",
      }}
    >
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.name}
            to={item.path}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              backgroundColor: isActive ? "#253A3C" : "transparent",
              color: isActive ? "#FFFFFF" : "#1C2C2D",
              padding: isActive ? "6px 10px" : "4px 4px",
              borderRadius: isActive ? "20px" : "0px",
              transition: "all 0.2s ease-in-out",
            }}
          >
            {item.icon(isActive)}
            <span
              style={{
                fontSize: "10px",
                marginTop: "3px",
                fontWeight: isActive ? "600" : "400",
                fontFamily: "sans-serif",
              }}
            >
              {item.name}
            </span>
          </Link>
        );
      })}
    </div>
  );
}