import BikeCard from "~/components/BikeCard";

interface Bike {
  id: string | number;
  title: string;
  location: string;
  date_range?: string;
  dateRange?: string;
  rating: number;
  image_url?: string;
  imageUrl?: string;
  isFavorite?: boolean;
}

interface BikeCardListProps {
  bikes?: Bike[];
}

export default function BikeCardList({ bikes: externalBikes }: BikeCardListProps) {
  // Временные данные на случай, если из базы ничего не пришло
  const defaultBikes = [
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

  // Используем данные из базы, а если их нет — временные
  const bikesToRender = externalBikes && externalBikes.length > 0 ? externalBikes : defaultBikes;

  return (
    <div>
      {bikesToRender.map((bike: any) => (
        <BikeCard
          key={bike.id}
          id={String(bike.id)}
          title={bike.title}
          location={bike.location}
          // Поддерживаем оба варианта написания дат и картинок (из базы и из старого массива)
          dateRange={bike.date_range || bike.dateRange}
          rating={bike.rating}
          imageUrl={bike.image_url || bike.imageUrl}
          isFavorite={bike.isFavorite || false}
          onFavoriteToggle={(id) =>
            console.log("Toggled favorite:", id)
          }
        />
      ))}
    </div>
  );
}