import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";

import { Calendar } from "./calendar";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { cn } from "../../lib/utils";

interface DateTimePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function DateTimePicker({
  value,
  onChange,
  placeholder = "Select date and time",
  disabled = false,
}: DateTimePickerProps) {
  const [localDate, setLocalDate] = React.useState<Date | null>(null);
  const [localTime, setLocalTime] = React.useState<string>("09:00");
  const [isOpen, setIsOpen] = React.useState(false);
  const hasInitialized = React.useRef(false);

  // Only sync when opening popover for the first time
  React.useEffect(() => {
    if (isOpen && !hasInitialized.current && value) {
      const parsed = new Date(value);
      if (!isNaN(parsed.getTime())) {
        setLocalDate(parsed);
        setLocalTime(format(parsed, "HH:mm"));
        hasInitialized.current = true;
      }
    }
  }, [isOpen, value]);

  const buildISO = () => {
    if (!localDate || !localTime) return null;

    const [hours, minutes] = localTime.split(":").map(Number);

    // Construct the date string manually to avoid timezone issues
    const year = localDate.getFullYear();
    const month = String(localDate.getMonth() + 1).padStart(2, "0"); // JS months are 0-based
    const day = String(localDate.getDate()).padStart(2, "0");
    const hour = String(hours).padStart(2, "0");
    const minute = String(minutes).padStart(2, "0");

    // Output as local time, without UTC shift
    const localISOString = `${year}-${month}-${day}T${hour}:${minute}:00`;

    return new Date(localISOString).toISOString();
  };

  const handleConfirm = () => {
    const iso = buildISO();
    if (iso) {
      onChange?.(iso);
      setIsOpen(false);
    }
  };

  const displayValue = value
    ? format(new Date(value), "PPP 'at' p")
    : placeholder;

  return (
    <Popover
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          // Reset local state on close
          hasInitialized.current = false;
          setLocalDate(null);
          setLocalTime("09:00");
        }
      }}
    >
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !value && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {displayValue}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-4" align="start">
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={localDate || undefined}
              onSelect={(d) => {
                setLocalDate(d || null);
              }}
              captionLayout="dropdown"
              fromYear={new Date().getFullYear() - 5}
              toYear={new Date().getFullYear() + 5}
              initialFocus
            />
          </div>

          <div className="space-y-2">
            <Label>Select Time</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="time"
                value={localTime}
                onChange={(e) => setLocalTime(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Button onClick={handleConfirm} disabled={!localDate || !localTime}>
            Confirm
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
