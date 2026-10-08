import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-16 border-t border-gray-700 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
                <span>© {new Date().getFullYear()} Signalist</span>
                <div className="flex items-center gap-6">
                    <Link
                        href="/learn"
                        className="hover:text-gray-400 transition-colors"
                    >
                        Stock Market Basics
                    </Link>
                    <Link
                        href="/privacy"
                        className="hover:text-gray-400 transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/engineering"
                        className="hover:text-gray-400 transition-colors"
                    >
                        Engineering
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
