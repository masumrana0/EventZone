"use client";

import { Link } from "react-router";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

// Feature card component
const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Calendar;
  title: string;
  description: string;
}) => (
  <Card className="text-center">
    <CardHeader>
      <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const HomePage = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="py-16 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Welcome to <span className="text-primary">EventZone</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover, create, and manage amazing events. Connect with
            like-minded people and make every moment count.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/events">Explore Events</Link>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8" asChild>
            <Link to="/add-event">Create Event</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">Why Choose EventZone?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to create, manage, and attend amazing events all
            in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Calendar}
            title="Easy Event Creation"
            description="Create and customize your events with our intuitive event builder."
          />
          <FeatureCard
            icon={Users}
            title="Community Driven"
            description="Connect with people who share your interests and passions."
          />
          <FeatureCard
            icon={MapPin}
            title="Location Based"
            description="Find events happening near you or explore events worldwide."
          />
          <FeatureCard
            icon={Clock}
            title="Real-time Updates"
            description="Stay updated with real-time notifications and event changes."
          />
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="bg-muted rounded-lg p-12 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of event organizers and attendees who trust EventZone
            for their event management needs.
          </p>
          <Button size="lg" className="text-lg px-8" asChild>
            <Link to="/register">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
