export default function Header() {
  return (
    <header 
      style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "0 24px", 
        height: "72px",
        backgroundColor: "transparent"
      }}
    >


      {/* Локация Aarhus по центру */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "8px",
        backgroundColor: "#E8E3DC",
        padding: "8px 16px",
        borderRadius: "50px"
      }}>
        <img 
          src={`${import.meta.env.BASE_URL}MapPin.svg`}
          /* src="/MapPin.svg" */
          alt="location icon"
          style={{ width: "16px", height: "16px" }}
        />
        <span style={{ fontSize: "14px", fontWeight: "500", color: "#1C2C2D", fontFamily: "sans-serif" }}>
          Aarhus
        </span>
      </div>

      {/* Профиль справа в кругляшке */}
      <div style={{ 
        width: "36px",
        height: "36px",
        borderRadius: "50%",
        backgroundColor: "#E8E3DC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C2C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </div>
    </header>
  );
}