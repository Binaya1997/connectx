import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <Logo />

      <button
        className="
          mt-12
          rounded-xl
          bg-black
          px-8
          py-4
          text-white
          transition
          hover:scale-105
        "
      >
        Get Started
      </button>
    </main>
  );
}
