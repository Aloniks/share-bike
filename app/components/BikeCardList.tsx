
import BikeCard from "~/components/BikeCard";

export default function BikeCardList() {

  // Временные данные о велосипедах
  const bikes = [
    {
      id: "1",
      title: "City bicycle",
      location: "Aarhus C",
      dateRange: "20/10/2026 - 27/10/2026",
      rating: 4.8,
      imageUrl: "/Aarhus_cycling.png",
      isFavorite: false,
    },
    {
      id: "2",
      title: "Road Bike",
      location: "Aarhus N",
      dateRange: "20/10/2026 - 27/10/2026",
      rating: 4.9,
      imageUrl: "/Aarhus_cycling.png",
      isFavorite: true,
    },
    {
      id: "3",
      title: "Mountain Bike",
      location: "Aarhus V",
      dateRange: "21/10/2026 - 28/10/2026",
      rating: 4.7,
      imageUrl: "/Aarhus_cycling.png",
      isFavorite: false,
    },
    {
      id: "4",
      title: "Electric Bike",
      location: "Aarhus C",
      dateRange: "22/10/2026 - 29/10/2026",
      rating: 5.0,
      imageUrl: "/Aarhus_cycling.png",
      isFavorite: false,
    },
  ];

  return (
    <div>
      {bikes.map((bike) => (
        <BikeCard
          key={bike.id}
          id={bike.id}
          title={bike.title}
          location={bike.location}
          dateRange={bike.dateRange}
          rating={bike.rating}
          imageUrl={bike.imageUrl}
          isFavorite={bike.isFavorite}
          onFavoriteToggle={(id) =>
            console.log("Toggled favorite:", id)
          }
        />
      ))}
    </div>
  );
}
