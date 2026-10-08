import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Stock Market Basics | Signalist',
    description: 'Learn stock market fundamentals — from basic concepts to advanced terminology, with Indian market examples.',
};

const SECTIONS = [
    {
        id: 'what-is-a-stock',
        title: '1. What is a Stock?',
        content:
            'A stock (also called a share or equity) represents partial ownership in a company. When Reliance Industries issues stocks, each share is a tiny fraction of the company. As a shareholder, you participate in the company\'s growth — if the company does well, your share value increases; if it does poorly, the value decreases. Companies sell shares to raise capital for expansion, research, and operations.',
    },
    {
        id: 'how-stock-market-works',
        title: '2. How Does the Stock Market Work?',
        content:
            'The stock market is a marketplace where buyers and sellers trade shares of publicly listed companies. Companies list their shares through an Initial Public Offering (IPO). Once listed, shares trade on exchanges where prices fluctuate based on supply and demand. When more people want to buy a stock than sell it, the price goes up, and vice versa. Brokers act as intermediaries who execute buy and sell orders on behalf of investors.',
    },
    {
        id: 'nse-bse',
        title: '3. NSE and BSE',
        content:
            'India has two major stock exchanges. The Bombay Stock Exchange (BSE), established in 1875, is Asia\'s oldest stock exchange and lists over 5,000 companies. The National Stock Exchange (NSE), established in 1992, is India\'s largest exchange by trading volume and introduced electronic trading to Indian markets. Most major Indian companies like TCS, Infosys, HDFC Bank, and Reliance Industries are listed on both exchanges. Stock symbols often carry suffixes like .NS (NSE) or .BO (BSE).',
    },
    {
        id: 'stock-symbols',
        title: '4. Stock Symbols / Tickers',
        content:
            'Every listed company has a unique ticker symbol used for identification. For example, TCS represents Tata Consultancy Services, INFY represents Infosys, and RELIANCE represents Reliance Industries. On Signalist, you might see symbols like HDFCBANK.NS (HDFC Bank on NSE) or SBIN.BO (State Bank of India on BSE). These short codes make it easy to quickly look up and track stocks.',
    },
    {
        id: 'sectors',
        title: '5. Sectors',
        content:
            'The stock market is divided into sectors — groups of companies in the same industry. Major sectors in the Indian market include: IT (TCS, Infosys, Wipro, HCL Tech), Banking & Finance (HDFC Bank, ICICI Bank, SBI, Bajaj Finance), Energy (Reliance Industries, ONGC, NTPC), FMCG — Fast Moving Consumer Goods (Hindustan Unilever, ITC, Nestlé India), Automobiles (Maruti Suzuki, Tata Motors, Mahindra & Mahindra), and Pharma (Sun Pharma, Dr. Reddy\'s). Understanding sectors helps diversify your investments across different parts of the economy.',
    },
    {
        id: 'market-cap',
        title: '6. Market Capitalisation',
        content:
            'Market capitalisation (market cap) is the total market value of a company\'s outstanding shares. It\'s calculated as: Share Price × Total Number of Shares. Companies are categorised by market cap in India:',
        subsections: [
            {
                subtitle: 'Large Cap',
                text: 'Companies with a market cap above ₹20,000 crore. Examples: Reliance Industries, TCS, HDFC Bank. These are well-established, stable companies with lower risk.',
            },
            {
                subtitle: 'Mid Cap',
                text: 'Companies with a market cap between ₹5,000 and ₹20,000 crore. These offer a balance of growth potential and stability.',
            },
            {
                subtitle: 'Small Cap',
                text: 'Companies with a market cap below ₹5,000 crore. These carry higher risk but can offer greater returns if the company grows significantly.',
            },
        ],
    },
    {
        id: 'price-vs-valuation',
        title: '7. Share Price vs Company Valuation',
        content:
            'A common misconception is that a higher share price means a more valuable company. The share price alone doesn\'t tell you the company\'s true value — you need to consider the total number of shares. For example, Company A might have a share price of ₹100 with 100 crore shares (market cap = ₹10,000 crore) while Company B has a share price of ₹5,000 with 1 crore shares (market cap = ₹5,000 crore). Despite the lower share price, Company A is valued higher.',
    },
    {
        id: 'nifty-sensex',
        title: '8. NIFTY 50 and Sensex',
        content:
            'NIFTY 50 is the benchmark index of NSE, comprising 50 of the largest and most liquid Indian companies across sectors. Sensex is BSE\'s benchmark index, comprising 30 well-established companies. These indices serve as barometers for the overall Indian stock market. If NIFTY 50 rises 2%, it broadly means the top 50 companies gained value on average. Fund managers and investors use these benchmarks to measure performance — if your portfolio returned 15% but NIFTY returned 18%, you underperformed the market.',
    },
    {
        id: 'bull-bear',
        title: '9. Bull and Bear Markets',
        content:
            'A bull market is a period when stock prices are rising and investor confidence is growing. A bear market is when prices decline over a sustained period (typically 20% or more from recent highs). The Indian market experienced a strong bull run from 2020 to 2021 after the COVID crash, where NIFTY rose from ~7,500 to over 18,000. Understanding market cycles helps set realistic expectations for your investments.',
    },
    {
        id: 'orders',
        title: '10. Market Orders vs Limit Orders',
        content:
            'A market order buys or sells a stock immediately at the current best available price. A limit order lets you set a specific price — the trade only executes when the stock reaches that price. For example, if TCS is trading at ₹3,500 and you place a limit buy order at ₹3,400, the order will only execute if the price drops to ₹3,400 or lower. Market orders guarantee execution but not price; limit orders guarantee price but not execution.',
    },
    {
        id: 'volume',
        title: '11. Volume',
        content:
            'Volume is the number of shares traded during a given period. High volume often indicates strong interest in a stock and confirms price movements — a price increase on high volume is more significant than one on low volume. For liquid stocks like Reliance or HDFC Bank, millions of shares trade daily. Low-volume stocks can be harder to buy or sell at desired prices.',
    },
    {
        id: 'market-cap-vs-price',
        title: '12. Market Capitalisation vs Stock Price',
        content:
            'Don\'t confuse these two. Stock price is the cost of one share. Market cap is the total value of all shares combined. A stock priced at ₹50 can belong to a company worth ₹1 lakh crore if it has billions of shares outstanding. When comparing companies, always look at market cap rather than share price for a true picture of size and value.',
    },
    {
        id: 'dividends',
        title: '13. Dividends',
        content:
            'Dividends are a portion of a company\'s profits distributed to shareholders, usually on a per-share basis. ITC, for example, is known for its consistent dividend payments. If ITC declares a dividend of ₹6 per share and you own 100 shares, you receive ₹600. Dividend yield = (Annual Dividend per Share ÷ Share Price) × 100. Not all companies pay dividends — growth-stage companies often reinvest profits rather than distributing them.',
    },
    {
        id: 'pe-ratio',
        title: '14. P/E Ratio',
        content:
            'The Price-to-Earnings (P/E) ratio = Share Price ÷ Earnings Per Share (EPS). It tells you how much investors are willing to pay for each rupee of earnings. A P/E of 30 means investors pay ₹30 for every ₹1 of earning. A low P/E might indicate the stock is undervalued (or the company has problems); a high P/E might mean the stock is overvalued (or investors expect high future growth). IT companies like Infosys typically trade at higher P/E ratios than, say, PSU banks.',
    },
    {
        id: 'eps',
        title: '15. EPS (Earnings Per Share)',
        content:
            'EPS = Net Profit ÷ Total Number of Shares. It tells you how much profit a company makes per share. For example, if TCS reports a quarterly profit of ₹11,000 crore with about 365 crore shares, the EPS is approximately ₹30 for that quarter. Rising EPS over time generally indicates a company is growing its profitability.',
    },
    {
        id: 'pb-ratio',
        title: '16. P/B Ratio',
        content:
            'The Price-to-Book (P/B) ratio = Share Price ÷ Book Value per Share. Book value is the net asset value of a company (assets minus liabilities). A P/B below 1 might indicate the stock is undervalued relative to its assets. Banking stocks in India (SBI, PNB) are often evaluated using P/B ratio since banks hold large tangible assets on their balance sheets.',
    },
    {
        id: 'volatility',
        title: '17. Volatility',
        content:
            'Volatility measures how much a stock\'s price fluctuates over time. Highly volatile stocks can see large price swings in a single day — exciting for traders but risky for conservative investors. India VIX (Volatility Index) measures the market\'s expected volatility. Mid-cap and small-cap stocks tend to be more volatile than large-caps like TCS or Reliance.',
    },
    {
        id: 'risk-diversification',
        title: '18. Risk and Diversification',
        content:
            'Every investment carries risk — the chance of losing some or all of your money. Diversification is the practice of spreading investments across different stocks, sectors, and asset types to reduce risk. Instead of putting all your money in one IT stock, you might invest across IT (Infosys), banking (HDFC Bank), FMCG (Hindustan Unilever), and energy (Reliance). The idea: if one sector underperforms, others may compensate.',
    },
    {
        id: 'technical-analysis',
        title: '19. Basic Technical Analysis',
        content:
            'Technical analysis involves studying price charts and patterns to forecast future movements. Key concepts include: Support (a price level where a stock tends to stop falling), Resistance (a price level where a stock tends to stop rising), Moving Averages (the average price over a period, e.g. 50-day or 200-day, smoothing out short-term noise), and Candlestick Patterns (visual representations of price movement within a period). Signalist provides TradingView charts with many of these tools built in.',
    },
    {
        id: 'fundamental-analysis',
        title: '20. Basic Fundamental Analysis',
        content:
            'Fundamental analysis evaluates a company\'s intrinsic value by examining financial statements, industry position, management quality, and growth prospects. Key things to look at include: Revenue and profit growth over multiple quarters, P/E and P/B ratios compared to industry peers, debt-to-equity ratio (lower is generally better), return on equity (ROE) and return on capital employed (ROCE), and promoter holding percentage (higher promoter holding often signals confidence). Companies like TCS and HDFC Bank often score well on fundamentals due to consistent growth, low debt, and strong management.',
    },
];

