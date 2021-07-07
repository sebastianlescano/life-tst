import Head from 'next/head';

export default function Meta() {
    return (
        <Head>
            <link
                rel="alternate"
                type="application/rss+xml"
                href="https://www.viome.com/sitemap.xml"
            />
            <link
                rel="icon"
                type="image/svg+xml"
                href="/favicons/fav-light.svg"
            />
            <link
                rel="alternate icon shortcut"
                href="/favicons/favicon-light.ico"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicons/favicon-light-32x32.png"
            />
            <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicons/favicon-light-16x16.png"
            />
            <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/favicons/apple-touch-icon.png"
            />
            <link rel="manifest" href="/favicons/manifest.json" />
            <link
                rel="mask-icon"
                href="/favicons/safari-pinned-tab.svg"
                color="#6d4ab0"
            />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta
                name="msapplication-config"
                content="/favicons/browserconfig.xml"
            />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    );
}
