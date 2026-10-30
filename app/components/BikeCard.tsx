export interface BikeProps {
  id?: string | number;
  title: string;
  location: string;
  dateRange: string;
  rating?: number;
  imageUrl: string;
  isFavorite?: boolean;
  onFavoriteToggle?: (id?: string | number) => void;
}

export default function BikeCard({
  id,
  title,
  location,
  dateRange,
  rating = 4.5,
  imageUrl,
  isFavorite = false,
  onFavoriteToggle,
}: BikeProps) {
  return (
    <div
      style={{
        backgroundColor: "#F3EEE9",
        borderRadius: "20px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        position: "relative",
        marginBottom: "16px",
      }}
    >
      {/* Кнопка Избранное (Сердечко) */}
      <button
        onClick={() => onFavoriteToggle && onFavoriteToggle(id)}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          backgroundColor: "#FFFFFF",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          zIndex: 2,
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill={isFavorite ? "#1C2C2D" : "none"}
          stroke="#1C2C2D"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </button>

      {/* Фото велосипеда */}
      <div style={{ width: "100%", height: "180px", overflow: "hidden" }}>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Информация о велосипеде */}
      <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#1C2C2D", margin: 0 }}>
            {title}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", fontWeight: "600", color: "#1C2C2D" }}>
            <span>★</span>
            <span>{rating}</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#666" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{location}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "#666" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{dateRange}</span>
        </div>
      </div>
    </div>
  );
}