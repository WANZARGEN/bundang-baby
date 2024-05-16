/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            // TODO: will be updated 
            {
            source: '/',
            destination: '/landing',
            permanent: true,
            },
        ]
    }
}

export default nextConfig;
