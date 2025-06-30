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
import type { IEvent } from "../../../../interface/interface";
import { cn } from "../../../../lib/utils";
import { useState } from "react";

interface EventCardProps {
  event: IEvent;
  showActions?: boolean;
}

export function EventCard({ event, showActions = false }: EventCardProps) {
  const [isUpdateMode, setUpdateMode] = useState({
    isUpdate: false,
    data: null,
  });

  const isOwner = true;
  const handleDate = (eventID: string) => {};
  const hasJoined = false; //user?.joinedEvents.includes(event.id);
  const isPastEvent = new Date(event.createdAt) < new Date();

  const handleJoin = () => {
    // if (!isLoggedIn) {
    toast("You must be logged in to join an event.");
    //   router.push("/login");
    return;
    // }
    // joinEvent(event.id);
    // toast({
    //   title: "Success!",
    //   description: `You have joined "${event.title}".`,
    // });
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
                <DropdownMenuItem
                //  onClick={() => onUpdate(event)}
                >
                  Update
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleDate(event.id)}
                  className="text-destructive"
                >
                  Delete
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
            <span>{format(new Date(event.createdAt), "MMMM d, yyyy")}</span>
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-accent" />
            <span>{format(new Date(event.createdAt), "p")}</span>
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
        {!showActions && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <Button
                    onClick={handleJoin}
                    disabled={hasJoined}
                    aria-disabled={hasJoined}
                    className={cn(
                      "bg-accent shadow-md border text-accent-foreground hover:bg-accent/100",
                      hasJoined &&
                        "bg-muted text-muted-foreground cursor-not-allowed opacity-60 pointer-events-none"
                    )}
                  >
                    {hasJoined ? "Joined" : "Join Event"}
                  </Button>
                </div>
              </TooltipTrigger>
              {isPastEvent && (
                <TooltipContent>
                  <p>This event has already passed.</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )}
        {showActions && isPastEvent && <Badge>Ended</Badge>}
      </CardFooter>
    </Card>
  );
}
