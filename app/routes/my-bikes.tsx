
import Header from "../components/Header";
import MenuNav from "~/components/MenuNav";
import BikeCardList from "~/components/BikeCardList";
import BikeCard from "~/components/BikeCard";
import { useNavigate } from "react-router";


export default function MyBikes() {

    const navigate = useNavigate();
    
    return (
      
    <div
      className="mobile-container"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "390px",
        margin: "0 auto",
        minHeight: "100vh",
        paddingBottom: "90px",
        boxSizing: "border-box",
        backgroundColor: "#F3EEE9",
      }}
    >
      <Header />

      <main
  style={{
    padding: "1rem 1.5rem",
    fontFamily: "sans-serif",
  }}
>
  <h1
  style={{
    color: "#1C2C2D",
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "20px",
  }}
>
  My posts
</h1>

  <BikeCard
    id="1"
    title="City bicycle"
    location="Åbyhøj"
    dateRange="20/10/2026 - 27/10/2026"
    rating={3.8}
    imageUrl="/Aarhus_cycling.png"
    isFavorite={false}
    onFavoriteToggle={(id) => console.log(id)}
  />

    <button
        onClick={() => navigate("/add-bike")}
    style={{
      width: "100%",
      padding: "15px",
      marginTop: "20px",
      borderRadius: "30px",
      border: "none",
      backgroundColor: "#1C2C2D",
      color: "white",
      fontSize: "16px",
      cursor: "pointer",
    }}
  >
    + Add new
  </button>
</main>

      <MenuNav />
    </div>
  );
}
