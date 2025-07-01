import { Input } from "../../../ui/input";
import { Search } from "lucide-react";
import { Button } from "../../../ui/button";
import { useSearchParams } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import DatePicker from "../../../ui/date-picker";

const EventsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  const dateRange = searchParams.get("dateRange") || "all";
  const eventDate = searchParams.get("eventDate") || "";

  // Handle clearing all filters
  const handleClearFilters = () => {
    setSearchParams({});
  };

  // Search input handler
  const handleSearchChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("searchTerm", value);
    } else {
      params.delete("searchTerm");
    }
    setSearchParams(params);
  };

  const handleDateChange = (value: Date | undefined) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      const formatted = value.toISOString().split("T")[0];
      params.set("eventDate", formatted);
    }
    setSearchParams(params);
  };

  // Select filter (currentWeek, lastMonth etc.)
  const handleDateRangChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value && value !== "all") {
      params.set("dateRange", value);
    } else {
      params.delete("dateRange");
    }
    setSearchParams(params);
  };

  //  dateRange:
 
  //   | 'currentMonth'
  //   | 'currentWeek'
  //   | 'currentYear'
  //   | 'lastMonth'
  //   | 'lastWeek'
  //   | 'lastYear'
  return (
    <div className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-bold">All Events</h1>

      {/* Search & Filters */}
      <div className="bg-white p-4 rounded-lg border shadow-sm space-y-4">
        {/* Search Input */}
        <div className="flex md:flex-row flex-col-reverse gap-5">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
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

        {/* Date Filters */}
        <div className="flex flex-col sm:flex-row gap-3 md:w-[400px]">
          {/* Select Filter */}
          <Select value={dateRange} onValueChange={handleDateRangChange}>
            <SelectTrigger className="w-full sm:w-48 bg-gray-50 border-0 shadow-none focus:ring-0">
              <SelectValue placeholder="Select a date range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem disabled value="all">
                Select a date range
              </SelectItem>
              <SelectItem value="currentWeek">Current Week</SelectItem>
              <SelectItem value="lastWeek">Last Week</SelectItem>
              <SelectItem value="currentMonth">Current Month</SelectItem>
              <SelectItem value="lastMonth">Last Month</SelectItem>
              <SelectItem value="currentYear">Current Year</SelectItem>
              <SelectItem value="lastYear">Last Year</SelectItem>
            </SelectContent>
          </Select>

          {/* Calendar Picker (Exact Date) */}
          <DatePicker
            value={eventDate ? new Date(eventDate) : undefined}
            onChange={(value) => handleDateChange(value as any)}
            placeholder="Pick a date"
          />
        </div>
      </div>
    </div>
  );
};

export default EventsFilter;
