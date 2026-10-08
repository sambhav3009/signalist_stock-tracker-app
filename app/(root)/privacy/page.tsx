import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Privacy Policy | Signalist',
    description: 'Privacy policy for Signalist — how we handle your data.',
};

const SECTIONS = [
    {
        title: 'Information We Collect',
        content: [
            'Account information: When you sign up, we collect your name, email address, country, investment goals, risk tolerance, and preferred industry. This information is stored securely in our database and used to personalise your experience.',
        ],
    },
    {
        title: 'Stock & Watchlist Information',
        content: [
            'When you add stocks to your watchlist or set price alerts, we store the stock symbol, company name, and your alert preferences. This data is associated with your account and is used solely to provide the watchlist and alert features.',
        ],
    },
    {
        title: 'How We Use Your Information',
        content: [
            'We use your information to: provide and maintain the Signalist application, send you stock price alerts via email when your alert conditions are met, display your personalised watchlist and dashboard, and send a welcome email when you create an account.',
        ],
    },
    {
        title: 'Third-Party Services',
        content: [
            'Signalist integrates with the following third-party services:',
            '• Finnhub — for stock market data, quotes, and company information. Your search queries are sent to Finnhub\'s API to retrieve stock data.',
            '• TradingView — for interactive charts and market visualisations. TradingView widgets are embedded on the site to display market data.',
            '• Better Auth — for authentication and session management.',
            'We do not sell or share your personal data with third parties for advertising or marketing purposes.',
        ],
    },
    {
        title: 'Authentication & Sessions',
        content: [
            'Signalist uses Better Auth for authentication. Your password is hashed and never stored in plain text. Sessions are managed securely and automatically expire. We do not store or have access to your raw password.',
        ],
    },
    {
        title: 'Email Communications',
        content: [
            'We send emails for: account welcome messages upon sign-up, stock price alerts that you have configured, and daily market news summaries. You can manage your alert preferences within the application.',
        ],
    },
    {
        title: 'Data Security',
        content: [
            'We take reasonable measures to protect your information. Data is stored in a MongoDB database with appropriate access controls. API keys and sensitive configuration are stored as environment variables and are not exposed to the client.',
        ],
    },
    {
        title: 'Cookies & Local Storage',
        content: [
            'Signalist uses cookies for session management and authentication. We do not use tracking cookies or third-party analytics cookies. The application may use browser local storage for UI preferences.',
        ],
    },
    {
        title: 'Your Choices',
        content: [
            'You can: add or remove stocks from your watchlist at any time, create or delete price alerts, and contact us to request deletion of your account data.',
        ],
    },
    {
        title: 'Changes to This Policy',
        content: [
            'We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated effective date.',
        ],
    },
    {
        title: 'Contact',
        content: [
            'If you have questions about this privacy policy or your data, please reach out to the Signalist team.',
        ],
    },
];

const PrivacyPage = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
                    Privacy Policy
                </h1>
                <p className="text-sm text-gray-500">
                    Last updated: October 2026
                </p>
            </div>

            <p className="text-gray-400 text-base mb-8 leading-relaxed">
                Signalist (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy.
                This policy explains what information we collect, how we use it, and your choices regarding your data.
            </p>

            <div className="flex flex-col gap-8">
                {SECTIONS.map((section) => (
                    <section key={section.title}>
                        <h2 className="text-lg font-semibold text-gray-200 mb-3">
                            {section.title}
                        </h2>
                        <div className="flex flex-col gap-2">
                            {section.content.map((paragraph, i) => (
                                <p
                                    key={i}
                                    className="text-gray-400 text-sm leading-relaxed"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <div className="mt-12 pt-6 border-t border-gray-700">
                <Link
                    href="/"
                    className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm font-medium"
                >
                    ← Back to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default PrivacyPage;
