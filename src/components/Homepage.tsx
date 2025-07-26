import { Link } from "wouter";

export default function Homepage() {
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl">JumboCode Vite Template</h1>
        <p>Major packages/tools included:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>React</li>
          <li>TypeScript</li>
          <li>TailwindCSS</li>
          <li>Wouter</li>
        </ul>

        <p>Pages: </p>
        <ul className="list-disc ml-8 mb-4">
          <Link href="/" className="list-item text-blue-500">
            Homepage
          </Link>
          <Link href="/users/EE" className="list-item text-blue-500">
            EE
          </Link>
        </ul>

        <p>API Routes: </p>
        <ul className="list-disc ml-8 mb-4">
          <a href="/api/hello" className="list-item text-blue-500">
            /api/hello
          </a>
          <a href="/api/users?name=E" className="list-item text-blue-500">
            /api/users?name=E
          </a>
        </ul>
      </div>
    </>
  );
}
