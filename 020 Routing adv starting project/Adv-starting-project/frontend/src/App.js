import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root.js";
import HomePage from "./pages/Home.js";
import ErrorPage from "./pages/Error.js";
import EventsRootsLayout from "./pages/EventsRoot.js";
import EventsPage, { loader as eventsLoader } from "./pages/Events.js"; // eventsLoader is alias to loader
import EventDetailPage, {
  loader as eventDetailLoader,
  action as eventDetailAction,
} from "./pages/EventDetail.js";
import NewEventPage from "./pages/NewEvent.js";
import EditEventPage from "./pages/EditEvent.js";
import { action as manipulateEventAction } from "./components/EventForm.js";

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
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: eventDetailAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
