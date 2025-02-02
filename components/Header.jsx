import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { LayoutDashboardIcon, PenBox } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
import ThemeToggle from "./ThemeToggle";

const Header = async () => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full dark:bg-gray-900/20 bg-gray-50/20  backdrop-blur border-b z-50">
      <nav className="container mx-auto py-4 px-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/budgetiqLogo.svg"
            alt="budgetiq logo"
            width={1000}
            height={1000}
            priority
            className="w-auto h-32 -mx-2 -my-6 object-contain"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <div className="mx-2 flex justify-center items-center">
            <ThemeToggle />
          </div>
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button variant="outline">
                <LayoutDashboardIcon size={18} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link
              href="/transaction/create"
              className="text-gray-600 hover:text-blue-600 flex items-center gap-2"
            >
              <Button>
                <PenBox size={18} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton appearance={{ elements: { avatarBox: "h-10 w-10" } }} />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
