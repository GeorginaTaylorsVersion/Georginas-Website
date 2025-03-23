import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6">404 - Page Not Found</h1>
      <p className="mb-6">Sorry, the page you are looking for doesn't exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Return to home page
      </Link>
    </div>
  );
} 