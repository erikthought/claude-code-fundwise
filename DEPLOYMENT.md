# Vercel Deployment Guide

## Environment Variables Required

In your Vercel project dashboard, add these environment variables:

### Clerk Authentication
```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_bG9naWNhbC1nbG93d29ybS00OS5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_AGh36OpoiSY5Yf9SXeAkYyNxfelReGz9XPZd1rC0OB
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
```

### Supabase Database
```
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deployment Steps

1. **Connect Repository to Vercel:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository: `erikthought/claude-code-fundwise`

2. **Configure Environment Variables:**
   - In the Vercel project settings, go to "Environment Variables"
   - Add all the variables listed above with your actual values

3. **Deploy:**
   - Vercel will automatically trigger a deployment
   - The build should complete successfully with proper environment variables

## Getting Service Credentials

### Clerk.dev Setup:
1. Sign up at [clerk.dev](https://clerk.dev)
2. Create a new application
3. Copy the publishable key and secret key from the dashboard
4. Configure sign-in/sign-up redirects in Clerk dashboard

### Supabase Setup:
1. Sign up at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Project Settings > API
4. Copy the Project URL and anon/public key
5. Set up the database tables using the schema in `src/lib/database.types.ts`

## Common Deployment Issues

1. **Build Fails with Clerk Error:**
   - Ensure NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is set
   - Make sure the key starts with `pk_test_` or `pk_live_`

2. **TypeScript Errors:**
   - The build is configured to ignore TS errors during deployment
   - Check `next.config.ts` for typescript.ignoreBuildErrors setting

3. **Missing Environment Variables:**
   - All NEXT_PUBLIC_ variables must be set in Vercel dashboard
   - Secret variables (without NEXT_PUBLIC_) are also required

## Testing Deployment

After deployment:
1. Visit your Vercel deployment URL
2. Test the landing page loads correctly
3. Try signing up (requires Clerk to be properly configured)
4. Test the onboarding flow