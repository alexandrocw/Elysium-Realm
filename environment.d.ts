declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_ID: string;
      GITHUB_SECRET: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_SECRET: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}


export {}