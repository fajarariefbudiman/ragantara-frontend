import React from "react";
import { ChevronRight } from "lucide-react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

const About = () => {
  const teamMembers = [
    { name: "Sarah Johnson", role: "Founder & CEO", image: "/api/placeholder/300/300" },
    { name: "David Chen", role: "Creative Director", image: "/api/placeholder/300/300" },
    { name: "Maria Garcia", role: "Head of Design", image: "/api/placeholder/300/300" },
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "50k+", label: "Happy Customers" },
    { value: "100+", label: "Fashion Brands" },
    { value: "25+", label: "Store Locations" },
  ];

  return (
    <div className="bg-emerald-50 min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[400px] mb-16">
        <img
          src="/api/placeholder/1920/400"
          alt="About Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">About Ragantara</h1>
            <p className="text-lg text-white max-w-2xl">Discover our journey in creating exceptional fashion experiences for our valued customers.</p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-serif text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">Founded in 2014, Ragantara has grown from a small boutique to a leading fashion destination. We're dedicated to providing high-quality fashion that empowers individuals to express their unique style.</p>
            <button className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors flex items-center">
              Learn More <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="relative h-[400px]">
            <img
              src="/api/placeholder/600/400"
              alt="Our Story"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg overflow-hidden shadow-sm group"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Vision</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            To revolutionize the fashion industry by providing sustainable, high-quality clothing that empowers individuals to express their unique style while maintaining our commitment to ethical practices and customer satisfaction.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
