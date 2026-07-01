export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* App Icon */}
      <div
        className="
          flex h-28 w-28 items-center justify-center
          rounded-[32px]
          bg-gradient-to-br
          from-sky-500
          via-blue-600
          to-indigo-700
          shadow-xl
        "
      >
        <svg
          width="72"
          height="44"
          viewBox="0 0 72 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M4 22
              C4 10, 18 10, 28 22
              C38 34, 52 34, 68 22
              C52 10, 38 10, 28 22
              C18 34, 4 34, 4 22
            "
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand */}
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          ConnectX
        </h1>
        
         <p className="mt-2 flex items-center justify-center gap-2 text-lg text-gray-500">
          Bharat ka apna social network

            <span className="text-2xl">
               🇮🇳
            </span>
          </p> 
     </div>                              
    </div>
  );
}


