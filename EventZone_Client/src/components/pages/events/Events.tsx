"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { Input } from "../../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import DatePicker from "../../ui/date-picker";
import { EventCard } from "./components/EventCard";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dateFilter, setDateFilter] = useState("all");

  const handleClearFilters = () => {
    setSearchTerm("");
    setDateFilter("all");
  };

  const events = [
    {
      id: "1",
      title: "Tech Conference 2025",
      createdAt: "2025-07-15T10:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 150,
      location: "Dhaka, Bangladesh",
      description: "A premier tech event with speakers from around the globe.",
    },
    {
      id: "2",
      title: "JavaScript Bootcamp",
      createdAt: "2025-08-01T14:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 50,
      location: "Online",
      description: "Hands-on training in modern JavaScript.",
    },
    {
      id: "3",
      title: "UI/UX Meetup",
      createdAt: "2025-07-10T18:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 30,
      location: "Chattogram",
      description: "Discussing latest trends in design and usability.",
    },
    {
      id: "4",
      title: "Next.js Workshop",
      createdAt: "2025-07-20T11:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 70,
      location: "Dhaka",
      description: "Build production-ready apps using Next.js.",
    },
    {
      id: "5",
      title: "Python AI Session",
      createdAt: "2025-08-05T15:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 40,
      location: "Online",
      description: "Explore how to build AI models using Python.",
    },
    {
      id: "6",
      title: "DevOps Fundamentals",
      createdAt: "2025-07-25T09:00:00Z",
      owner: {
        name: "Masum Rana",
        email: "masumrana.dev.bd@gmail.com",
        photoURL:
          "https://media.licdn.com/dms/image/v2/D5603AQH5knHodXbHIA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710602305413?e=1756944000&v=beta&t=WfUXqdMcUlnENzBeG2MtOnRNfy3oRSK-3AlExShq8I4",
      },
      attendeeCount: 65,
      location: "Sylhet",
      description: "CI/CD, containers, and cloud fundamentals.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold">All Events</h1>

        {/* Search and Filter Section */}
        <div className="bg-white p-4 rounded-lg border shadow-sm space-y-4">
          {/* Search Input */}
          <div className="flex md:flex-row flex-col-reverse gap-5">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-0 shadow-none focus-visible:ring-0 bg-gray-50"
              />
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleClearFilters}
              className="w-full sm:w-auto whitespace-nowrap bg-transparent"
            >
              Clear Filters
            </Button>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-3 md:w-[400px]">
            <DatePicker />
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-full sm:w-48 bg-gray-50 border-0 shadow-none focus:ring-0">
                <SelectValue placeholder="Select a date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem disabled value="all">
                  Select a date range
                </SelectItem>
                <SelectItem value="current-week">Current Week</SelectItem>
                <SelectItem value="last-week">Last Week</SelectItem>
                <SelectItem value="current-month">Current Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
              </SelectContent>
            </Select>
          </div>  
        </div>
      </div>

      {/* Events Grid */}
      {events.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No events found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
