'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { userId } =  useAuth();


  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white py-2 shadow-md" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="font-anime text-emily-red text-2xl font-bold">
            Emily
          </span>
          <span className="font-anime text-emily-gray-dark text-xl">.ai</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <a
            href="#features"
            className="text-emily-gray-dark hover:text-emily-red font-medium transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-emily-gray-dark hover:text-emily-red font-medium transition-colors"
          >
            How It Works
          </a>
          <a
            href="#pricing"
            className="text-emily-gray-dark hover:text-emily-red font-medium transition-colors"
          >
            Pricing
          </a>
          <div className="flex space-x-4">
            {userId ? (<Button className="btn-anime" onClick={() => router.push("/dashboard")}>Dashboard</Button>):(<>
            <Button variant="outline" className="btn-anime-outline" onClick={() => router.push("/sign-in")}>
              Sign In
            </Button>
            <Button className="btn-anime" onClick={() => router.push("/sign-up")}>Sign Up</Button>
            </>) }
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-emily-gray-dark hover:text-emily-red p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="animate-slide-up absolute w-full bg-white py-4 shadow-lg md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            <a
              href="#features"
              className="text-emily-gray-dark hover:text-emily-red hover:bg-emily-gray-light rounded-md px-4 py-2 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-emily-gray-dark hover:text-emily-red hover:bg-emily-gray-light rounded-md px-4 py-2 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="text-emily-gray-dark hover:text-emily-red hover:bg-emily-gray-light rounded-md px-4 py-2 font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="flex flex-col space-y-2 pt-2">
              {userId ? (<Button className="btn-anime" onClick={() => router.push("/dashboard")}>Dashboard</Button>):(<>
              <Button variant="outline" className="btn-anime-outline w-full" onClick={() => router.push("/sign-in")}>
                Sign In
              </Button>
                <Button className="btn-anime w-full" onClick={() => router.push("/sign-up")}>Sign Up</Button>
              </>) }
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
