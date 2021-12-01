import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList";
import { AnimalProvider } from "./animal/AnimalProvider";
// import {EmployeeCard} from "./employee/EmployeeCard"

export const ApplicationViews = () => {
  return (
    <AnimalProvider>
      <Routes>
        {/* Render the location list when http://localhost:3000/ */}
        <Route path="/" element={<Home />} />
        {/* Render the animal list when http://localhost:3000/animals */}
        <Route path="animals/*" element={<AnimalList />} />
        {/* <Route path="employees/*" element={<EmployeeCard />} /> */}
      </Routes>
    </AnimalProvider>
  );
};
