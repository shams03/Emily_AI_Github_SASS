"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className="to-emily-gray-light relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bg-emily-red animate-pulse-soft absolute top-20 -right-10 h-64 w-64 rounded-full opacity-5"></div>
        <div
          className="bg-emily-red animate-pulse-soft absolute bottom-20 -left-20 h-80 w-80 rounded-full opacity-5"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="bg-emily-red animate-pulse-soft absolute top-1/2 left-1/3 h-40 w-40 rounded-full opacity-5"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="z-10 container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          {/* Hero Text */}
          <div className="w-full space-y-6 text-center md:w-1/2 md:text-left">
            <div className="space-y-3">
              <h1 className="font-anime text-4xl font-bold sm:text-5xl lg:text-6xl">
                Meet <span className="text-gradient">Emily</span>
              </h1>
              <h2 className="font-anime text-emily-gray-dark text-2xl font-semibold sm:text-3xl lg:text-4xl">
                Your AI GitHub & Meeting Assistant
              </h2>
            </div>

            <p className="text-emily-gray-dark/80 max-w-2xl text-lg sm:text-xl">
              Boost your development workflow and meeting productivity with
              AI-powered assistance. Emily helps you manage GitHub issues,
              analyze code, and summarize meetings with anime-style charm.
            </p>

            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row md:justify-start">
              <Button className="btn-anime px-8 py-6 text-lg" onClick={() => router.push("/sign-up")}>
                Get Started
              </Button>
              <Button
                variant="outline"
                className="btn-anime-outline px-8 py-6 text-lg"
                onClick={() => router.push("/sign-up")}
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex w-full justify-center md:w-1/2 md:justify-end">
            <div className="relative">
              <div className="bg-emily-red/10 animate-float flex h-[320px] w-[320px] items-center justify-center rounded-full sm:h-[400px] sm:w-[400px]">
                <img
                  src="/logo2.png"
                  alt="Emily AI Assistant"
                  className="relative z-10 h-[280px] w-[280px] object-contain sm:h-[350px] sm:w-[350px]"
                />
                {/* Decorative elements */}
                <div className="border-emily-red/20 animate-pulse-soft absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 sm:h-[380px] sm:w-[380px]"></div>
                <div
                  className="bg-emily-red/10 animate-pulse-soft absolute top-0 right-0 h-16 w-16 rounded-full"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="bg-emily-red/20 animate-pulse-soft absolute bottom-8 left-0 h-12 w-12 rounded-full"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
