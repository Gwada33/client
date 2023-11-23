import { LogoutButton } from "@/lib/LogoutButton";
import { User } from "@/lib/User";
import { getRequiredSession } from "@/lib/auth";

export default async function Dashboard() {
  const session = await getRequiredSession()
  return (<>
    <h1>You are logged in</h1>
    <User />
    <LogoutButton />
    </>
  )
}
