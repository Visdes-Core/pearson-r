"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Hero from "@/modules/HomeModule/Hero";
import Numbers from "@/modules/HomeModule/Numbers";
import Reviews from "@/modules/HomeModule/Reviews";
import Footer from "@/modules/Footer";

export default function Home() {
  const route = useRouter();

  useEffect(() => {
    const user = window.localStorage.getItem('token');

    if (user) {
      route.push("/"); //temporarily
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-stretch bg-[#F8F8F8]">
      <Hero />
      <Numbers />
      <Reviews />
      <Footer />
    </main>
  );
}