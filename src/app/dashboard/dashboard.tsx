// pages/dashboard.tsx
import React from "react";
import { getRequiredSession } from "@/lib/auth";

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<DashboardProps> = async ({ children }) => {
  const session = await getRequiredSession();
  console.log(session);

  return (
    <div className="flex flex-col w-full h-screen bg-black text-white overflow-hidden">
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Create a link</h3>
          <div className="py-4">{children}</div>
        </div>
      </dialog>
    </div>
  );
};

export default Dashboard;

