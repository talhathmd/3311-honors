'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaChartBar, FaRocket } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4 text-center">
        🚀 Deploy Your First Next.js App with Vercel
      </h1>
      <p className="text-center text-lg text-gray-600 mb-10">
        A beginner-friendly & cheerful guide to get your project online in minutes.
      </p>

      <div className="space-y-10">
        {/* Table of Contents */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaArrowRight /> Table of Contents
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-lg">
            <li><Link href="#setup" className="text-blue-600 hover:text-blue-800 transition">Setting up a Next.js Project</Link></li>
            <li><Link href="#github" className="text-blue-600 hover:text-blue-800 transition">Pushing to GitHub</Link></li>
            <li><Link href="#vercel" className="text-blue-600 hover:text-blue-800 transition">Deploying to Vercel</Link></li>
            <li><Link href="#analytics" className="text-blue-600 hover:text-blue-800 transition">Adding Vercel Analytics</Link></li>
          </ol>
        </motion.section>

        {/* Section 1 */}
        <motion.section
          id="setup"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaArrowRight /> 1. Setting up a Next.js Project ⚙️
          </h2>
          <p className="mb-4">Open your terminal and run this command:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            npx create-next-app@latest my-nextjs-app --typescript --tailwind --eslint
          </pre>
          <p className="mt-4 text-sm text-gray-600">
            Once done, navigate into the project and start the dev server:
          </p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            cd my-nextjs-app
            <br />
            npm install
            <br />
            npm run dev
          </pre>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          id="github"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaGithub /> 2. Pushing to GitHub 💻
          </h2>
          <p className="mb-4">Let’s get it on GitHub so Vercel can access it:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main`}
          </pre>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          id="vercel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaRocket /> 3. Deploying to Vercel 🚀
          </h2>
          <ol className="list-decimal list-inside space-y-2">
            <li>Go to <a href="https://vercel.com" target="_blank" className="text-blue-600 hover:underline">vercel.com</a> and sign in with GitHub</li>
            <li>Click “Add New Project”</li>
            <li>Select your repo</li>
            <li>Let Vercel do its magic 🪄</li>
            <li>Click “Deploy” and you’re live!</li>
          </ol>
          <p className="mt-4">You’ll get a link like: <span className="text-blue-600">https://your-project.vercel.app</span></p>
        </motion.section>
        <motion.section
          id="env"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            🌿 Using Environment Variables
          </h2>
          <p className="mb-4">To store sensitive info like API keys, use a <code>.env.local</code> file during development:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        {`// .env.local
        NEXT_PUBLIC_API_KEY=your-secret-key`}
          </pre>
          <p className="mt-4">Access it in your app like this:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        {`const apiKey = process.env.NEXT_PUBLIC_API_KEY;`}
          </pre>
          <p className="mt-4">To use the same variable in production:</p>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>Go to your project on <a href="https://vercel.com/dashboard" className="text-blue-600 hover:underline" target="_blank">Vercel Dashboard</a></li>
            <li>Click “Settings” → “Environment Variables”</li>
            <li>Add the key and value (make sure names match exactly)</li>
            <li>Redeploy your app</li>
          </ol>
          <p className="mt-4 text-sm text-gray-600">Pro tip: Prefix with <code>NEXT_PUBLIC_</code> if it needs to be accessible on the client side.</p>
        </motion.section>


        {/* Section 4 */}
        <motion.section
          id="analytics"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <FaChartBar /> 4. Adding Vercel Analytics 📊
          </h2>
          <p className="mb-2">Track your site's performance with Vercel Analytics:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
            npm install @vercel/analytics
          </pre>
          <p className="mt-4">Then add the component to your layout file:</p>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
{`// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}`}
          </pre>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10 bg-white p-6 rounded-2xl shadow-md"
        >
          <p className="text-lg font-semibold">🎉 That’s a wrap!</p>
          <p className="text-gray-600 mt-2">Your Next.js app is now deployed and ready to roll.</p>
        </motion.section>
      </div>
    </main>
  );
}
