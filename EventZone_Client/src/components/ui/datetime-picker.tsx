/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock } from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { cn } from "../../lib/utils";
import { Label } from "./label";
import { Input } from "./input";
import { Calendar } from "./calendar";
import DatePicker from "./date-picker";

// interface DateTimePickerProps {
//   value?: string;
//   onChange?: (value: string) => void;
//   placeholder?: string;
//   disabled?: boolean;
// }

// export function DateTimePicker({
//   value,
//   onChange,
//   placeholder = "Select date and time",
//   disabled = false,
// }: DateTimePickerProps) {
//   const [date, setDate] = React.useState<Date>();
//   const [time, setTime] = React.useState<string>("09:00");
//   const [isOpen, setIsOpen] = React.useState(false);

//   // Parse initial value
//   React.useEffect(() => {
//     if (value) {
//       const dateTime = new Date(value);
//       if (!isNaN(dateTime.getTime())) {
//         setDate(dateTime);
//         setTime(format(dateTime, "HH:mm"));
//       }
//     }
//   }, [value]);

//   // Trigger change on parent
//   React.useEffect(() => {
//     if (date && time) {
//       const [hours, minutes] = time.split(":");
//       const newDate = new Date(date);
//       newDate.setHours(Number(hours), Number(minutes));
//       onChange?.(newDate.toISOString());
//     }
//   }, [date, time, onChange]);

//   const handleDateSelect = (selected: Date | undefined) => {
//     if (selected) {
//       setDate(selected);
//     }
//   };

//   const displayValue = React.useMemo(() => {
//     if (date && time) {
//       const [hours, minutes] = time.split(":");
//       const fullDate = new Date(date);
//       fullDate.setHours(Number(hours), Number(minutes));
//       return format(fullDate, "PPP 'at' p");
//     }
//     return "";
//   }, [date, time]);

//   return (
//     <Popover open={isOpen} onOpenChange={setIsOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           className={cn(
//             "w-full justify-start text-left font-normal",
//             !displayValue && "text-muted-foreground"
//           )}
//           disabled={disabled}
//         >
//           <CalendarIcon className="mr-2 h-4 w-4" />
//           {displayValue || placeholder}
//         </Button>
//       </PopoverTrigger>
//       <PopoverContent
//         className="w-full max-w-xs p-0 sm:max-w-sm md:max-w-md"
//         align="start"
//       >
//         <div className="p-4 space-y-4">
//           <div className="space-y-2">
//             <Label className="text-sm font-medium">Select Date</Label>
//             <Calendar
//               mode="single"
//               selected={date}
//               onSelect={handleDateSelect as any}
//               captionLayout="dropdown" // enables month & year dropdown
//               fromYear={new Date().getFullYear() - 10}
//               toYear={new Date().getFullYear() + 10}
//               //   disabled={(date: Date) =>
//               //     date < new Date(new Date().setHours(0, 0, 0, 0))
//               //   }
//               initialFocus
//             />
//           </div>
//           <div className="space-y-2">
//             <Label className="text-sm font-medium">Select Time</Label>
//             <div className="relative">
//               <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
//               <Input
//                 type="time"
//                 value={time}
//                 onChange={(e) => setTime(e.target.value)}
//                 className="pl-10"
//               />
//             </div>
//           </div>
//           {displayValue && (
//             <div className="pt-2 border-t">
//               <p className="text-sm text-muted-foreground">Selected:</p>
//               <p className="text-sm font-medium">{displayValue}</p>
//             </div>
//           )}
//           <Button
//             onClick={() => setIsOpen(false)}
//             className="w-full"
//             disabled={!date || !time}
//           >
//             Confirm
//           </Button>
//         </div>
//       </PopoverContent>
//     </Popover>
//   );
// }

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
  const [date, setDate] = React.useState<Date>();
  const [time, setTime] = React.useState<string>("");
  const [isOpen, setIsOpen] = React.useState(false);

  // Parse initial value
  React.useEffect(() => {
    if (value) {
      const dateTime = new Date(value);
      if (!isNaN(dateTime.getTime())) {
        setDate(dateTime);
        setTime(format(dateTime, "HH:mm"));
      }
    }
  }, [value]);

  // Update parent when date or time changes
  React.useEffect(() => {
    if (date && time) {
      const [hours, minutes] = time.split(":");
      const newDate = new Date(date);
      newDate.setHours(Number.parseInt(hours), Number.parseInt(minutes));
      onChange?.(newDate.toISOString());
    }
  }, [date, time, onChange]);

  const handleDateSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setDate(selectedDate);
      if (!time) {
        setTime("09:00"); // Default time
      }
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  const displayValue = React.useMemo(() => {
    if (date && time) {
      const [hours, minutes] = time.split(":");
      const displayDate = new Date(date);
      displayDate.setHours(Number.parseInt(hours), Number.parseInt(minutes));
      return format(displayDate, "PPP 'at' p");
    }
    return "";
  }, [date, time]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !displayValue && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {displayValue || placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 max-w-[95vw]"
        align="start"
        side="bottom"
        sideOffset={4}
        avoidCollisions={true}
        collisionPadding={16}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Calendar Section */}
          <div className="p-4 border-b lg:border-b-0 lg:border-r">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Select Date</Label>
              <DatePicker onChange={handleDateSelect as any} />
            </div>
          </div>

          {/* Time and Confirmation Section */}
          <div className="p-4 space-y-4 min-w-[200px]">
            <div className="space-y-3">
              <Label className="text-sm font-medium">Select Time</Label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="time"
                  value={time}
                  onChange={handleTimeChange}
                  className="pl-10"
                  placeholder="Select time"
                />
              </div>
            </div>

            {/* Selected Preview */}
            {displayValue && (
              <div className="space-y-2 p-3 bg-muted/50 rounded-lg">
                <Label className="text-xs font-medium text-muted-foreground">
                  Selected:
                </Label>
                <p className="text-sm font-medium break-words">
                  {displayValue}
                </p>
              </div>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
