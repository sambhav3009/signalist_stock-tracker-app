export const NAV_ITEMS = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
];

export const INVESTMENT_GOALS = [
    { value: 'Growth', label: 'Growth' },
    { value: 'Income', label: 'Income' },
    { value: 'Balanced', label: 'Balanced' },
    { value: 'Conservative', label: 'Conservative' },
];

export const RISK_TOLERANCE_OPTIONS = [
    { value: 'Low', label: 'Low' },
    { value: 'Medium', label: 'Medium' },
    { value: 'High', label: 'High' },
];

export const PREFERRED_INDUSTRIES = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Energy', label: 'Energy' },
    { value: 'Consumer Goods', label: 'Consumer Goods' },
];

export const ALERT_TYPE_OPTIONS = [
    { value: 'upper', label: 'Upper' },
    { value: 'lower', label: 'Lower' },
];

export const CONDITION_OPTIONS = [
    { value: 'greater', label: 'Greater than (>)' },
    { value: 'less', label: 'Less than (<)' },
];

export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark',
    dateRange: '12M',
    locale: 'en',
    largeChartUrl: '',
    isTransparent: true,
    showFloatingTooltip: true,
    plotLineColorGrowing: '#0FEDBE',
    plotLineColorFalling: '#0FEDBE',
    gridLineColor: 'rgba(240, 243, 250, 0)',
    scaleFontColor: '#DBDBDB',
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)',

    tabs: [
        {
            title: 'Banking',
            symbols: [
                { s: 'BSE:HDFCBANK', d: 'HDFC Bank' },
                { s: 'BSE:ICICIBANK', d: 'ICICI Bank' },
                { s: 'BSE:SBIN', d: 'State Bank of India' },
                { s: 'BSE:AXISBANK', d: 'Axis Bank' },
                { s: 'BSE:KOTAKBANK', d: 'Kotak Mahindra Bank' },
            ],
        },
        {
            title: 'IT',
            symbols: [
                { s: 'BSE:TCS', d: 'TCS' },
                { s: 'BSE:INFY', d: 'Infosys' },
                { s: 'BSE:HCLTECH', d: 'HCLTech' },
                { s: 'BSE:WIPRO', d: 'Wipro' },
                { s: 'BSE:TECHM', d: 'Tech Mahindra' },
            ],
        },
        {
            title: 'Energy',
            symbols: [
                { s: 'BSE:RELIANCE', d: 'Reliance Industries' },
                { s: 'BSE:ONGC', d: 'ONGC' },
                { s: 'BSE:NTPC', d: 'NTPC' },
                { s: 'BSE:POWERGRID', d: 'Power Grid' },
                { s: 'BSE:ADANIGREEN', d: 'Adani Green' },
            ],
        },
        {
            title: 'Automobile',
            symbols: [
                { s: 'BSE:TATAMOTORS', d: 'Tata Motors' },
                { s: 'BSE:MARUTI', d: 'Maruti Suzuki' },
                { s: 'BSE:HYUNDAI', d: 'Hyundai Motor India' },
                { s: 'BSE:BAJAJ_AUTO', d: 'Bajaj Auto' },
                { s: 'BSE:EICHERMOT', d: 'Eicher Motors' },
            ],
        },
        {
            title: 'Pharma',
            symbols: [
                { s: 'BSE:SUNPHARMA', d: 'Sun Pharma' },
                { s: 'BSE:DRREDDY', d: 'Dr. Reddy\'s Laboratories' },
                { s: 'BSE:CIPLA', d: 'Cipla' },
                { s: 'BSE:DIVISLAB', d: 'Divi\'s Laboratories' },
                { s: 'BSE:AUROPHARMA', d: 'Aurobindo Pharma' },
            ],
        },
    ],

    support_host: 'https://www.tradingview.com',
    backgroundColor: '#141414',
    width: '100%',
    height: 600,
    showSymbolLogo: true,
    showChart: true,
};

export const HEATMAP_WIDGET_CONFIG = {
    exchanges: ['BSE'],
    dataSource: 'SENSEX',
    grouping: 'sector',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    locale: 'en',
    symbolUrl: '',
    colorTheme: 'dark',
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    width: '100%',
    height: '600',
};

