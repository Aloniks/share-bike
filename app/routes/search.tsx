import { useState } from "react";
import Header from "../components/Header";
import MenuNav from "~/components/MenuNav";
import BikeCardList from "~/components/BikeCardList";


export default function Search() {

const [activeCategory, setActiveCategory] = useState("bicycles");
  return (
    <div className="mobile-container" style={{ position: "relative", minHeight: "100vh", paddingBottom: "90px" }}>
      <Header />

      <main style={{ padding: "1rem 1.5rem", fontFamily: "sans-serif" }}>
        {/* Поисковая строка */}
        <div style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#E8E3DC",
          borderRadius: "50px",
          padding: "10px 16px",
          gap: "10px",
          marginBottom: "20px"
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C2C2D" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input 
            type="text" 
            placeholder="Start your search" 
            style={{
              border: "none",
              backgroundColor: "transparent",
              outline: "none",
              width: "100%",
              fontSize: "14px",
              color: "#1C2C2D"
            }}
          />
              </div>
              
              
{/* Categories */}
<div
  style={{
    display: "flex",
    gap: "10px",
    marginBottom: "28px",
  }}
>
  {[
    { id: "bicycles", name: "Bicycles", icon: "🚲" },
    { id: "tools", name: "Tools", icon: "🔧" },
    { id: "rides", name: "Rides", icon: "↔️" },
  ].map((category) => (
    <button
      key={category.id}
      onClick={() => setActiveCategory(category.id)}
      style={{
        flex: 1,
        padding: "18px 8px",
        border: "none",
        borderRadius: "18px",
        backgroundColor:
          activeCategory === category.id
            ? "#1C2C2D"
            : "#E8E3DC",
        color:
          activeCategory === category.id
            ? "#FFFFFF"
            : "#1C2C2D",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        fontSize: "14px",
      }}
    >
      <span style={{ fontSize: "24px" }}>
        {category.icon}
      </span>
      {category.name}
    </button>
  ))}
</div>


        {/* Список байков */}
        <div>
          {/* Category content */}

{activeCategory === "bicycles" && (
  <div>
    <h2>Available bikes</h2>
    <BikeCardList />
  </div>
)}

{activeCategory === "tools" && (
  <div>
    <h2>Available tools</h2>
    <p>Tools will appear here.</p>
  </div>
)}

{activeCategory === "rides" && (
  <div>
    <h2>Available rides</h2>
    <p>Rides will appear here.</p>
  </div>
)}
              </div>
              
      </main>

      <MenuNav />
    </div>
  );
}