/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"cppndczbmrtzfquefhke.supabase.co"
            }
        ]
    }
};

export default nextConfig;
