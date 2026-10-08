import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Software Engineering | Signalist',
    description: 'Documentation of the engineering, architecture, optimizations, and security patterns implemented in Signalist.',
};

export default function EngineeringPage() {
    return (
        <div className="max-w-4xl mx-auto pb-10">
            <div className="mb-10 text-center sm:text-left">
                <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-gray-100 to-gray-500 bg-clip-text text-transparent mb-4">
                    Engineering Architecture
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl">
                    Documentation of the technical decisions, architecture, and optimizations that power Signalist.
                </p>
            </div>

            <div className="space-y-12">
                {/* 1. PROJECT OVERVIEW */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-100 flex items-center gap-3 mb-6">
                        <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">1</span>
                        Project Overview
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Signalist is a real-time stock market tracking application designed to provide investors with consolidated market insights, company financials, news, and personalised watchlists. It solves the problem of fragmented financial data by aggregating real-time quotes, charts, and news into a central, responsive dashboard tailored for retail investors.
                    </p>
                </section>

                {/* 2. TECHNOLOGY STACK */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-100 flex items-center gap-3 mb-6">
                        <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">2</span>
                        Technology Stack
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { name: 'Next.js 15', role: 'Full-stack React Framework (App Router)' },
                            { name: 'React 19', role: 'UI Library & Server/Client Components' },
                            { name: 'TypeScript', role: 'Static Typing & Developer Experience' },
                            { name: 'MongoDB & Mongoose', role: 'NoSQL Database & Object Modeling' },
                            { name: 'Better Auth', role: 'Authentication & Session Management' },
                            { name: 'Tailwind CSS & Shadcn', role: 'Utility-first Styling & Component UI' },
                            { name: 'Inngest', role: 'Event-driven Background Jobs & Crons' },
                            { name: 'Finnhub API', role: 'Real-time Stock Data & News Feed' },
                            { name: 'TradingView', role: 'Interactive Financial Charts' },
                            { name: 'Nodemailer', role: 'Transactional Email Delivery' },
                        ].map((tech) => (
                            <div key={tech.name} className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-4">
                                <h3 className="font-semibold text-gray-200 mb-1">{tech.name}</h3>
                                <p className="text-sm text-gray-500">{tech.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 3. SYSTEM ARCHITECTURE */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-100 flex items-center gap-3 mb-6">
                        <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">3</span>
                        System Architecture
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        The application follows a modern serverless architecture leveraging Next.js App Router. We heavily utilise Server Components to reduce client bundle size and Next.js Server Actions for secure database mutations without exposing API endpoints directly.
                    </p>

                    <div className="max-w-2xl mx-auto bg-[#0a0a0a] rounded-xl p-8 border border-gray-800 flex flex-col items-center">
                        <div className="px-6 py-3 bg-gray-800 rounded border border-gray-700 text-gray-200 font-medium w-48 text-center text-sm shadow-lg">
                            User / Browser
                        </div>
                        <div className="h-8 border-l-2 border-dashed border-gray-600"></div>
                        <div className="px-6 py-3 bg-teal-900/30 text-teal-400 rounded border border-teal-800/50 font-medium w-48 text-center text-sm">
                            Next.js (Frontend)
                        </div>
                        <div className="h-8 border-l-2 border-dashed border-gray-600"></div>
                        <div className="px-6 py-3 bg-blue-900/30 text-blue-400 rounded border border-blue-800/50 font-medium w-48 text-center text-sm">
                            Server Actions
                        </div>

                        <div className="w-full flex justify-center mt-8 pt-8 border-t border-gray-800 gap-4 sm:gap-12 flex-wrap">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-green-900/20 text-green-500 rounded-lg border border-green-800/30 text-xs text-center w-28">
                                    MongoDB DB
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-purple-900/20 text-purple-400 rounded-lg border border-purple-800/30 text-xs text-center w-28">
                                    Inngest Workers
                                </div>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-orange-900/20 text-orange-400 rounded-lg border border-orange-800/30 text-xs text-center w-28">
                                    External APIs
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. DATABASE DESIGN */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-100 flex items-center gap-3 mb-6">
                        <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">4</span>
                        Database Schema
                    </h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        Data modeling focuses heavily on normalized documents using Mongoose to interact with MongoDB. Better Auth automatically manages the core User and Session collections.
                    </p>
                    <div className="bg-[#0a0a0a] rounded border border-gray-800 p-6">
                        <h4 className="text-gray-200 font-mono text-sm mb-4 border-b border-gray-800 pb-2">Watchlist Collection</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between">
                                <span className="font-mono text-teal-400">userId</span>
                                <span className="text-gray-500">String (Indexed, Foreign Key)</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-mono text-teal-400">symbol</span>
                                <span className="text-gray-500">String (Uppercase, Trimmed)</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-mono text-teal-400">company</span>
                                <span className="text-gray-500">String</span>
                            </li>
                            <li className="flex justify-between">
                                <span className="font-mono text-teal-400">addedAt</span>
                                <span className="text-gray-500">Date</span>
                            </li>
                        </ul>

                        <div className="mt-6 p-3 bg-gray-900/50 border border-gray-700/50 rounded flex gap-3 text-sm">
                            <span className="text-yellow-500 mt-0.5">⚡</span>
                            <div className="text-gray-400">
                                <span className="text-gray-300 font-semibold block mb-1">Compound Unique Index</span>
                                The database enforces uniqueness on <code className="text-xs bg-black px-1 py-0.5 rounded text-gray-300">{"{ userId: 1, symbol: 1 }"}</code>. This handles deduplication at the database level rather than requiring complex application logic, preventing a user from accidentally adding the same stock twice.
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. PERFORMANCE & OPTIMIZATION */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-100 flex items-center gap-3 mb-6">
                        <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">5</span>
                        Performance & Optimization
                    </h2>
                    <ul className="space-y-5">
                        <li className="flex gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                            <div>
                                <h3 className="text-gray-200 font-medium mb-1">Debounced Client Search</h3>
                                <p className="text-sm text-gray-400">Used a custom <code className="text-xs bg-gray-800 px-1 py-0.5 rounded text-gray-300">useDebounce</code> hook with a 300ms delay in the search command menu. This massively decreases the volume of external requests to the Finnhub search API while the user is typing.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                            <div>
                                <h3 className="text-gray-200 font-medium mb-1">Next.js Data Fetch Caching</h3>
                                <p className="text-sm text-gray-400">Instead of pulling live data on every page load, external API fetch requests are aggressively cached using Next.js <code className="text-xs bg-gray-800 px-1 py-0.5 rounded text-gray-300">revalidate</code> options. For example, company profiles cache for 3600 seconds, and general market news defaults to 300 seconds, reducing load speeds and sparing Finnhub API quotas.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                            <div>
                                <h3 className="text-gray-200 font-medium mb-1">React Cache Deduplication</h3>
                                <p className="text-sm text-gray-400">The <code className="text-xs bg-gray-800 px-1 py-0.5 rounded text-gray-300">searchStocks</code> function is wrapped in React's native <code className="text-xs bg-gray-800 px-1 py-0.5 rounded text-gray-300">cache()</code> to ensure that if multiple components on the same server render cycle ask for stock data, the query is executed only once.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                            <div>
                                <h3 className="text-gray-200 font-medium mb-1">Database Connection Pooling</h3>
                                <p className="text-sm text-gray-400">A global Mongoose connection cache (<code className="text-xs bg-gray-800 px-1 py-0.5 rounded text-gray-300">global.mongooseCache</code>) prevents database connection leaks and removes the latency penalty of establishing new DB connections for every server action or API route.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* 6. SECURITY & AUTHENTICATION */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-100 flex items-center gap-3 mb-6">
                        <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">6</span>
                        Security & Authentication
                    </h2>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex gap-3">
                            <span className="text-gray-600 mt-0.5">▪</span>
                            <p><strong>Route Middleware:</strong> <code className="font-mono text-teal-400/80">middleware.ts</code> intercepts navigation, verifying Better Auth session cookies at the Edge before rendering anything, blocking unauthorised users from accessing protected views like dashboards.</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gray-600 mt-0.5">▪</span>
                            <p><strong>Secure Server Actions:</strong> All Server Actions explicitly re-verify the active session token (via <code className="font-mono text-teal-400/80">auth.api.getSession()</code>) to guarantee mutations (like toggling a watchlist item) are authorized at execution time.</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gray-600 mt-0.5">▪</span>
                            <p><strong>Database Data Isolation:</strong> Watchlist queries mandate that <code className="font-mono text-teal-400/80">userId</code> exactly matches the session ID. Users can absolutely never manipulate or even query a different user's saved data.</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gray-600 mt-0.5">▪</span>
                            <p><strong>Environment Variable Segregation:</strong> Secrets (like <code className="font-mono text-teal-400/80">BETTER_AUTH_SECRET</code>, <code className="font-mono text-teal-400/80">MONGODB_URI</code>, <code className="font-mono text-teal-400/80">FINNHUB_API_KEY</code>) are completely isolated to the server context. Only explicitly safe config is exposed to the Next.js client.</p>
                        </li>
                    </ul>
                </section>

                {/* 7. API & EXTERNAL INTEGRATIONS */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-100 flex items-center gap-3 mb-6">
                        <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">7</span>
                        External Service Architecture
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="bg-[#0a0a0a] p-5 rounded border border-gray-800">
                            <h3 className="text-gray-200 font-semibold mb-2">Finnhub API</h3>
                            <p className="text-sm text-gray-500 mb-3">Serves as the root source of truth for stock metadata, general market news, company news, and profile lookups.</p>
                            <span className="inline-block px-2 text-[10px] bg-gray-800 text-gray-300 rounded uppercase tracking-wider">REST / Application Layer</span>
                        </div>
                        <div className="bg-[#0a0a0a] p-5 rounded border border-gray-800">
                            <h3 className="text-gray-200 font-semibold mb-2">TradingView Widgets</h3>
                            <p className="text-sm text-gray-500 mb-3">Offloads chart rendering directly to the client. Uses predefined JSON configs to fetch and stream candlestick data seamlessly without loading our servers.</p>
                            <span className="inline-block px-2 text-[10px] bg-gray-800 text-gray-300 rounded uppercase tracking-wider">Client Script / UI</span>
                        </div>
                        <div className="bg-[#0a0a0a] p-5 rounded border border-gray-800">
                            <h3 className="text-gray-200 font-semibold mb-2">Inngest</h3>
                            <p className="text-sm text-gray-500 mb-3">Event-driven infrastructure handling async background jobs. Runs the daily cron (<code className="text-xs bg-gray-800 rounded px-1 text-gray-400">0 12 * * *</code>) to compile and dispatch personalised market summaries and process welcome emails asynchronously to avoid slowing down the account creation process.</p>
                            <span className="inline-block px-2 text-[10px] bg-gray-800 text-gray-300 rounded uppercase tracking-wider">Background Workers</span>
                        </div>
                        <div className="bg-[#0a0a0a] p-5 rounded border border-gray-800">
                            <h3 className="text-gray-200 font-semibold mb-2">Nodemailer (SMTP/Gmail)</h3>
                            <p className="text-sm text-gray-500 mb-3">Handles high-deliverability email dispatching for the onboarding and alert infrastructure defined by background workers.</p>
                            <span className="inline-block px-2 text-[10px] bg-gray-800 text-gray-300 rounded uppercase tracking-wider">Mail Delivery</span>
                        </div>
                    </div>
                </section>

                {/* 8. ERROR HANDLING & RELIABILITY */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-100 flex items-center gap-3 mb-6">
                        <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">8</span>
                        Error Handling & Reliability
                    </h2>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li className="flex gap-3">
                            <span className="text-gray-600 mt-0.5">▪</span>
                            <p><strong>Action Responses:</strong> Server actions consistently return structured objects (e.g., <code className="font-mono text-teal-400/80">{"{ success: boolean, data?: any, error?: string }"}</code>), allowing the client UI to gracefully display toasts or recovery options rather than unhandled promise rejections.</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gray-600 mt-0.5">▪</span>
                            <p><strong>Graceful API Degradation:</strong> Watchlist and stock queries check specifically for missing API keys or exhausted rate limits, defaulting to safe UI fallbacks rather than crashing the rendering tree.</p>
                        </li>
                        <li className="flex gap-3">
                            <span className="text-gray-600 mt-0.5">▪</span>
                            <p><strong>Resilient Job Queues:</strong> Inngest jobs inherently provide retry functionality and observability, so if Nodemailer drops a connection during an email dispatch, the job eventually succeeds without manual intervention.</p>
                        </li>
                    </ul>
                </section>

                {/* 9. ENGINEERING DECISIONS */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8">
                    <h2 className="text-xl font-bold text-gray-100 flex items-center gap-3 mb-6">
                        <span className="bg-yellow-500/10 text-yellow-500 p-2 rounded-lg">9</span>
                        Key Engineering Decisions
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-100 font-medium mb-1">Decision: Component-level Offloading using TradingView</p>
                            <div className="text-sm text-gray-400">
                                <span className="text-gray-500 font-medium w-20 inline-block">Why:</span>
                                Handling real-time financial sockets and rendering HTML canvas charts is extraordinarily complex.
                                <br/>
                                <span className="text-gray-500 font-medium w-20 inline-block">Benefit:</span>
                                Using TradingView scripts eliminates websocket maintenance, removes 90% of the UI heavy-lifting, and provides a professional-grade charting UX immediately out of the box.
                            </div>
                        </div>

                        <div className="h-px w-full bg-gray-800/50"></div>

                        <div>
                            <p className="text-gray-100 font-medium mb-1">Decision: Decoupled Async Email via Inngest</p>
                            <div className="text-sm text-gray-400">
                                <span className="text-gray-500 font-medium w-20 inline-block">Why:</span>
                                Generating AI-summarized welcome emails and sending them via Nodemailer can take 2-4 seconds or longer, which degrades the UX if blocked synchronously on sign-up.
                                <br/>
                                <span className="text-gray-500 font-medium w-20 inline-block">Benefit:</span>
                                Emitting an <code className="text-xs bg-gray-800 px-1 py-0.5 rounded text-gray-300">app/user.created</code> event allows the API to return success immediately, giving users an instant login transition, while Inngest manages retries and timeouts securely.
                            </div>
                        </div>

                        <div className="h-px w-full bg-gray-800/50"></div>

                        <div>
                            <p className="text-gray-100 font-medium mb-1">Decision: CSS/UI System via Tailwind & Shadcn UI</p>
                            <div className="text-sm text-gray-400">
                                <span className="text-gray-500 font-medium w-20 inline-block">Why:</span>
                                Writing bespoke CSS scales poorly in larger component architectures without strict structure.
                                <br/>
                                <span className="text-gray-500 font-medium w-20 inline-block">Benefit:</span>
                                Tailwind provides deterministic, co-located styles. Shadcn avoids dependency lock-in by transferring component ownership directly into the repository, allowing full architectural control over the DOM.
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. FUTURE IMPROVEMENTS */}
                <section className="bg-[#141414] border border-gray-800 rounded-xl p-6 md:p-8 mt-12 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/50"></div>
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-xl font-bold text-gray-100">Future Potential Improvements</h2>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-yellow-500/10 text-yellow-500 ml-auto border border-yellow-500/20">
                            Not Currently Implemented
                        </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 text-yellow-500/60 mt-0.5">1</div>
                            <p className="text-sm text-gray-400">
                                <strong className="text-gray-200 block mb-0.5">Optimistic UI Updates</strong>
                                Implementing React's <code className="text-xs bg-gray-800 px-1 py-0.5 rounded">useOptimistic</code> for operations like adding/removing watchlist items to make interactions feel perfectly instant without waiting for network latency.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 text-yellow-500/60 mt-0.5">2</div>
                            <p className="text-sm text-gray-400">
                                <strong className="text-gray-200 block mb-0.5">Pagination / Infinite Scroll</strong>
                                As the news API scale increases, migrating from simple array slicing to cursor-based fetching and infinite scrolling for market news.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 text-yellow-500/60 mt-0.5">3</div>
                            <p className="text-sm text-gray-400">
                                <strong className="text-gray-200 block mb-0.5">SWR / React Query integration</strong>
                                Using SWR or React Query client-side to automatically poll and update current market pricing on watchlist views without hard browser refreshes.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 text-yellow-500/60 mt-0.5">4</div>
                            <p className="text-sm text-gray-400">
                                <strong className="text-gray-200 block mb-0.5">Enhanced Redis Caching Strategy</strong>
                                Introducing an in-memory datastore tier (Redis) for extremely high-throughput deduplication of stock metadata across user search hits.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Back link */}
            <div className="mt-12 pt-6 border-t border-gray-800">
                <Link
                    href="/"
                    className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium"
                >
                    ← Back to Dashboard
                </Link>
            </div>
        </div>
    );
}