const LearnPage = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3">
                    Stock Market Basics
                </h1>
                <p className="text-gray-500 text-base">
                    A progressive guide to stock market concepts, from fundamentals to intermediate topics — with Indian market examples.
                </p>
            </div>

            {/* Table of contents */}
            <nav className="mb-10 p-4 bg-gray-800 border border-gray-600 rounded-lg">
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Contents
                </h2>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm">
                    {SECTIONS.map((section) => (
                        <li key={section.id}>
                            <a
                                href={`#${section.id}`}
                                className="text-gray-400 hover:text-yellow-500 transition-colors"
                            >
                                {section.title}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>

            {/* Content sections */}
            <div className="flex flex-col gap-8">
                {SECTIONS.map((section) => (
                    <section
                        key={section.id}
                        id={section.id}
                        className="scroll-mt-24"
                    >
                        <h2 className="text-lg md:text-xl font-semibold text-gray-100 mb-3">
                            {section.title}
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            {section.content}
                        </p>
                        {section.subsections && (
                            <div className="mt-4 flex flex-col gap-3 pl-4 border-l-2 border-gray-700">
                                {section.subsections.map((sub) => (
                                    <div key={sub.subtitle}>
                                        <h3 className="text-base font-medium text-teal-400 mb-1">
                                            {sub.subtitle}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {sub.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                ))}
            </div>

            {/* Back link */}
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

export default LearnPage;
