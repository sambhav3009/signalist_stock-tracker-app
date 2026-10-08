'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const FAQ_DATA = [
    {
        question: 'What is a stock?',
        answer:
            'A stock represents a share of ownership in a company. When you buy a stock of Reliance Industries, for example, you own a tiny fraction of the company and share in its profits and losses.',
    },
    {
        question: 'What is a stock market?',
        answer:
            'A stock market is a marketplace where buyers and sellers trade shares of publicly listed companies. In India, the two major stock exchanges are NSE (National Stock Exchange) and BSE (Bombay Stock Exchange).',
    },
    {
        question: 'What is NSE and BSE?',
        answer:
            'NSE (National Stock Exchange) and BSE (Bombay Stock Exchange) are India\'s two primary stock exchanges. BSE, established in 1875, is Asia\'s oldest exchange. NSE, established in 1992, is the largest by trading volume. Most Indian stocks like TCS, Infosys, and HDFC Bank are listed on both.',
    },
    {
        question: 'What is a stock ticker/symbol?',
        answer:
            'A stock ticker or symbol is a unique abbreviation used to identify a publicly traded company. For example, TCS.NS refers to Tata Consultancy Services on the NSE, and RELIANCE.BO refers to Reliance Industries on BSE.',
    },
    {
        question: 'What is market capitalization?',
        answer:
            'Market capitalization (market cap) is the total market value of a company\'s outstanding shares. It is calculated by multiplying the share price by the total number of shares. For example, if TCS has a share price of ₹3,500 and 365 crore shares, its market cap would be about ₹12.8 lakh crore.',
    },
    {
        question: 'What are large-cap, mid-cap, and small-cap stocks?',
        answer:
            'Stocks are categorised by market capitalisation. In India, large-cap companies (like Reliance, TCS, HDFC Bank) have a market cap above ₹20,000 crore, mid-cap between ₹5,000–₹20,000 crore, and small-cap below ₹5,000 crore. Large-caps are generally more stable while small-caps carry higher risk and potential reward.',
    },
    {
        question: 'What are sectors?',
        answer:
            'Sectors are broad categories that group companies by their industry. Common sectors in the Indian market include IT (TCS, Infosys), Banking (HDFC Bank, ICICI Bank), Energy (Reliance, ONGC), FMCG (Hindustan Unilever, ITC), and Automobiles (Maruti Suzuki, Tata Motors).',
    },
    {
        question: 'What is a bull market and bear market?',
        answer:
            'A bull market is when stock prices are rising or expected to rise, indicating investor optimism. A bear market is when prices are falling or expected to fall, indicating pessimism. The terms come from how each animal attacks — bulls thrust upward, bears swipe downward.',
    },
    {
        question: 'What is a dividend?',
        answer:
            'A dividend is a portion of a company\'s profit distributed to shareholders. For example, if ITC declares a dividend of ₹6 per share, you receive ₹6 for every share you own. Not all companies pay dividends — growth companies often reinvest profits instead.',
    },
    {
        question: 'What is P/E ratio?',
        answer:
            'The Price-to-Earnings (P/E) ratio measures a company\'s current share price relative to its earnings per share. A P/E of 25 means investors pay ₹25 for every ₹1 of earnings. It helps compare whether a stock is overvalued or undervalued relative to peers.',
    },
    {
        question: "What is a stock's daily change?",
        answer:
            'Daily change refers to the difference between a stock\'s current price and its previous closing price, shown as a rupee amount and percentage. A positive change (green) means the price went up, while a negative change (red) means it went down.',
    },
    {
        question: 'What is a portfolio vs a watchlist?',
        answer:
            'A portfolio contains stocks you actually own, representing your investments. A watchlist is a list of stocks you\'re tracking and interested in but haven\'t necessarily bought. Think of a watchlist as your "shortlist" for potential investments.',
    },
    {
        question: 'What is the difference between investing and trading?',
        answer:
            'Investing means buying stocks with a long-term horizon (months to years), focusing on company fundamentals. Trading involves buying and selling over shorter periods (minutes to weeks), often relying on technical analysis and price patterns. Both approaches have different risk profiles and strategies.',
    },
];

const FAQItem = ({
    question,
    answer,
    isOpen,
    onToggle,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}) => (
    <div className="border border-gray-600 rounded-lg overflow-hidden">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-800/50 transition-colors cursor-pointer"
        >
            <span className="font-medium text-gray-200 text-sm md:text-base pr-4">
                {question}
            </span>
            <ChevronDown
                className={cn(
                    'h-5 w-5 text-gray-500 flex-shrink-0 transition-transform duration-200',
                    isOpen && 'rotate-180'
                )}
            />
        </button>
        {isOpen && (
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-gray-400 leading-relaxed">
                {answer}
            </div>
        )}
    </div>
);

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full mt-10 md:mt-16">
            <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-100 mb-2">
                    Frequently Asked Questions
                </h2>
                <p className="text-sm text-gray-500">
                    New to stocks?{' '}
                    <Link
                        href="/learn"
                        className="text-yellow-500 hover:text-yellow-400 transition-colors"
                    >
                        Learn the basics →
                    </Link>
                </p>
            </div>
            <div className="flex flex-col gap-3 md:gap-4">
                {FAQ_DATA.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
