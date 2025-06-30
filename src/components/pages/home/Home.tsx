"use client";
import { Link } from "react-router";

// ui components
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";

const HomePage = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-primary">EventZone</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover, create, and manage amazing events. Connect with
            like-minded people and make every moment count.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" asChild>
            {/* <Link to={isAuthenticated ? "/events" : "/login"}> */}
            Explore Events
            {/* </Link> */}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 bg-transparent"
            asChild
          >
            {/* <Link to={isAuthenticated ? "/add-event" : "/register"}> */}
            Create Event
            {/* </Link> */}
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
          <Card className="text-center">
            <CardHeader>
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Easy Event Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create and customize your events with our intuitive event
                builder.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Community Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with people who share your interests and passions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Location Based</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Find events happening near you or explore events worldwide.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Real-time Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Stay updated with real-time notifications and event changes.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted rounded-lg p-12 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of event organizers and attendees who trust EventZone
            for their event management needs.
          </p>
          <Button size="lg" className="text-lg px-8  " asChild>
            <Link to="/register">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
