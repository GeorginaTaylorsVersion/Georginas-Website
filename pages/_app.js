import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold">My College Notes</h1>
        </div>
      </header>
      
      <main>
        <Component {...pageProps} />
      </main>
      
      <footer className="bg-white border-t mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>Notes synced from Notion to GitHub</p>
        </div>
      </footer>
    </div>
  );
}

export default MyApp; 