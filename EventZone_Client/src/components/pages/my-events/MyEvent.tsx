import { EventCard } from "../events/components/EventCard";

const MyEvent = () => {
  // dummy data
  const events = [
    {
      id: "1",
      title: "Tech Conference 2025",
      createdAt: "2025-07-15T10:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 150,
      location: "Dhaka, Bangladesh",
      description: "A premier tech event with speakers from around the globe.",
    },
    {
      id: "2",
      title: "JavaScript Bootcamp",
      createdAt: "2025-08-01T14:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 50,
      location: "Online",
      description: "Hands-on training in modern JavaScript.",
    },
    {
      id: "3",
      title: "UI/UX Meetup",
      createdAt: "2025-07-10T18:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 30,
      location: "Chattogram",
      description: "Discussing latest trends in design and usability.",
    },
    {
      id: "4",
      title: "Next.js Workshop",
      createdAt: "2025-07-20T11:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 70,
      location: "Dhaka",
      description: "Build production-ready apps using Next.js.",
    },
    {
      id: "5",
      title: "Python AI Session",
      createdAt: "2025-08-05T15:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 40,
      location: "Online",
      description: "Explore how to build AI models using Python.",
    },
    {
      id: "6",
      title: "DevOps Fundamentals",
      createdAt: "2025-07-25T09:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 65,
      location: "Sylhet",
      description: "CI/CD, containers, and cloud fundamentals.",
    },
  ];
  // Replace with actual data fetching logic
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Events</h1>
        <p className="text-muted-foreground">Manage your created events.</p>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            You haven't created any events yet.
          </p>
          <p className="text-muted-foreground">
            Start by creating your first event!
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard showActions={true} key={index} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvent;
