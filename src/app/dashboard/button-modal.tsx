"use client"

import React, { useState } from "react";

export default function LinkForm() {
  const [linkName, setLinkName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    // Récupérer les données du formulaire
    const formData = {
      linkName,
      isPublic,
    };

    // Appeler la fonction de soumission fournie par les props
   console.log(formData)

    // Réinitialiser les champs du formulaire
    setLinkName("");
    setIsPublic(false);

    // Appeler la fonction de fermeture fournie par les props
  };

  return (
    <form onSubmit={handleSubmit} method="dialog">
      <label htmlFor="linkName" className="block text-sm font-medium text-gray-700">
        Link Name
      </label>
      <input
        type="text"
        id="linkName"
        value={linkName}
        onChange={(e) => setLinkName(e.target.value)}
        className="mt-1 p-2 w-full border rounded-md"
      />

      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="public"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
          className="h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300 rounded"
        />
        <label htmlFor="public" className="ml-2 text-sm text-gray-700">
          Public
        </label>
      </div>

      <div className="modal-action">
        <button
          type="submit"
          className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        <button type="button" className="btn">
          Close
        </button>
      </div>
    </form>
  );
}
