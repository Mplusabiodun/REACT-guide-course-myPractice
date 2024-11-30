import { useLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem.js";

export default function EventDetailPage() {
  const data = useLoaderData();
  // const params = useParams();

  return (
    <>
      <EventItem event={data.event} />
      {/* <h1>Event Details page</h1> */}
      {/* <p>Event Id: {params.eventId}</p> */}
    </>
  );
}

export async function loader(request, params) {
  const id = params.eventId;
  // "http://localhost:8080/events"
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(
      JSON.stringify({
        message: "Could not fetch details for selected events",
      }),
      { status: 500 }
    );
    // throw json(
    //   { message: "Could not fetch details for selected events" },
    //   {
    //     status: 500,
    //   }
    // );
  } else {
    return response;
  }
}
