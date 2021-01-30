import React from "react";


export default function Home() {
  return (
    <main>
      <img
        alt="some background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
         Hi I am Nilesh Pai
        </h1>
      </section>
    </main>
  );
}
