const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-emily-gray-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-anime text-2xl font-bold text-emily-red">Emily</span>
              <span className="font-anime text-xl text-emily-gray-dark">.ai</span>
            </div>
            <p className="text-emily-gray-dark/80 mb-4">
              The AI-powered GitHub and meeting assistant with anime-style flair.
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="font-anime font-semibold text-lg mb-4 text-emily-gray-dark">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#changelog" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-anime font-semibold text-lg mb-4 text-emily-gray-dark">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#docs" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#tutorials" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#blog" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#support" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-anime font-semibold text-lg mb-4 text-emily-gray-dark">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-emily-gray-dark/80 hover:text-emily-red transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-emily-gray-dark/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emily-gray-dark/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Emily.ai. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="https://x.com/shams_zero" className="text-emily-gray-dark/60 hover:text-emily-red transition-colors">
              Twitter
            </a>
            <a href="https://github.com/shams03" className="text-emily-gray-dark/60 hover:text-emily-red transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
