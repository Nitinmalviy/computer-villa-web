import * as React from "react";
import { cn } from "../../lib/utils";

import { Monitor, Laptop, Camera, RefreshCw } from "lucide-react";
import { Link, useNavigate } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { navigationMenuTriggerStyle } from "./navigation-menu";
import { Button } from "./button";

const components: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "CCTV",
    href: "/cctv",
    description: "Surveillance cameras and security systems.",
    icon: <Camera className="h-6 w-6" />,
  },
  {
    title: "Laptop",
    href: "/laptop",
    description: "Wide range of laptops for all your needs.",
    icon: <Laptop className="h-6 w-6" />,
  },
  {
    title: "Desktop",
    href: "/desktop",
    description: "Powerful desktop computers for work and play.",
    icon: <Monitor className="h-6 w-6" />,
  },
  {
    title: "Refurbished",
    href: "/refurbished",
    description: "Quality refurbished electronics at great prices.",
    icon: <RefreshCw className="h-6 w-6" />,
  },
];

export function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to={"/"} className="flex items-center">
                <img src="/logo.png" alt="YourLogo" className="h-14 w-auto" />
                {/* <span className="ml-2 text-xl font-bold text-primary">
                YourLogo
              </span> */}
              </Link>
              <NavigationMenu className="ml-6">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {components.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            href={component.href}
                            icon={component.icon}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => {
                  navigate("/auth/sing-up");
                }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center space-x-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
