
import { useState } from "react";
import Header from "../components/Header";
import MenuNav from "~/components/MenuNav";
import { useLocation, useNavigate } from "react-router";

export default function AddBike2() {
  const location = useLocation();
  const bikeData = location.state;
  const navigate = useNavigate();

  const [photos, setPhotos] = useState<File[]>([]);
  const [availableFrom, setAvailableFrom] = useState("");
  const [availableUntil, setAvailableUntil] = useState("");
  const [price, setPrice] = useState("");

  const labelStyle = {
    display: "block" as const,
    fontSize: "12px",
    fontWeight: "bold",
    color: "#1C2C2D",
    marginBottom: "0px",
  };

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

  const publishBike = (status: string) => {
    navigate("/my-bikes", {
      state: {
        ...bikeData,
        photos,
        availableFrom,
        availableUntil,
        price,
        status,
      },
    });
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

      <main style={{ padding: "1rem 1.5rem" }}>
        <button
          onClick={() => navigate("/add-bike", { state: bikeData })}
          style={{
            background: "none",
            border: "none",
            fontSize: "24px",
            color: "#1C2C2D",
            cursor: "pointer",
            padding: "0",
            marginBottom: "15px",
          }}
        >
          ←
        </button>

        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "#1C2C2D",
            marginBottom: "24px",
          }}
        >
          Completing a post
        </h1>

        <p
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#1C2C2D",
          }}
        >
          Add a bicycle · Availability and photos
        </p>

        <div style={{ display: "flex", gap: "5px", marginBottom: "25px" }}>
          <div style={{ flex: 1, height: "3px", backgroundColor: "#1C2C2D" }} />
          <div style={{ flex: 1, height: "3px", backgroundColor: "#1C2C2D" }} />
        </div>

        {/* Bike photos */}
        <div>
          <label style={labelStyle}>Bike photos</label>

          <input
            type="file"
            accept="image/*"
            multiple
            style={{ color: "#1C2C2D", marginTop: "10px" }}
            onChange={(e) => {
              if (e.target.files) {
                setPhotos(Array.from(e.target.files));
              }
            }}
          />

          <div style={{ display: "flex", gap: "10px", marginTop: "12px", flexWrap: "wrap" }}>
            {photos.map((photo, index) => (
              <img
                key={index}
                src={URL.createObjectURL(photo)}
                alt={`Bike ${index + 1}`}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            ))}
          </div>
        </div>

        {/* Availability */}
        <div style={{ marginTop: "25px" }}>
          <label style={labelStyle}>Available from</label>
          <input
            type="date"
            style={inputStyle}
            value={availableFrom}
            onChange={(e) => setAvailableFrom(e.target.value)}
          />

          <label style={labelStyle}>Available until</label>
          <input
            type="date"
            style={inputStyle}
            value={availableUntil}
            onChange={(e) => setAvailableUntil(e.target.value)}
          />
        </div>

        {/* Price */}
        <div>
          <label style={labelStyle}>Price per day (DKK)</label>
          <input
            type="number"
            placeholder="e.g. 100"
            min="0"
            style={inputStyle}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <button
            onClick={() => publishBike("published")}
            style={{
              backgroundColor: "#1C2C2D",
              color: "white",
              padding: "14px",
              border: "none",
              borderRadius: "10px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Publish bike
          </button>

          <button
            onClick={() => publishBike("draft")}
            style={{
              backgroundColor: "#F3EEE9",
              color: "#1C2C2D",
              padding: "14px",
              border: "1px solid #1C2C2D",
              borderRadius: "10px",
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Save as draft
          </button>
        </div>
      </main>

      <MenuNav />
    </div>
  );
}
