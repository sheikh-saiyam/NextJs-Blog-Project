import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import MobileNavbar from "./MobileNavbar";

const Navbar = async () => {
  // Get user --->
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="py-4 border-b-2">
      <div className="navbar bg-base-100 px-2">
        <div className="flex-1">
          <Link href="/" prefetch={true}>
            <Image
              src="/next.svg"
              alt="Next.js logo"
              width={100}
              height={150}
            />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="flex gap-6 items-center">
            <Link
              href={"/"}
              prefetch={true}
              className={"font-semibold hover:underline hidden sm:flex"}
            >
              Home
            </Link>
            <Link
              href={"/blogs"}
              prefetch={true}
              className={"font-semibold hover:underline hidden sm:flex"}
            >
              Blogs
            </Link>
            <Link
              href={user ? "/profile" : "/api/auth/login"}
              className={"font-semibold hover:underline hidden sm:flex"}
            >
              Profile
            </Link>
            {/* Mobile Navbar */}
            <ul className="flex sm:hidden">
              <MobileNavbar user={user} />
            </ul>
            {/* Mobile Navbar */}
            {user ? (
              <>
                <LogoutLink postLogoutRedirectURL="/">
                  <Button>Logout</Button>
                </LogoutLink>
              </>
            ) : (
              <LoginLink>
                <Button>Login</Button>
              </LoginLink>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
