import type { IEvent } from "../../../interface/interface";
import { useGetMyEventQuery } from "../../../redux/api/event/event.api";
import { EventCard } from "../events/components/EventCard";
import { EventCardSkeleton } from "../events/components/EventCardSkeleton";

const MyEvent = () => {
  const { data, isLoading } = useGetMyEventQuery(undefined);

  const events = data?.data || ([] as IEvent[]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Events</h1>
        <p className="text-muted-foreground">Manage your created events.</p>
      </div>

      {!isLoading && events.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            You haven't created any events yet.
          </p>
          <p className="text-muted-foreground">
            Start by creating your first event!
          </p>
        </div>
      ) : isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, idx) => (
            <EventCardSkeleton key={idx} />
          ))}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event: IEvent, index: number) => (
            <EventCard showActions={true} key={index} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEvent;
