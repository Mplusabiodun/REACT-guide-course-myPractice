import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.js";
import HomePage from "./pages/Home.js";
import ErrorPage from "./pages/Error.js";
import EventsRootsLayout from "./pages/EventsRoot.js";
import EventsPage, { loader as eventsLoader } from "./pages/Events.js"; // eventsLoader is alias to loader
import EventDetailPage, {
  loader as eventDetailLoader,
} from "./pages/EventDetail.js";
import NewEventPage from "./pages/NewEvent.js";
import EditEventPage from "./pages/EditEvent.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            element: <EventDetailPage />,
            loader: eventDetailLoader,
          },
          { path: "new", element: <NewEventPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
