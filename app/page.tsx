import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF Documents",
    description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description:
      "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Backup",
    description:
      "Rest assured knowing your documents are safely backed up on the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Devices",
    description:
      "Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet, or smartphone.",
    icon: MonitorSmartphoneIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-auto p-4 lg:p-10 bg-gradient-to-bl from-white to-indigo-600">
      <section className="bg-white py-24 sm:py-32 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Text */}
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 uppercase tracking-wide">
              Your Interactive Document Companion
            </h2>
            <p className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into Interactive Conversations
            </p>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Introducing{" "}
              <span className="font-bold text-indigo-600">Chat with PDF</span>.
              <br />
              Upload your document and our chatbot will answer questions, summarize content, and turn static files into{" "}
              <span className="font-semibold text-indigo-600">dynamic conversations</span>.
              Ideal for students, professionals, and teams.
            </p>
            <Button asChild className="mt-10 px-8 py-4 text-lg rounded-lg">
              <Link href="/dashboard">🚀 Get Started</Link>
            </Button>
          </div>

          {/* Image Section */}
          <div className="relative overflow-hidden pt-20 w-full">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
              <Image
                alt="Talk2Docs UI preview"
                src="/img.png"
                width={2432}
                height={1442}
                className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Features */}
          <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="bg-gray-50 hover:bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-lg"
                >
                  <div className="flex items-center mb-4">
                    <feature.icon
                      className="h-6 w-6 text-indigo-600 mr-3"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
