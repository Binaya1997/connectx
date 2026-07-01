export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold">
            Namaste 🙏
          </h1>

          <p className="mt-3 text-gray-500">
            Join ConnectX and start connecting
          </p>
        </div>

        <form className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-blue-600
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-blue-600
              "
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              placeholder="Create password"
              className="
                w-full
                rounded-xl
                border
                border-gray-300
                px-4
                py-3
                outline-none
                focus:border-blue-600
              "
            />
          </div>

          <button
            type="button"
            className="
              w-full
              rounded-xl
              bg-blue-600
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
            "
          >
            Create Account
          </button>

        </form>

        <p className="mt-8 text-center text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="font-semibold text-blue-600"
          >
            Login
          </a>
        </p>

      </div>
    </main>
  );
}
