export default function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", backgroundColor: "#f0f0f0" }}>
      {/* Логотип из папки public */}
      <div >
        <img 
          src="/logo_share_bike.svg" 
          alt="Share Bike Logo" 
          style={{ width: "40px", height: "40px" }}
        />
      </div>

      {/* Локация Aarhus */}
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "8px",
        backgroundColor: "#ffffff",
        padding: "8px 16px",
        borderRadius: "50px"
      }}>
        <span>
          < img src="/MapPin.svg"
            alt="location icon" /></span>
          <span> Aarhus </span>
      </div>

      {/* Профиль */}
      <div>
        <span>👤</span>
      </div>
    </header>
  );
}