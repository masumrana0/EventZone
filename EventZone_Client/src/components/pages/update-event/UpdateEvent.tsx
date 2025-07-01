import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router";
import { eventSchema, type EventFormData } from "../../../lib/validation";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";

import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { DateTimePicker } from "../../ui/datetime-picker";
import { Button } from "../../ui/button";
import { FileText, MapPin } from "lucide-react";

import {
  useGetOneEventQuery,
  useUpdateEventMutation,
} from "../../../redux/api/event/event.api";
import { useEffect } from "react";

const UpdateEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isLoading: isEventLoading } = useGetOneEventQuery(id as string);
  const [updateEvent, { isLoading: isUpdating }] = useUpdateEventMutation();

  const event = data?.data;
  const form = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      dateTime: "",
      location: "",
      description: "",
    },
  });

  useEffect(() => {
    if (event) {
      form.reset({
        title: event.title,
        dateTime: event.dateTime,
        location: event.location,
        description: event.description,
      });
    }
  }, [event, form]);

  const onSubmit = async (formData: EventFormData) => {
    const dirty = form.formState.dirtyFields;

    const updatedFields: Partial<EventFormData> = {};
    (Object.keys(dirty) as (keyof EventFormData)[]).forEach((key) => {
      updatedFields[key] = formData[key];
    });

    if (Object.keys(updatedFields).length === 0) {
      toast("No changes detected.");
      return;
    }

    try {
      await updateEvent({ eventId: id, data: updatedFields }).unwrap();
      toast.success("Event updated successfully!");
      navigate("/my-events");
    } catch (error: any) {
      toast.error(error?.message || "Failed to update event.");
    }
  };

  if (isEventLoading) {
    return <p className="text-center py-10">Loading event details...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Update Event</h1>
      <p className="text-muted-foreground mb-6">
        Modify event details below and save changes.
      </p>

      <Card>
        <CardHeader>
          <CardTitle>Edit Event</CardTitle>
          <CardDescription>Update your event information here.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Title *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          className="pl-10"
                          placeholder="Enter event title"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date & Time *</FormLabel>
                    <FormControl>
                      <DateTimePicker
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          className="pl-10"
                          placeholder="Enter location"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description *</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={4}
                        placeholder="Describe your event..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isUpdating}>
                {isUpdating ? "Updating..." : "Update Event"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateEvent;
