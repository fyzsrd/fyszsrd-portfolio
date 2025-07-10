import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6"
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-400">FYZSRD</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          I'm a front-end developer passionate about building beautiful and responsive web apps.
        </p>
        <a
          href="#projects"
          className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg transition duration-300"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;
