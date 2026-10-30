import Header from "../components/Header";
import MenuNav from "~/components/MenuNav";
import { useNavigate } from "react-router";
import { useState } from "react";


export default function AddBike() {
    const navigate = useNavigate();

    const [bikeData, setBikeData] = useState({
    title: "",
    description: "",
    location: "",
    gears: "",
    gender: "",
  });

    const inputStyle = {
    
        
  width: "100%",
  padding: "12px",
  border: "1px solid #DDD6CE",
  borderRadius: "10px",
  backgroundColor: "#FBF8F5",
  fontSize: "13px",
  boxSizing: "border-box" as const,
  marginTop: "8px",
  marginBottom: "18px",
  color: "#1C2C2D",
};
const labelStyle = {
  display: "block" as const,
  fontSize: "12px",
  fontWeight: "bold",
  color: "#1C2C2D",
  marginBottom: "0px",
    };
    
  return (
    <div
      className="mobile-container"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "390px",
        minHeight: "100vh",
        margin: "0 auto",
        paddingBottom: "90px",
        backgroundColor: "#F3EEE9",
        boxSizing: "border-box",
      }}
    >
      <Header />

      <main
        style={{
          padding: "1rem 1.5rem",
          fontFamily: "sans-serif",
        }}
      >


        {/* Здесь позже добавим форму велосипеда */}

              <h1 style={{
  fontSize: "24px",
  fontWeight: "bold",
  color: "#1C2C2D",
  marginBottom: "24px",
}}>
  Creating a post
</h1>

<p style={{ fontSize: "12px", fontWeight: "bold", color: "#1C2C2D" }}>
  Add a bicycle · Details
</p>

<div style={{
  display: "flex",
  gap: "5px",
  marginBottom: "25px",
}}>
  <div style={{ flex: 1, height: "3px", backgroundColor: "#1C2C2D" }} />
  <div style={{ flex: 1, height: "3px", backgroundColor: "#D8D0C9" }} />
</div>

{/* Title */}
<label style={labelStyle}>Title</label>
<input
  type="text"
                  placeholder="Title, name of the bicycle, etc."
                  style={inputStyle}
                  value={bikeData.title}
  onChange={(e) =>
    setBikeData({
      ...bikeData,
      title: e.target.value,
    })
  }
/>

{/* Description */}
<label style={labelStyle}>Description</label>
<textarea
                  placeholder="Describe your bike, who it is for and what makes it special"
                  style={inputStyle}
                  value={bikeData.description}
  onChange={(e) =>
    setBikeData({
      ...bikeData,
      description: e.target.value,
    })
  }
/>


{/* Location */}
<label style={labelStyle}>Location</label>

<input
  type="text"
  placeholder="Where is the bike located?"
  style={inputStyle}
  value={bikeData.location}
  onChange={(e) =>
    setBikeData({
      ...bikeData,
      location: e.target.value,
    })
  }
/>


{/* Gears */}
<label style={labelStyle}>Gears</label>
<input
  type="number"
                  placeholder="e.g. 5"
                  style={inputStyle}
                  value={bikeData.description}
  onChange={(e) =>
    setBikeData({
      ...bikeData,
      description: e.target.value,
    })
  }
/>

{/* Gender */}
<label style={labelStyle}>Gender</label>
<select
  style={inputStyle}
  value={bikeData.gender}
  onChange={(e) =>
    setBikeData({
      ...bikeData,
      gender: e.target.value,
    })
  }
>
  <option value="">Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Unisex">Unisex</option>
</select>

              <button
  onClick={() => navigate("/add-bike-2", {
      state: bikeData,
    })}
  style={{
    width: "100%",
    padding: "15px",
    backgroundColor: "#1C2C2D",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "30px",
    fontSize: "14px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "5px",
  }}
>
  Next
</button>

      </main>

      <MenuNav />
    </div>
  );
}