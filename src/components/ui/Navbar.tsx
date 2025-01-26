import * as React from "react";
import { cn } from "../../lib/utils";
import {
  Monitor,
  Laptop,
  Camera,
  RefreshCw,
  LucideShoppingCart,
} from "lucide-react";
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
import { IoSearchOutline } from "react-icons/io5";
import { SearchBar } from "./searchbar";
import { UserContext } from "../../context/userProvider";
import { ProfileDropdown } from "../common/profileDropdown";

const components: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}[] = [
  {
    title: "CCTV",
    href: "/products/cctv",
    description: "Surveillance cameras and security systems.",
    icon: <Camera className="h-6 w-6" />,
  },
  {
    title: "Laptop",
    href: "/products/laptop",
    description: "Wide range of laptops for all your needs.",
    icon: <Laptop className="h-6 w-6" />,
  },
  {
    title: "Desktop",
    href: "/products/desktop",
    description: "Powerful desktop computers for work and play.",
    icon: <Monitor className="h-6 w-6" />,
  },
  {
    title: "Refurbished",
    href: "/products/refurbished",
    description: "Quality refurbished electronics at great prices.",
    icon: <RefreshCw className="h-6 w-6" />,
  },
];

export function Navbar() {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const userContext = React.useContext(UserContext);
  const goToCard = () => {
    if (userContext.isAuthenticated) {
      navigate("/cart");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to={"/"} className="flex items-center">
                <img src="/logo.png" alt="YourLogo" className="h-14 w-auto" />
              </Link>
              <NavigationMenu className="ml-6">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                      href="/"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
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
                      className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                      href="/shop"
                    >
                      Shop
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                      href="/about"
                    >
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} cursor-pointer`}
                      href="/contact"
                    >
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="icon" onClick={goToCard}>
                <LucideShoppingCart className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <IoSearchOutline className="h-6 w-6" />
              </Button>

              {!userContext.isAuthenticated ? (
                <Button
                  onClick={() => {
                    navigate("/auth/login");
                  }}
                >
                  Login
                </Button>
              ) : (
                <ProfileDropdown
                  name={userContext?.user.name}
                  picture={userContext?.user.picture}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <SearchBar isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
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
