import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import useLogout from "../../hooks/useLogout";
import { LogOut } from "lucide-react";
import { Loader } from "./Loader";

interface ProfileDropdownProps {
  name: string;

  picture: string;
}
export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({
  name,
  picture,
}) => {
  const { logout, isLoading } = useLogout();

  logout();

  return (
    <>
      {isLoading ? (
        <Loader size="w-5 h-5" />
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={picture || "https://github.com/shadcn.png"}
                alt={name || "User Avatar"}
              />
              <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem onClick={() => alert("Navigate to profile")}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>
              <LogOut /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
};
