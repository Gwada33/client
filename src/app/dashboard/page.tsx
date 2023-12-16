"use client"
// Autre composant ou page
import React from "react";
import Dashboard from "@/app/dashboard/dashboard";
import ButtonCreate from "./button-create";

const Dasboard: React.FC = () => {
  return (
    <Dashboard>
        <ButtonCreate />
    </Dashboard>
  );
};

export default Dasboard;
