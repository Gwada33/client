
import React from "react";

import Image from "next/image";
import { LogoutButton } from "./LogoutButton";
import { getRequiredSession } from "./auth";

export const  User = async () => {

    const session = await getRequiredSession()

    if (!session?.user) {
        return <p>No user</p>
    }
    return (
        <div className="avatar">
  <div>
          <Image
            width={100}
            height={100}
            priority
            alt={session.user.name ?? "user"}
            quality={100}
            className="rounded-full"
            src={session.user.image ?? "https://previews.123rf.com/images/archivector/archivector2104/archivector210400011/169173886-signe-graphique-d-avatar-d-homme-signe-de-profil-masculin-anonyme-dans-le-cercle-isol%C3%A9-sur-fond.jpg"}
          />
    <p>{session.user.name ?? ""}</p>
    <p>{session.user.email ?? ""}</p>
    <p>{session.user.id ?? ""}</p>
  </div>
  <LogoutButton />
</div>

    )
}