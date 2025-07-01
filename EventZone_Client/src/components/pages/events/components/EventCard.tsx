import { format } from "date-fns";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  User,
  Info,
  Badge,
  MoreVertical,
} from "lucide-react";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { Button } from "../../../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../ui/tooltip";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "../../../ui/alert-dialog";

import type { IEvent } from "../../../../interface/interface";
import { cn } from "../../../../lib/utils";
import { getTokenInfo } from "../../../../service/auth.service";
import { Link } from "react-router";
import {
  useDeleteEventMutation,
  useUpdateAttendeesMutation,
} from "../../../../redux/api/event/event.api";

interface EventCardProps {
  event: IEvent;
  showActions?: boolean;
}

export function EventCard({ event, showActions = false }: EventCardProps) {
  const userId = getTokenInfo()?._id;
  const isOwner = userId == event.owner._id;
  const hasJoined = event?.joinedUsers.includes(userId);

  const [deleteEvent, { isLoading: isDeleting }] = useDeleteEventMutation();
  const [updateAttendees, { isLoading: isJoining }] =
    useUpdateAttendeesMutation();

  const handleDelete = async (eventId: string) => {
    try {
      await deleteEvent(eventId).unwrap();
      toast.success("Event deleted successfully");
    } catch (err: any) {
      const message = err.message || "Failed to delete the event";
      toast.error(message);
    }
  };

  const handleJoin = async (eventId: string) => {
    if (isOwner) {
      toast.error("You are the owner of this event. You can't join.");
      return;
    }

    try {
      await updateAttendees(eventId).unwrap();
      toast.success("Successfully joined the event");
    } catch (err: any) {
      const message = err.message || "Failed to join event";
      toast.error(message);
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-headline">{event.title}</CardTitle>
          {showActions && isOwner && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 flex-shrink-0"
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link className="ms-2 text-green-500" to={`/update-event/${event._id}`}>Update</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-destructive w-full justify-start"
                        disabled={isDeleting}
                      >
                        {isDeleting ? "Deleting..." : "Delete"}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete the event.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          className="bg-destructive hover:bg-destructive/90"
                          onClick={() => handleDelete(event._id as string)}
                        >
                          Confirm Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
        <CardDescription className="flex items-center gap-2 pt-1 text-sm">
          <User className="h-4 w-4" />
          <span>Posted by {event.owner.name}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        <div className="flex items-start gap-2 text-muted-foreground">
          <Info className="h-4 w-4 mt-1 flex-shrink-0" />
          <p className="text-sm">{event.description}</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-accent" />
            <span>{format(new Date(event.dateTime), "MMMM d, yyyy")}</span>
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>{format(new Date(event.dateTime), "p")}</span>
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" />
            <span>{event.location}</span>
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Users className="h-5 w-5" />
          <span>{event.attendeeCount.toLocaleString()} Attendees</span>
        </div>

        {!isOwner ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Button
                    onClick={() => handleJoin(event._id as string)}
                    disabled={hasJoined || isJoining}
                    className={cn(
                      "bg-accent shadow-md border text-accent-foreground hover:bg-accent/100",
                      hasJoined &&
                        "bg-muted text-muted-foreground cursor-not-allowed opacity-60 pointer-events-none"
                    )}
                  >
                    {hasJoined
                      ? "Joined"
                      : isJoining
                      ? "Joining..."
                      : "Join Event"}
                  </Button>
                </div>
              </TooltipTrigger>
              {hasJoined && (
                <TooltipContent>
                  <p>You have already joined this event</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Badge>Ended</Badge>
        )}
      </CardFooter>
    </Card>
  );
}
