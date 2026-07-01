export default function EditProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-md">

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold">
              Edit Profile
            </h1>

            <p className="mt-2 text-gray-500">
              Update your profile information
            </p>
          </div>

          <form className="space-y-6">

            <div>
              <label className="mb-2 block text-sm font-medium">
                Username
              </label>

              <input
                type="text"
                defaultValue="binaya"
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
                Bio
              </label>

              <textarea
                rows={4}
                defaultValue="Future DevOps Engineer 🚀"
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
              Save Changes
            </button>

          </form>

        </div>

      </div>
    </main>
  );
}
