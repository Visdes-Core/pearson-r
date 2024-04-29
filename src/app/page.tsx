"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Hero from "../components/Home-Hero";
import Numbers from "../components/Home-Numbers";
import Reviews from "../components/Home-Reviews";
import Footer from "../components/Footer";

export default function Home() {
//   const user = useAppSelector((state) => state.user);
//   const route = useRouter();

//   useEffect(() => {
//     if (user.token) {
//       route.push("/dashboard");
//     }
//   }, [user.token]);

  return (
    <main className="flex min-h-screen flex-col items-stretch bg-[#F8F8F8]">
      <Hero />
      <Numbers />
      <Reviews />
      <Footer />
    </main>
  );
}