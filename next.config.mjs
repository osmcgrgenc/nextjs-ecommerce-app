import { createProxyMiddleware } from 'http-proxy-middleware';

export default {
    images: {
        domains: ['api.limandesign.com'], // İzin verilen hostname'i buraya ekleyin
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://api.limandesign.com/:path*', // Proxy to Backend
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET, POST, PUT, DELETE, OPTIONS' },
                    { key: 'Access-Control-Allow-Headers', value: 'X-Requested-With, Content-Type, Authorization' },
                ],
            },
        ];
    },
};
