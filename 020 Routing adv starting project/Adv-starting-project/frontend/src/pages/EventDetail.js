import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>My EventDetailPage</h1>
      <p>
        The ID for this page is <strong>{params.eventId}</strong>
      </p>
    </>
  );
}
