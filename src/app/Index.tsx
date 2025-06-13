
"use client"
import Navbar from "@/app/_components/Navbar";
import HeroSection from "@/app/_components/HeroSection";
import FeaturesSection from "@/app/_components/FeaturesSection";
import Footer from "@/app/_components/Footer";
import Head from "next/head";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <section id="how-it-works" className="bg-emily-gray-light py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-anime text-3xl font-bold sm:text-4xl">
              How <span className="text-gradient">Emily</span> Works
            </h2>
            <p className="text-emily-gray-dark/80 mx-auto mt-4 max-w-3xl text-lg">
              Emily integrates seamlessly with your workflow to provide
              intelligent assistance
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Steps */}
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="w-full rounded-lg bg-white p-6 shadow-md md:w-1/3">
                  <div className="bg-emily-red/10 flex aspect-square w-full items-center justify-center rounded-lg">
                    <span className="font-anime text-emily-red text-8xl font-bold">
                      1
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="font-anime text-emily-gray-dark mb-2 text-2xl font-semibold">
                    Connect Your Accounts
                  </h3>
                  <p className="text-emily-gray-dark/80">
                    Link Emily to your GitHub repositories and calendar. Emily
                    securely integrates with your existing tools to start
                    collecting data and providing insights.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center gap-8 md:flex-row-reverse">
                <div className="w-full rounded-lg bg-white p-6 shadow-md md:w-1/3">
                  <div className="bg-emily-red/10 flex aspect-square w-full items-center justify-center rounded-lg">
                    <span className="font-anime text-emily-red text-8xl font-bold">
                      2
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="font-anime text-emily-gray-dark mb-2 text-2xl font-semibold">
                    Emily Learns Your Workflow
                  </h3>
                  <p className="text-emily-gray-dark/80">
                    As you work, Emily observes patterns in your code and
                    meetings to provide increasingly personalized assistance
                    that matches your unique development and communication
                    style.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center gap-8 md:flex-row">
                <div className="w-full rounded-lg bg-white p-6 shadow-md md:w-1/3">
                  <div className="bg-emily-red/10 flex aspect-square w-full items-center justify-center rounded-lg">
                      <span className="font-anime text-emily-red text-8xl font-bold">
                      3
                    </span>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="font-anime text-emily-gray-dark mb-2 text-2xl font-semibold">
                    Receive Intelligent Assistance
                  </h3>
                  <p className="text-emily-gray-dark/80">
                    Emily provides real-time suggestions, automated
                    documentation, meeting summaries, and actionable insights to
                    boost your productivity and code quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section Mockup */}
      <section id="pricing" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-anime text-3xl font-bold sm:text-4xl">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h2>
            <p className="text-emily-gray-dark/80 mx-auto mt-4 max-w-3xl text-lg">
              Choose the plan that best fits your needs. All plans include core
              features.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mx-auto flex max-w-5xl flex-col gap-8 lg:flex-row">
            {/* Free Plan */}
            <div className="border-emily-gray-light hover:border-emily-red/30 flex-1 rounded-lg border bg-white p-8 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 text-center">
                <h3 className="font-anime text-emily-gray-dark text-2xl font-bold">
                  Free
                </h3>
                <div className="mt-4">
                  <span className="font-anime text-4xl font-bold">$0</span>
                  <span className="text-emily-gray-dark/60">/month</span>
                </div>
                <p className="text-emily-gray-dark/80 mt-2">
                  For individual developers
                </p>
              </div>

              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Basic GitHub integration
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Meeting summaries (5/month)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Simple documentation
                  </span>
                </li>
              </ul>

              <button className="border-emily-red text-emily-red font-anime hover:bg-emily-red/5 w-full rounded-md border-2 bg-white px-4 py-2 font-medium transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="border-emily-red relative flex-1 rounded-lg border-2 bg-white p-8 shadow-lg">
              <div className="bg-emily-red font-anime absolute top-0 right-0 rounded-tr-lg rounded-bl-lg px-4 py-1 text-sm text-white">
                POPULAR
              </div>

              <div className="mb-6 text-center">
                <h3 className="font-anime text-emily-gray-dark text-2xl font-bold">
                  Pro
                </h3>
                <div className="mt-4">
                  <span className="font-anime text-4xl font-bold">$29</span>
                  <span className="text-emily-gray-dark/60">/month</span>
                </div>
                <p className="text-emily-gray-dark/80 mt-2">
                  For professional developers
                </p>
              </div>

              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Advanced GitHub integration
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Unlimited meeting summaries
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Advanced code analysis
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Comprehensive documentation
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Priority support
                  </span>
                </li>
              </ul>

              <button className="bg-emily-red font-anime hover:bg-emily-red-light w-full rounded-md px-4 py-2 font-medium text-white transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Team Plan */}
            <div className="border-emily-gray-light hover:border-emily-red/30 flex-1 rounded-lg border bg-white p-8 transition-all duration-300 hover:shadow-lg">
              <div className="mb-6 text-center">
                <h3 className="font-anime text-emily-gray-dark text-2xl font-bold">
                  Team
                </h3>
                <div className="mt-4">
                  <span className="font-anime text-4xl font-bold">$79</span>
                  <span className="text-emily-gray-dark/60">/month</span>
                </div>
                <p className="text-emily-gray-dark/80 mt-2">
                  For development teams
                </p>
              </div>

              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Everything in Pro
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Team collaboration features
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Advanced analytics
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Custom integrations
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-emily-red">✓</span>
                  <span className="text-emily-gray-dark/80 ml-2">
                    Dedicated account manager
                  </span>
                </li>
              </ul>

              <button className="border-emily-red text-emily-red font-anime hover:bg-emily-red/5 w-full rounded-md border-2 bg-white px-4 py-2 font-medium transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emily-red  text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-anime font-bold text-3xl sm:text-4xl mb-6">
            Ready to Level Up Your Development?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of developers who are boosting their productivity with Emily&apos;s AI-powered assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emily-red font-anime font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-opacity-90" onClick={() => router.push("/sign-up")}>
              Sign Up Now
            </button>
            <button className="bg-transparent border-2 border-white text-white font-anime font-medium py-3 px-8 rounded-md transition-all duration-300 hover:bg-white hover:bg-opacity-10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Index;