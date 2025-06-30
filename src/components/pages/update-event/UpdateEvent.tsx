/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useParams } from "react-router";
import { eventSchema, type EventFormData } from "../../../lib/validation";

// ui components
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
import { MapPin, FileText } from "lucide-react";
import { Input } from "../../ui/input";
import { DateTimePicker } from "../../ui/datetime-picker";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";

const UpdateEvent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const data = {
    id: "1",
    title: "Tech Conference 2025",
    datetime: "2025-07-15T10:00:00Z",
    owner: {
      name: "Masum Rana",
      email: "masumrana.dev.bd@gmail.com",
      photoURL:
        "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
    },

    attendeeCount: 150,
    location: "Dhaka, Bangladesh",
    description: "A premier tech event with speakers from around the globe.",
  };

  const form = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: data.title,
      datetime: data.datetime,
      location: data.location,
      description: data.description,
    },
  });

  const onSubmit = async (updatedData: EventFormData) => {
    try {
      const dirtyFields = form.formState.dirtyFields;

      const changedFields: Partial<EventFormData> = {};

      (Object.keys(dirtyFields) as (keyof EventFormData)[]).forEach((key) => {
        changedFields[key] = updatedData[key];
      });

      if (Object.keys(changedFields).length === 0) {
        toast("No changes made.");
        return;
      }

      console.log("Changed fields:", changedFields);

      // send changedFields to API here

      toast("Event updated successfully!");
      setTimeout(() => {
        // navigate("/events");
      }, 1500);
    } catch (error: any) {
      toast("Failed to update event. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Update Event</h1>
          <p className="text-muted-foreground">
            Modify event details below and save changes.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Edit Event</CardTitle>
            <CardDescription>
              Make changes to your event information here.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Title *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            placeholder="Enter event title"
                            className="pl-10"
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
                  name="datetime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date and Time *</FormLabel>
                      <FormControl>
                        <DateTimePicker
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Select event date and time"
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
                          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                          <Input
                            placeholder="Enter event location"
                            className="pl-10"
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
                          placeholder="Describe your event..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? "Updating Event..."
                    : "Update Event"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UpdateEvent;
