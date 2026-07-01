export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-md">

        {/* Profile Card */}
        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <div className="flex flex-col items-center">

            <div
              className="
                flex h-28 w-28 items-center justify-center
                rounded-full
                bg-blue-600
                text-4xl
                font-bold
                text-white
              "
            >
              B
            </div>

            <h1 className="mt-6 text-3xl font-bold">
              Binaya
            </h1>

            <p className="mt-2 text-gray-500">
              @binaya
            </p>

            <p className="mt-6 text-center text-gray-600">
              Future DevOps Engineer 🚀
            </p>

            <button
              className="
                mt-8
                rounded-xl
                bg-blue-600
                px-8
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-700
              "
            >
              Edit Profile
            </button>

          </div>

        </div>

      </div>
    </main>
  );
}
