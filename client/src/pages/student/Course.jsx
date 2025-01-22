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
      <CardContent>
        <h2 className="font-bold text-lg px-2 hover:underline">
          Next.js Complete Course in 2024
        </h2>
      </CardContent>
    </Card>
  );
};

export default Course;
