import React, { useEffect, memo } from "react";
import {
  Code2,
  Trophy,
  Dumbbell,
  Gamepad2,
  GraduationCap,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Section = ({ title, icon: Icon, children }) => (
  <div
    className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-4">
      <Icon className="w-5 h-5 text-indigo-400" />
      {title}
    </h3>
    {children}
  </div>
);

const LinkCard = ({ name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between p-4 rounded-xl
               bg-white/5 border border-white/10
               hover:border-white/20 hover:scale-[1.02]
               transition-all duration-300"
  >
    <span className="text-gray-300">{name}</span>
    <ExternalLink className="w-4 h-4 text-gray-400" />
  </a>
);

const Details = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div
      className="min-h-screen px-[5%] lg:px-[10%] py-16 text-white overflow-hidden"
      id="Details"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2
          className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text
                     bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
          data-aos="zoom-in"
        >
          More About Me
        </h2>
        <p
          className="mt-3 text-gray-400 flex justify-center items-center gap-2"
          data-aos="fade-up"
        >
          <Sparkles className="w-4 h-4 text-purple-400" />
          Skills, Passion & Beyond Coding
          <Sparkles className="w-4 h-4 text-purple-400" />
        </p>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Coding Platforms */}
        <Section title="Coding Platforms" icon={Code2}>
          <div className="space-y-3">
            <LinkCard name="LeetCode" url="https://leetcode.com/u/Nasirulla/" />
            <LinkCard name="HackerRank" url="https://www.hackerrank.com/profile/rehmannasirulla1" />
            <LinkCard name="GeeksforGeeks" url="https://www.geeksforgeeks.org/profile/rehmannasieg6e" />
         
          </div>
        </Section>

        {/* Extracurricular */}
        <Section title="Extracurricular Activities" icon={GraduationCap}>
          <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
            <li>• Prototype Manager at <span className="text-indigo-400">Tinkering Lab</span></li>
            <li>• Participated in <span className="text-indigo-400">10+ Hackathons & Ideathons</span></li>
            <li>• Active member of college <span className="text-indigo-400">Cultural Committee</span></li>
          </ul>
        </Section>

        {/* Sports */}
        <Section title="Sports & Fitness" icon={Dumbbell}>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• Powerlifting Enthusiast</li>
            <li>• Competitive Arm Wrestler</li>
            <li>• Focus on strength, discipline & consistency</li>
          </ul>
        </Section>

        {/* Hobbies */}
        <Section title="Hobbies & Interests" icon={Gamepad2}>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>• Teaching & Mentoring</li>
            <li>• Gaming</li>
            <li>• Rubik’s Cube Solver</li>
            <li>• Modeling & Ramp Walk</li>
          </ul>
        </Section>

        {/* Achievements Highlight */}
        <div
          className="lg:col-span-2 bg-gradient-to-r from-[#6366f1]/20 to-[#a855f7]/20
                     border border-white/10 rounded-2xl p-8 text-center"
          data-aos="zoom-in-up"
        >
          <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
          <h3 className="text-xl font-semibold mb-2">
            Balanced Developer Mindset
          </h3>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Combining strong technical skills, leadership experience, physical
            fitness, and creative hobbies to grow as a well-rounded developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(Details);
