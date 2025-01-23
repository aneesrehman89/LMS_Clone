import React from "react";
import Course from "./Course";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Loader2 } from "lucide-react";

const Profile = () => {
  const isLoading = false;
  const myLearningCourses = [1, 2];
  return (
    <div className="max-w-4xl mx-auto my-24">
      <h1 className="font-bold text-2xl text-center md:text-left">PROFILE</h1>
      <h1 className="font-bold text-2xl text-center md:text-left">PROFILE</h1>
      <div className="my-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 my-5">
          <div className="flex items-center gap-10">
            <Avatar className="h-24 w-24 md:h-32 md:w-32">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="rounded-full"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="mb-2">
                <h1 className="font-semibold text-gray-900 dark:text-gray-100">
                  Name:
                  <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                    Anees MernStack
                  </span>
                </h1>
              </div>
              <div className="mb-2">
                <h1 className="font-semibold text-gray-900 dark:text-gray-100">
                  gmail:
                  <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                    anees@gmail.com
                  </span>
                </h1>
              </div>
              <div className="mb-2">
                <h1 className="font-semibold text-gray-900 dark:text-gray-100">
                  Role:
                  <span className="font-normal text-gray-700 dark:text-gray-300 ml-2">
                    INSTRUCTOR
                  </span>
                </h1>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="bg-black text-white mt-2"
                    variant="outline"
                  >
                    Edit Profile
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input id="name" value="Name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Profile Photo
                      </Label>
                      <Input
                        type="file"
                        accept="image/*"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Please Wait
                        </>
                      ) : (
                        "Save changes"
                      )}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="px-4">
          <h1 className="font-medium text-lg text-center md:text-left">Courses you are enrolled in</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5">
            {myLearningCourses.map((course, index) => (
              <Course key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
