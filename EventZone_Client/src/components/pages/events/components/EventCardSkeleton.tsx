import { Card, CardContent, CardFooter, CardHeader } from "../../../ui/card";
import { Skeleton } from "../../../ui/skeleton";

export function EventCardSkeleton() {
  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-2xl shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start gap-4">
          <Skeleton className="h-6 w-2/3 rounded-md" />
          <Skeleton className="h-6 w-6 rounded-full" />
        </div>
        <Skeleton className="h-4 w-1/2 mt-2" />
      </CardHeader>

      <CardContent className="space-y-3">
        <Skeleton className="h-4 w-3/4" />
        <div className="space-y-2 text-sm">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center bg-muted/50 p-4">
        <Skeleton className="h-5 w-1/4 rounded" />
        <Skeleton className="h-6 w-6 rounded-full" />
      </CardFooter>
    </Card>
  );
}
