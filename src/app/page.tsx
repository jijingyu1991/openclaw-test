export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-zinc-900 dark:to-black">
      <main className="flex flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Hello World
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          Welcome to OpenClaw Test with Next.js!
        </p>
        <div className="flex gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            Next.js Docs
          </a>
          <a
            href="https://github.com/jijingyu1991/openclaw-test"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            GitHub Repo
          </a>
        </div>
      </main>
    </div>
  );
}
