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
            Authentication integration with Clerk.dev required.
            <br />
            Add your Clerk environment variables to enable sign up.
          </p>
        </div>
      </div>
    </div>
  );
}