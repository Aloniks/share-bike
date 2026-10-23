import Header from "../components/Header";

export default function Home() {
  return (
    
    <div className="mobile-container">
      {/* Вставляем шапку в самый верх */}
      <Header />
      <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <div style={{ 
          backgroundColor: "#DFDFDF", 
          borderRadius: "20px", 
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
        <h1>Welcome back, Simon!</h1>
        <p>What are you up for today?</p>
      
        <div style={{ display: "flex", gap: "10px", marginTop: "0.5rem" }}>
            <button style={{ 
              flex: 1, 
              padding: "10px", 
              fontSize: "14px", 
              cursor: "pointer",
              borderRadius: "50px",
              border: "1px solid #111",
              backgroundColor: "transparent",
              fontWeight: "500"
            }}>
              Rent a bike
            </button>

          <button style={{ 
              flex: 1, 
              padding: "10px", 
              fontSize: "14px", 
              cursor: "pointer",
              borderRadius: "50px",
              border: "none",
              backgroundColor: "#111",
              color: "#fff",
              fontWeight: "500"
            }}>
            Share a bike
          </button>
          </div>
          </div>
      </main>
    </div>);
};