const events = [
  {
    image: "college-friends.jpg",
    title: "Monthly Meetup",
    description: `
    Date: 15th January 2024 
    Time: 12:30 p.m.
    Location: The Arnie, Mohawk College`,
  },
  {
    image: "group-discussion.jpg",
    title: "Carrer Planing Workshop",
    description: `
    Date: 15th January 2024 
    Time: 12:30 p.m.
    Location: The Arnie, Mohawk College`,
  },
  {
    image: "resume-building.jpg",
    title: "Resume Building Workshop",
    description: `
    Date: 15th January 2024 
    Time: 12:30 p.m.
    Location: The Arnie, Mohawk College`,
  },

  // Add more events as needed
];

const Events = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto mb-8">
        <h2 className="text-3xl font-semibold mb-8 ml-4 text-center bg-orange-600 px-4 py-4 text-white rounded-lg">
          Current Events
        </h2>
        <div className="flex justify-center overflow-x-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-white mx-4 p-6 rounded-lg shadow-lg"
            >
              <img
                src={`./assets/${event.image}`}
                alt={event.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto  mb-8">
        <h2 className="text-3xl font-semibold mb-8 ml-4 text-center bg-orange-600 px-4 py-4 text-white rounded-lg">
          Current Events
        </h2>
        <div className="flex justify-center overflow-x-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-white mx-4 p-6 rounded-lg shadow-lg"
            >
              <img
                src={`./assets/${event.image}`}
                alt={event.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto  mb-8">
        <h2 className="text-3xl font-semibold mb-8 ml-4 text-center bg-orange-600 px-4 py-4 text-white rounded-lg">
          Past Events
        </h2>
        <div className="flex justify-center overflow-x-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 bg-white mx-4 p-6 rounded-lg shadow-lg"
            >
              <img
                src={`./assets/${event.image}`}
                alt={event.title}
                className="w-full h-40 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
