import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Course = () => {
  return (
    <Card className="overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
      <div className="relative">
        <img
          src="https://img-c.udemycdn.com/course/750x422/3873464_403c_3.jpg"
          alt="not found"
          className="w-full h-36 object-cover rounded-t-lg"
        />
      </div>
      <CardContent className="mt-2">
        <h2 className="font-bold text-lg px-2 hover:underline">
          Next.js Complete Course in 2024
        </h2>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h1 className="text-sm font-medium">Anees Mernstack</h1>
          </div>
          <Badge className={'rounded bg-blue-600'}>Advance</Badge>
        </div>
        <h1 className="font-bold text-lg text-left mt-4">499₹</h1>
      </CardContent>
    </Card>
  );
};

export default Course;
