import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getRequiredSession } from "@/lib/auth"

export default async function Dashboard() {
  const session = await getRequiredSession()
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white overflow-hidden">
      
    </div>
  )
}