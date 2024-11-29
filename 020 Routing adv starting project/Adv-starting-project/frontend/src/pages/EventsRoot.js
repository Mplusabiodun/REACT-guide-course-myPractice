import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation.js";

export default function EventsRootsLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}
