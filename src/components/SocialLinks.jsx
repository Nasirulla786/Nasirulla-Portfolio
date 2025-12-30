import React from "react";
import {
  Linkedin,
  Github,
  Instagram,
  Youtube,
  ExternalLink
} from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/nasirulla/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@Nasirulla ",
    icon: Instagram,
    url: "https://www.instagram.com/code_with_razz",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]"
  },
  {
    name: "YouTube",
    displayName: "YouTube",
    subText: "@Nasirulla ",
    icon: Youtube,
    url: "https://www.youtube.com/@CodyBuilding",
    color: "#FF0000",
    gradient: "from-[#FF0000] to-[#CC0000]"
  },
  {
    name: "GitHub",
    displayName: "GitHub",
    subText: "@Nasirulla",
    icon: Github,
    url: "https://github.com/Nasirulla786",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]"
  }
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find(link => link.isPrimary);
  const otherLinks = socialLinks.filter(link => !link.isPrimary);
  const [instagram, youtube, github] = otherLinks;

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full" />
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
        >
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                        bg-gradient-to-r ${linkedIn.gradient}`}
          />

          <div className="relative flex items-center gap-4">
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                           group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-200 group-hover:text-white">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white
                                  opacity-0 group-hover:opacity-100 transition-all" />
        </a>

        {/* Instagram & YouTube */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[instagram, youtube].map(link => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl
                         bg-white/5 border border-white/10 overflow-hidden
                         hover:border-white/20 transition-all duration-500"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20
                               bg-gradient-to-r ${link.gradient}`} />

              <div className="relative p-2 rounded-lg">
                <link.icon
                  className="w-5 h-5"
                  style={{ color: link.color }}
                />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate">
                  {link.subText}
                </span>
              </div>

              <ExternalLink className="ml-auto w-4 h-4 text-gray-500
                                     opacity-0 group-hover:opacity-100" />
            </a>
          ))}
        </div>

        {/* GitHub */}
        <a
          href={github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-4 rounded-xl
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
        >
          <div className={`absolute inset-0 opacity-0 group-hover:opacity-20
                           bg-gradient-to-r ${github.gradient}`} />

          <div className="relative p-2 rounded-lg">
            <github.icon className="w-5 h-5 text-white" />
          </div>

          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-gray-200 group-hover:text-white">
              {github.displayName}
            </span>
            <span className="text-xs text-gray-400 truncate">
              {github.subText}
            </span>
          </div>

          <ExternalLink className="ml-auto w-4 h-4 text-gray-500
                                 opacity-0 group-hover:opacity-100" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
