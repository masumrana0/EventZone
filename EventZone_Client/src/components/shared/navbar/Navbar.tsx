import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { CalendarSync, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { setLogOut } from "../../../redux/features/auth/authSlice";
import { getTokenInfo } from "../../../service/auth.service";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Chack in is Logged In or Not
  const isAuthenticated = useAppSelector((state) => state.auth.isLoggedIn);

  const user = getTokenInfo();

  // handle Logout
  const handleLogout = () => {
    dispatch(setLogOut());
    navigate("/");
  };

  const navItems = [
    { path: "/", label: "Home", public: true },
    { path: "/events", label: "Events", public: false },
    { path: "/add-event", label: "Add Event", public: false },
    { path: "/my-events", label: "My Events", public: false },
  ];

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Button
            key={item.path}
            variant={isActive ? "default" : "ghost"}
            asChild
            className={mobile ? "w-full justify-start" : ""}
            onClick={mobile ? () => setIsOpen(false) : undefined}
          >
            <Link to={item.path}>{item.label}</Link>
          </Button>
        );
      })}
    </>
  );

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <CalendarSync className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">EventZone</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItems />
          </div>

          {/* Auth Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user?.photoURL || "/placeholder.svg"}
                        alt={user?.name}
                      />
                      <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex space-x-2">
                <Button variant="ghost" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/register">Sign Up</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]  ">
                <div className="flex flex-col space-y-4 mt-12">
                  <NavItems mobile />
                  {!isAuthenticated && (
                    <div className="flex flex-col space-y-2 pt-4 border-t">
                      <Button
                        variant="ghost"
                        asChild
                        onClick={() => setIsOpen(false)}
                      >
                        <Link to="/login">Sign In</Link>
                      </Button>
                      <Button asChild onClick={() => setIsOpen(false)}>
                        <Link to="/register">Sign Up</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
