import { GitPullRequest, MessageSquare, Code, FileText } from "lucide-react";

const features = [
  {
    icon: <GitPullRequest className="w-12 h-12 text-emily-red" />,
    title: "GitHub Integration",
    description: "Automatically track issues, pull requests, and code reviews. Emily provides smart summaries and suggests next actions.",
    delay: "0ms"
  },
  {
    icon: <MessageSquare className="w-12 h-12 text-emily-red" />,
    title: "Meeting Assistant",
    description: "Record, transcribe, and summarize your meetings. Extract action items and create follow-up tasks automatically.",
    delay: "150ms"
  },
  {
    icon: <Code className="w-12 h-12 text-emily-red" />,
    title: "Code Analysis",
    description: "Emily analyzes your codebase to identify bugs, suggest performance improvements, and help maintain consistent coding standards.",
    delay: "300ms"
  },
  {
    icon: <FileText className="w-12 h-12 text-emily-red" />,
    title: "Documentation",
    description: "Generate and maintain documentation automatically from your codebase and meeting notes, keeping everything up-to-date.",
    delay: "450ms"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-anime font-bold text-3xl sm:text-4xl">
            <span className="text-gradient">Powerful</span> Features
          </h2>
          <p className="mt-4 text-lg text-emily-gray-dark/80 max-w-3xl mx-auto">
            Emily combines AI with anime aesthetics to deliver a unique assistant that powers up your development workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="anime-card flex flex-col items-center text-center"
              style={{ animationDelay: feature.delay }}
            >
              <div className="mb-6 p-4 bg-emily-red/10 rounded-full">
                {feature.icon}
              </div>
              <h3 className="font-anime font-semibold text-xl mb-3 text-emily-gray-dark">
                {feature.title}
              </h3>
              <p className="text-emily-gray-dark/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
