// import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { Icons } from './Icons'
import { buttonVariants } from './ui/Button'
// import { UserAccountNav } from './UserAccountNav'
// import SearchBar from './SearchBar'

const Navbar = /*async*/ () => {
  // const session = await getServerSession(authOptions)
  return (
    <div className="sbg-zinc-100 fixed inset-x-0 top-0 z-[10] h-fit border-b border-zinc-300 py-2">
      <div className="container flex h-full max-w-7xl items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-sm font-medium text-zinc-700 md:block">
            Breadit
          </p>
        </Link>

        {/* search bar */}
        {/* <SearchBar /> */}

        {/* actions */}
        {/* {session?.user ? ( */}
        {/* {/* // <UserAccountNav user={session.user} /> */}
        {/* ) : ( */}
        <Link href="/sign-in" className={buttonVariants()}>
          Sign In
        </Link>
        {/* )} } */}
      </div>
    </div>
  )
}

export default Navbar
