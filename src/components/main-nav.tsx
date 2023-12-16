import { getRequiredSession } from "@/lib/auth"
  
  
export default async function UserNav() {

    const session = await getRequiredSession()

    if (!session?.user) {
        return <p>No user</p>
    }

    return (
        <div className="navbar bg-base-100">
        <div className="flex-1">
            <img className=" w-12 h-12" src="https://cdn.discordapp.com/attachments/1175562014135959628/1184985722424410212/DeepLink.png?ex=658df6f4&is=657b81f4&hm=112caff6efa7ee3241aaef11affc933021750b5a3c878c7a65ef6bc3e82f0e8f&" alt="" />
          <a className="btn btn-ghost text-xl">Deeplink</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={session.user.image} />
              </div>
            </div>
            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }