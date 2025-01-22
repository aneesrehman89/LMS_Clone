import { MenuIcon, School } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DarkMode from "@/pages/DarkMode";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// sooner
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const user = true;
  return (
    <div className="h-16 w-full dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 right-0 left-0 duration-300 z-10 p-6">
      <div className="mx-w-7xl mx-auto hidden md:flex justify-between items-center h-full gap-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <School size={"30"}></School>
            <h1 className="font-extrabold text-2xl">E-Learning</h1>
          </div>
        </div>
        <div className="flex gap-6">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>E-Learning</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>My Learning</DropdownMenuItem>
                  <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                  <DropdownMenuItem>Log Out</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button>Signup</Button>
              <Button variant="outline">Login</Button>
            </>
          )}
          <DarkMode></DarkMode>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex justify-between items-center md:hidden h-full">
        <h1 className="font-extrabold text-2xl">E-Learning</h1>
        <MobileNavbar></MobileNavbar>
      </div>
    </div>
  );
};

export default Navbar;

const MobileNavbar = () => {
  const user = "instructor";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="outline"
          className=" rounded-full bg-gray-200"
        >
          <MenuIcon></MenuIcon>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader className="flex flex-row items-center mt-4 justify-between">
          <SheetTitle>Edit profile</SheetTitle>
          <DarkMode></DarkMode>
        </SheetHeader>
        <div className="flex flex-col space-y-4">
          <span>My Learning</span>
          <span>Edit Profile</span>
          <p>Log Out</p>
        </div>
        {user === "instructor" && (
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Dashboard</Button>
            </SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};
