'use client';
import React, { useState, useEffect } from 'react';
import { Code2, Terminal, Database, Settings, Server, Box } from 'lucide-react';

const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="font-mono">{displayText}<span className="animate-pulse">|</span></span>
  );
};

const TerminalWindow = ({ children }) => (
  <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
    <div className="flex items-center px-4 py-2 bg-gray-800">
      <div className="flex space-x-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
    </div>
    <div className="p-4 font-mono text-sm">{children}</div>
  </div>
);

const ByteBuildersLogo = () => (
  <div className="relative group">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300">
      <rect width="50" height="50" className="fill-current text-gray-900" />
      <rect x="10" y="5" width="5" height="5" className="fill-current text-green-400" />
      <rect x="10" y="10" width="5" height="5" className="fill-current text-green-400" />
      <rect x="10" y="15" width="5" height="5" className="fill-current text-green-400" />
      <rect x="10" y="20" width="5" height="5" className="fill-current text-green-400" />
      <rect x="10" y="25" width="5" height="5" className="fill-current text-green-400" />
      <rect x="15" y="15" width="5" height="5" className="fill-current text-green-400" />
      <rect x="20" y="15" width="5" height="5" className="fill-current text-green-400" />
      <rect x="25" y="20" width="5" height="5" className="fill-current text-green-400" />
      <rect x="15" y="25" width="5" height="5" className="fill-current text-green-400" />
      <rect x="20" y="25" width="5" height="5" className="fill-current text-green-400" />
    </svg>
  </div>
);

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/80 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <ByteBuildersLogo />
              <div className="font-mono text-green-400 text-xl">&gt; byte_builders</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['./about', './mission', './programs', './contact'].map((item) => (
                <a key={item} href={`#${item.slice(2)}`} className="font-mono text-gray-400 hover:text-green-400 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <TerminalWindow>
              <div className="space-y-4">
                <div className="text-green-400">
                  <TypewriterText text=">>> Build Your Future, One Byte at a Time!" />
                </div>
                <div className="text-blue-400">
                  <TypewriterText text="# Vision" />
                </div>
                <div className="text-gray-300 pl-4" style={{ wordWrap: 'break-word' }}>
                  Empowering the next generation of software engineers, guiding them from fresh talent to seasoned leaders, one byte at a time.
                </div>
                <div className="text-blue-400 mt-6">
                  <TypewriterText text="# Mission" />
                </div>
                <div className="text-gray-300 pl-4 space-y-2 text-left">
                  <div>class ByteBuilders:</div>
                  <div className="pl-4">"""</div>
                  <div className="pl-8" style={{ wordWrap: 'break-word' }}>
                    Byte Builders is dedicated to transforming individuals into skilled software engineers through continuous learning, hands-on experience, and mentorship.
                  </div>
                  <div className="pl-8" style={{ wordWrap: 'break-word' }}>
                    Our goal is to nurture fresh talent into experts, leaders, and innovators, creating a culture of growth and excellence in the tech industry.
                  </div>
                  <div className="pl-8" style={{ wordWrap: 'break-word' }}>
                    We believe in the journey of self-improvement, equipping each individual to be a ninja in their role, advancing with purpose and confidence.
                  </div>
                  <div className="pl-4">"""</div>
                </div>
              </div>
            </TerminalWindow>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <button className="bg-green-500 hover:bg-green-600 text-gray-900 font-mono py-3 px-8 rounded-lg">
                $ join_community()
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Terminal,
                title: "Hands-on Development",
                desc: "Real-world projects and coding challenges"
              },
              {
                icon: Code2,
                title: "Collaborative Learning",
                desc: "Team-based development and code reviews"
              },
              {
                icon: Database,
                title: "Full Stack Excellence",
                desc: "From frontend to backend mastery"
              },
              {
                icon: Settings,
                title: "System Architecture",
                desc: "Design scalable and efficient systems"
              },
              {
                icon: Server,
                title: "DevOps Practices",
                desc: "Modern deployment and automation"
              },
              {
                icon: Box,
                title: "Software Craftsmanship",
                desc: "Best practices and clean code"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-lg border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition-all hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-mono text-green-400 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Stats Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Projects Completed", value: "500+" },
              { label: "Active Mentors", value: "50+" },
              { label: "Success Rate", value: "95%" },
              { label: "Community Members", value: "1000+" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-mono text-green-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-mono text-green-400 mb-4"># Connect</h3>
              <div className="space-y-2 text-gray-400">
                {['GitHub', 'Discord', 'Stack Overflow', 'Dev.to'].map((platform) => (
                  <div key={platform} className="hover:text-green-400 cursor-pointer transition-colors">
                    $ {platform.toLowerCase()}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-green-400 mb-4"># Resources</h3>
              <div className="space-y-2 text-gray-400">
                {['Documentation', 'Tutorials', 'Blog', 'FAQ'].map((resource) => (
                  <div key={resource} className="hover:text-green-400 cursor-pointer transition-colors">
                    $ {resource.toLowerCase()}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-green-400 mb-4"># Programs</h3>
              <div className="space-y-2 text-gray-400">
                {['Web Dev', 'Mobile', 'Cloud', 'AI/ML'].map((program) => (
                  <div key={program} className="hover:text-green-400 cursor-pointer transition-colors">
                    $ {program.toLowerCase()}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-mono text-green-400 mb-4"># Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div>support@bytebuilders.dev</div>
                <div>github.com/bytebuilders</div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <code>/* © 2025 Byte Builders. All rights reserved. */</code>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;