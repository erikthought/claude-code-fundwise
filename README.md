# Fundwise - AI-Powered VC Screening Platform

Fundwise is an AI-driven startup screening assistant that helps venture capital investors automatically process, interview, and score incoming startup pitches.

## Features

- **Automated Pitch Intake**: Unique email forwarding system for seamless pitch collection
- **AI-Powered Interviews**: Conversational AI conducts structured interviews with founders
- **Comprehensive Scoring**: Multi-dimensional analysis across market, team, product, traction, financials, and investment fit
- **Interactive Dashboard**: Manage pitches, view reports, and track screening progress
- **Detailed Reports**: In-depth analysis with recommendations and next steps

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, shadcn/ui
- **Authentication**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **AI**: OpenAI GPT (future integration)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Clerk.dev account
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fundwise-ui
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── dashboard/         # VC Dashboard
│   ├── onboarding/        # VC Onboarding Flow
│   ├── interview/         # AI Interview Interface
│   ├── report/            # Scoring Reports
│   ├── sign-in/           # Authentication
│   └── sign-up/
├── components/
│   └── ui/                # shadcn/ui components
├── lib/
│   ├── supabase.ts        # Database client
│   ├── database.types.ts  # TypeScript types
│   └── utils.ts           # Utilities
└── middleware.ts          # Clerk middleware
```

## Database Schema

The application uses the following main tables:

- `vc_profiles`: Venture capital investor profiles and preferences
- `startup_pitches`: Incoming startup pitch data
- `interviews`: AI interview sessions and responses
- `scoring_reports`: Generated analysis and scoring reports

## Key Features

### VC Onboarding
- Multi-step form to capture investment criteria
- Firm details, ticket size, stage preferences
- Industry and geography preferences

### Dashboard
- Overview of all pitches and their status
- Real-time statistics and analytics
- Quick actions and recent activity

### AI Interview System
- Conversational interface for founder interviews
- Progressive questioning across key areas
- Voice and text input support
- Real-time progress tracking

### Scoring & Reports
- Multi-dimensional scoring system
- Detailed analysis with strengths and concerns
- Investment recommendations
- Exportable reports

## Deployment

### Vercel Deployment

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on git push

### Environment Variables for Production

Set the following environment variables in your Vercel project:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Next Steps

To complete the implementation:

1. **Backend Integration**: Implement API routes for Supabase operations
2. **Email System**: Set up email forwarding and parsing
3. **AI Integration**: Connect OpenAI API for interview and scoring
4. **Voice Features**: Add voice recording and transcription
5. **Real-time Updates**: Implement WebSocket for live updates

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please contact the development team or create an issue in the repository.