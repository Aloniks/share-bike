export interface EventProps {
  id?: string | number;
  organizer: string;
  role?: string;
  joinedCount: number;
  date: string;
  distance: string;
  level: string;
  onJoin?: (id?: string | number) => void;
}

export default function Event({
  id,
  organizer,
  role = "organiser",
  joinedCount,
  date,
  distance,
  level,
  onJoin,
}: EventProps) {
  return (
    <div
      style={{
        backgroundColor: "#F3EEE9",
        borderRadius: "20px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* Организатор и количество участников */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#E8E3DC",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C2C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <span style={{ fontWeight: "600", fontSize: "15px", color: "#1C2C2D" }}>
            {organizer}
          </span>
          <span
            style={{
              fontSize: "11px",
              backgroundColor: "#E8E3DC",
              padding: "2px 8px",
              borderRadius: "10px",
              color: "#555",
            }}
          >
            {role}
          </span>
        </div>
        <span style={{ fontSize: "12px", color: "#777" }}>
          {joinedCount} riders joined
        </span>
      </div>

      {/* Инфо: дата, дистанция, уровень */}
      <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px", color: "#1C2C2D" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{date}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="5.5" cy="17.5" r="3.5" />
            <circle cx="18.5" cy="17.5" r="3.5" />
            <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h4" />
          </svg>
          <span>{distance}</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C2C2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
          <span>{level}</span>
        </div>
      </div>

      {/* Кнопка Join */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "-10px" }}>
        <button
          onClick={() => onJoin && onJoin(id)}
          style={{
            backgroundColor: "#1C2C2D",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "50px",
            padding: "10px 24px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
}