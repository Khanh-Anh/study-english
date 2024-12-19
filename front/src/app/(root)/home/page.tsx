import HomePage from '@/pages/page-home';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study",
  description: "Study",
};

export default function Home() {
  return (
    <HomePage />
  );
}

