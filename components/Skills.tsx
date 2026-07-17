import React from 'react';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-accent rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.technical.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary px-4 py-2 rounded-lg text-white font-semibold hover:bg-accent hover:text-dark transition transform hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {portfolioData.skills.soft.map((skill, index) => (
                <div
                  key={index}
                  className="bg-accent/20 border border-accent px-4 py-2 rounded-lg text-white font-semibold hover:bg-accent hover:text-dark transition transform hover:scale-105"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expertise Overview */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-secondary/50 p-6 rounded-lg border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">3+</div>
            <p className="text-gray-300">Years of Experience</p>
          </div>
          <div className="bg-secondary/50 p-6 rounded-lg border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <p className="text-gray-300">Technologies Mastered</p>
          </div>
          <div className="bg-secondary/50 p-6 rounded-lg border border-accent/20">
            <div className="text-4xl font-bold text-accent mb-2">10+</div>
            <p className="text-gray-300">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
