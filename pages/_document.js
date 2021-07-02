import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="medium" content="website" />
                    <meta name="googlebot" content="NOODP" />
                    <meta name="slurp" content="NOYDIR" />
                    <meta name="bingbot" content="NOODP" />
                    <meta name="robots" content="max-image-preview:large" />
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta
                        httpEquiv="X-UA-Compatible"
                        content="IE=edge,chrome=1"
                    />
                    <meta property="og:site_name" content="Viome.com" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="fb:app_id" content="MyViome" />
                    <meta property="fb:pages" content="501238623411978" />
                    <meta name="twitter:site" content="@MyViome" />
                    <meta name="twitter:creator" content="@MyViome" />
                    <link
                        rel="preload"
                        href="/fonts/Calibrefonts/CalibreRegular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Calibrefonts/CalibreSemibold.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Tiemfonts/TiemposHeadlineRegular.woff2"
                        as="font"
                        type="font/woff2"
                        crossOrigin=""
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
