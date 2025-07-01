import { useMemo } from "react";
import { EventCard } from "./components/EventCard";
import { useGetAllEventQuery } from "../../../redux/api/event/event.api";
import type { IEvent } from "../../../interface/interface";
import { useSearchParams } from "react-router";
import EventsFilter from "./components/EventsFilter";
import { EventCardSkeleton } from "./components/EventCardSkeleton";

const Events = () => {
  const [searchParams] = useSearchParams();

  // Load values from URL
  const searchTerm = searchParams.get("searchTerm") || "";
  const dateRange = searchParams.get("dateRange") || "all";
  const eventDate = searchParams.get("eventDate") || "";

  // create query
  const query = useMemo(() => {
    const params = new URLSearchParams();

    if (searchTerm) {
      params.append("searchTerm", searchTerm);
    }

    if (dateRange) {
      params.append("dateRange", dateRange);
    }

    if (eventDate) {
      params.append("eventDate", eventDate);
    }

    return params.toString();
  }, [searchTerm, dateRange, eventDate]);

  const { data, isLoading } = useGetAllEventQuery(query);
  const events = data?.data || [];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <EventsFilter />
      {/* Events Grid */}
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, idx) => (
            <EventCardSkeleton key={idx} />
          ))}
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            {query.length > 3
              ? "  No events found matching your criteria."
              : "No events found"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {events.map((event: IEvent, index: number) => (
            <EventCard showActions={true} key={index} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
