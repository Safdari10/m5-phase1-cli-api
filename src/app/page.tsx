export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center drop-shadow-sm">
        Welcome to the Auction Platform
      </h1>
      <div className="w-full max-w-2xl">
        <SearchBar />
      </div>
    </main>
  );
}
