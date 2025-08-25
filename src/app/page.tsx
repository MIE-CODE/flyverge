"use client";
import { useAppSelector } from "@/redux/hooks";
import App from "./app";
import { Layout } from "./layouts/dafault/pag-layout";
import LandingPage from "./landing";

export default function Home() {
  const user = useAppSelector((state) => state.user);
  if (!user) {
    return <LandingPage />;
  }
  return (
    <Layout>
      <App />
    </Layout>
  );
}
