import Header from "../components/Header";
import MenuNav from "~/components/MenuNav";
import Event from "~/components/EventCard";

export default function Home() {
  return (
    <div className="mobile-container" style={{ position: "relative", minHeight: "100vh", paddingBottom: "80px" }}>
      {/* Вставляем шапку в самый верх */}
      <Header />
      
      <main style={{ padding: "1rem 1.5rem", fontFamily: "sans-serif" }}>
        {/* Главная карточка-баннер */}
        <div style={{ 
          backgroundColor: "#1C2C2D", 
          borderRadius: "22px", 
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}>
          {/* Картинка сверху */}
          <div style={{ width: "100%", height: "160px" }}>
            <img 
              src={`${import.meta.env.BASE_URL}Aarhus_cycling.png`} // Замени на путь к своей картинке из папки public
              alt="People biking"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          {/* Текст и кнопки внутри карточки */}
          <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#FFFFFF", margin: 0 }}>
              Welcome back, Simon!
            </h1>
            <p style={{ fontSize: "14px", color: "#B8C5C6", margin: "0 0 12px 0" }}>
              What are you up for today?
            </p>
          
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={{ 
                flex: 1, 
                padding: "12px 0", 
                fontSize: "14px", 
                cursor: "pointer",
                borderRadius: "50px",
                border: "none",
                backgroundColor: "#FFFFFF",
                color: "#1C2C2D",
                fontWeight: "600"
              }}>
                Rent a bike
              </button>

              <button style={{ 
                flex: 1, 
                padding: "12px 0", 
                fontSize: "14px", 
                cursor: "pointer",
                borderRadius: "50px",
                border: "none",
                backgroundColor: "#000000",
                color: "#fff",
                fontWeight: "600"
              }}>
                Share a bike
              </button>
            </div>
          </div>
        </div>

        *// event //*

        <div style={{ marginTop: "24px" }}>
  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
    <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#1C2C2D", margin: 0 }}>
      Upcoming events
    </h2>
    <span style={{ fontSize: "14px", color: "#666", cursor: "pointer", fontWeight: "500" }}>
      See more
    </span>
  </div>

  {/* Вызов нашего компонента с id */}
  <Event 
    id="1"
    organizer="Mikkel"
    joinedCount={4}
    date="20/10/2026"
    distance="20 km"
    level="Beginner"
    onJoin={(id) => console.log("Joined event:", id)}
  />
        </div>
        
        *//people//*

      <div style={{ marginTop: "28px", marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "700", color: "#1C2C2D", marginBottom: "16px", margin: "0 0 16px 0" }}>
          People are looking for today...
        </h2>

        {/* Горизонтальный список карточек */}
        <div style={{ 
          display: "flex", 
          gap: "12px", 
          overflowX: "auto", 
          paddingBottom: "8px" 
        }}>
          {/* Карточка 1: A bicycle */}
          <div style={{
            flex: "1",
            minWidth: "100px",
            backgroundColor: "#E8E3DC",
            borderRadius: "16px",
            padding: "16px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer"
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1C2C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="18.5" cy="17.5" r="3.5" />
              <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h4" />
            </svg>
            <span style={{ fontSize: "13px", fontWeight: "500", color: "#1C2C2D" }}>A bicycle</span>
          </div>

          {/* Карточка 2: Tools (акцентная) */}
          <div style={{
            flex: "1",
            minWidth: "100px",
            backgroundColor: "#A4C0CB", // Голубоватый цвет из инспектора Figma
            borderRadius: "16px",
            padding: "16px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer"
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1C2C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
            <span style={{ fontSize: "13px", fontWeight: "500", color: "#1C2C2D" }}>Tools</span>
          </div>

          {/* Карточка 3: A bicycle */}
          <div style={{
            flex: "1",
            minWidth: "100px",
            backgroundColor: "#E8E3DC",
            borderRadius: "16px",
            padding: "16px 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            cursor: "pointer"
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1C2C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="18.5" cy="17.5" r="3.5" />
              <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h4" />
            </svg>
            <span style={{ fontSize: "13px", fontWeight: "500", color: "#1C2C2D" }}>A bicycle</span>
          </div>
        </div>
      </div>

      </main>

      <MenuNav />
    </div>
  );
}