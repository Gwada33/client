import { LogoutButton } from "@/lib/LogoutButton";
import { User } from "@/lib/User";
import { getRequiredSession } from "@/lib/auth";

import React from 'react';

const LinkCard = ({ link }) => {
  return (
    <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg mx-2 my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{link.title}</div>
        <p className="text-gray-700 text-base">{link.url}</p>
      </div>
    </div>
  );
};


export default async function Dashboard() {
  const links = [
    { id: 1, title: 'GitHub', url: 'https://github.com/votre-username' },
    { id: 2, title: 'LinkedIn', url: 'https://www.linkedin.com/in/votre-username' },
    // Ajoutez d'autres liens au besoin...
  ];
  
  const session = await getRequiredSession()
  return (<>
    <h1>You are logged in</h1>
    <LogoutButton />

    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </div>
    </div>    
    </>
  )
}

// components/LinkCard.js