import Events from "./Events";

const EventsData = () => {
  const upcomingEvents = [
    {
      image: "event5.jpg",
      title: "Newcomer's Collision Event",
      description: ``,
      linkedinLink:
        "https://www.linkedin.com/posts/re-defined11_newcomers-collision-event-activity-7105151057202188288-Vgab/",
    },
  ];

  const pastEvents = [
    {
      image: "event1.jpg",
      title: "Entrepreneurs Re-defined Meetup",
      description: ``,
      linkedinLink:
        "https://www.linkedin.com/posts/re-defined11_students-networking-events-activity-7132223347324534784-l7FG/",
    },
    {
      image: "event3.jpg",
      title: "JobSeekers Masterclass Series",
      description: "",
      linkedinLink:
        "https://www.linkedin.com/posts/re-defined11_students-internationalstudents-career-activity-7126530961470603264-q-Yo/",
    },
    {
      image: "event4.jpg",
      title: "Women in Leadership: Panel + Networking Event",
      description: "",
      linkedinLink:
        "https://www.linkedin.com/posts/re-defined11_panelists-activity-7107331645711552512-bPNO/",
    },
    {
      image: "event2.jpg",
      title: "Chats over Chai",
      description: "",
      linkedinLink:
        "https://www.linkedin.com/posts/re-defined11_students-internationalstudents-meetup-activity-7128193605982162944-3ZGn/",
    },
  ];

  return (
    <>
      <Events events={upcomingEvents} heading=" Upcoming Events" />
      <Events events={pastEvents} heading="Past Events" />
    </>
  );
};

export default EventsData;
