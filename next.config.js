const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
    poweredByHeader: false,
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: createSecureHeaders({
                    forceHTTPSRedirect: [
                        true,
                        {
                            maxAge: 63072000,
                            includeSubDomains: true,
                            preload: true,
                        },
                    ],
                    frameGuard: 'sameorigin',
                }),
            },
        ];
    },
};
