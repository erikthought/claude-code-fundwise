// import { SignUp } from '@clerk/nextjs';

export const dynamic = 'force-dynamic';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Get Started</h1>
          <p className="text-gray-600">Create your Fundwise account and start screening pitches with AI</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-center text-gray-600">
            Sign up functionality will be available after setting up environment variables in Vercel.
            <br /><br />
            Clerk credentials are configured and ready to use.
          </p>
        </div>
        {/* <SignUp 
          appearance={{
            elements: {
              formButtonPrimary: 
                "bg-blue-600 hover:bg-blue-700 text-sm normal-case",
              card: "shadow-lg",
              headerTitle: "hidden",
              headerSubtitle: "hidden"
            }
          }}
        /> */}
      </div>
    </div>
  );
}