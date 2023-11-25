import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getRequiredSession } from "@/lib/auth"

export default async function Dashboard() {
  const session = await getRequiredSession()
  return (
    <div className="flex flex-col w-full min-h-screen bg-black text-white overflow-hidden">
      <header className="flex items-center h-16 px-4 border-b border-[#333] md:px-6">
        <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
          <IconLink2 className="w-6 h-6 text-[#0ea5e9]" />
          <span className="text-gradient bg-gradient-to-r from-[#0ea5e9] to-[#34D399]">LinkTree</span>
        </Link>
        <div className="flex items-center ml-auto gap-4 md:gap-2 lg:gap-4">
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-row flex-1 min-h-[calc(100vh_-_theme(spacing.16))] p-4 md:p-10 bg-black">
        <div className="flex flex-col gap-4 w-1/2">
          <img
            alt="Screen Visualization"
            className="w-full rounded-lg"
            height="500"
            src="/placeholder.svg"
            style={{
              aspectRatio: "1000/500",
              objectFit: "cover",
            }}
            width="1000"
          />
        </div>
        <div className="flex flex-col gap-4 w-1/2">
          <form className="flex flex-col gap-4 bg-black rounded-lg p-4">
            <h2 className="text-2xl font-semibold text-gradient bg-gradient-to-r from-[#0ea5e9] to-[#34D399]">
              Add New Link
            </h2>
            <input className="px-3 py-2 rounded text-white text-lg" placeholder="Link Title" type="text" />
            <input className="px-3 py-2 rounded text-white text-lg" placeholder="Link URL" type="url" />
            <Button className="px-4 py-2 rounded bg-[#0ea5e9] text-white text-lg" type="submit">
              Add Link
            </Button>
          </form>
          <div className="flex flex-col gap-4 bg-black rounded-lg p-4 mt-4 border-t-2 border-[#333]">
            <h2 className="text-2xl font-semibold text-gradient bg-gradient-to-r from-[#0ea5e9] to-[#34D399]">Links</h2>
            <div className="flex flex-col gap-2">
              <a className="px-3 py-2 rounded bg-[#444] text-white flex items-center gap-2 text-lg" href="#">
                <IconLink className="w-6 h-6 text-[#0ea5e9]" />
                <span className="text-gradient bg-gradient-to-r from-[#0ea5e9] to-[#34D399]">Link Title</span>
              </a>
              <a className="px-3 py-2 rounded bg-[#444] text-white flex items-center gap-2 text-lg" href="#">
                <IconLink className="w-6 h-6 text-[#0ea5e9]" />
                <span className="text-gradient bg-gradient-to-r from-[#0ea5e9] to-[#34D399]">Link Title</span>
              </a>
              <a className="px-3 py-2 rounded bg-[#444] text-white flex items-center gap-2 text-lg" href="#">
                <IconLink className="w-6 h-6 text-[#0ea5e9]" />
                <span className="text-gradient bg-gradient-to-r from-[#0ea5e9] to-[#34D399]">Link Title</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function IconLink(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}


function IconLink2(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 17H7A5 5 0 0 1 7 7h2" />
      <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
      <line x1="8" x2="16" y1="12" y2="12" />
    </svg>
  )
}
