import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-accent rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-accent text-2xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href={`mailto:${portfolioData.email}`} className="text-gray-400 hover:text-accent transition">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaGithub className="text-accent text-2xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                    github.com/thapelooliphant
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaLinkedin className="text-accent text-2xl mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition">
                    linkedin.com/in/thapelo-oliphant
                  </a>
                </div>
              </div>

              <div className="bg-primary p-6 rounded-lg border border-accent/20 mt-8">
                <p className="text-gray-300">
                  I'm always open to new opportunities and interesting projects. Feel free to reach out if you'd like to collaborate or just chat!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary border border-accent/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-primary border border-accent/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-primary border border-accent/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-accent text-dark font-bold py-3 rounded-lg hover:bg-accent/90 transition transform hover:scale-105"
              >
                Send Message
              </button>

              {submitted && (
                <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-center">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