export const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    market: 'stock',
    width: '100%',
    height: '600',
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Indian Stocks',
    width: '100%',
    height: 600,
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',

    symbolsGroups: [
        {
            name: 'Banking',
            symbols: [
                { name: 'BSE:HDFCBANK', displayName: 'HDFC Bank' },
                { name: 'BSE:ICICIBANK', displayName: 'ICICI Bank' },
                { name: 'BSE:SBIN', displayName: 'SBI' },
                { name: 'BSE:AXISBANK', displayName: 'Axis Bank' },
                { name: 'BSE:KOTAKBANK', displayName: 'Kotak Mahindra Bank' },
            ],
        },
        {
            name: 'IT',
            symbols: [
                { name: 'BSE:TCS', displayName: 'TCS' },
                { name: 'BSE:INFY', displayName: 'Infosys' },
                { name: 'BSE:HCLTECH', displayName: 'HCLTech' },
                { name: 'BSE:WIPRO', displayName: 'Wipro' },
                { name: 'BSE:TECHM', displayName: 'Tech Mahindra' },
            ],
        },
        {
            name: 'Energy',
            symbols: [
                { name: 'BSE:RELIANCE', displayName: 'Reliance Industries' },
                { name: 'BSE:ONGC', displayName: 'ONGC' },
                { name: 'BSE:NTPC', displayName: 'NTPC' },
                { name: 'BSE:POWERGRID', displayName: 'Power Grid' },
            ],
        },
        {
            name: 'Automobile',
            symbols: [
                { name: 'BSE:TATAMOTORS', displayName: 'Tata Motors' },
                { name: 'BSE:MARUTI', displayName: 'Maruti Suzuki' },
                { name: 'BSE:HYUNDAI', displayName: 'Hyundai Motor India' },
                { name: 'BSE:BAJAJ_AUTO', displayName: 'Bajaj Auto' },
            ],
        },
        {
            name: 'FMCG',
            symbols: [
                { name: 'BSE:ITC', displayName: 'ITC' },
                { name: 'BSE:HINDUNILVR', displayName: 'HUL' },
                { name: 'BSE:NESTLEIND', displayName: 'Nestlé India' },
                { name: 'BSE:BRITANNIA', displayName: 'Britannia' },
            ],
        },
        {
            name: 'Pharma',
            symbols: [
                { name: 'BSE:SUNPHARMA', displayName: 'Sun Pharma' },
                { name: 'BSE:DRREDDY', displayName: 'Dr. Reddy\'s Laboratories' },
                { name: 'BSE:CIPLA', displayName: 'Cipla' },
                { name: 'BSE:DIVISLAB', displayName: 'Divi\'s Laboratories' },
                { name: 'BSE:AUROPHARMA', displayName: 'Aurobindo Pharma' },
            ],
        },
    ],
};

export const SYMBOL_INFO_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 170,
});

export const CANDLE_CHART_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: true,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 1,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Asia/Kolkata',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const BASELINE_WIDGET_CONFIG = (symbol: string) => ({
    allow_symbol_change: false,
    calendar: false,
    details: false,
    hide_side_toolbar: true,
    hide_top_toolbar: false,
    hide_legend: false,
    hide_volume: false,
    hotlist: false,
    interval: 'D',
    locale: 'en',
    save_image: false,
    style: 10,
    symbol: symbol.toUpperCase(),
    theme: 'dark',
    timezone: 'Asia/Kolkata',
    backgroundColor: '#141414',
    gridColor: '#141414',
    watchlist: [],
    withdateranges: false,
    compareSymbols: [],
    studies: [],
    width: '100%',
    height: 600,
});

export const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 400,
    interval: '1h',
    largeChartUrl: '',
});

export const COMPANY_PROFILE_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 440,
});

export const COMPANY_FINANCIALS_WIDGET_CONFIG = (symbol: string) => ({
    symbol: symbol.toUpperCase(),
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    width: '100%',
    height: 464,
    displayMode: 'regular',
    largeChartUrl: '',
});

export const POPULAR_STOCK_SYMBOLS = [
    'TCS',
    'INFY',
    'HCLTECH',
    'WIPRO',
    'TECHM',

    'HDFCBANK',
    'ICICIBANK',
    'SBIN',
    'AXISBANK',
    'KOTAKBANK',

    'RELIANCE',
    'ONGC',
    'NTPC',
    'POWERGRID',
    'ADANIGREEN',

    'TATAMOTORS',
    'MARUTI',
    'M&M',
    'BAJAJ_AUTO',
    'EICHERMOT',

    'ITC',
    'HINDUNILVR',
    'NESTLEIND',
    'BRITANNIA',
    'TATACONSUM',
];

export const NO_MARKET_NEWS =
    '<p class="mobile-text" style="margin:0 0 20px 0;font-size:16px;line-height:1.6;color:#4b5563;">No market news available today. Please check back tomorrow.</p>';

export const WATCHLIST_TABLE_HEADER = [
    'Company',
    'Symbol',
    'Price',
    'Change',
    'Market Cap',
    'P/E Ratio',
    'Alert',
    'Action',
];