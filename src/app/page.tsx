import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, MessageSquare, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6 text-blue-600" />
            <span className="font-bold text-xl">Fundwise</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600">Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600">How it Works</Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-blue-600">Pricing</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 lg:px-6">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4">
            AI-Powered VC Screening
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Automate Your
            <span className="text-blue-600"> Startup Screening</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop drowning in cold pitches. Fundwise uses AI to automatically screen, interview, 
            and score startup pitches, delivering decision-ready reports to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <Link href="/sign-up">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#demo">Watch Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to streamline deal flow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From pitch intake to final scoring, Fundwise handles your entire screening workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Automated Intake</CardTitle>
                <CardDescription>
                  Get a unique email address that forwards pitches directly to AI screening
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>AI Interviews</CardTitle>
                <CardDescription>
                  Conversational AI conducts structured interviews with founders automatically
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Smart Scoring</CardTitle>
                <CardDescription>
                  Comprehensive scoring across market, team, product, and fit dimensions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4 lg:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Fundwise Works</h2>
            <p className="text-xl text-gray-600">Simple setup, powerful results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Set Your Criteria</h3>
              <p className="text-gray-600">Define your investment focus, stage, and ticket size preferences</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Forward Pitches</h3>
              <p className="text-gray-600">Use your unique email alias to automatically capture incoming pitches</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">AI Screening</h3>
              <p className="text-gray-600">Our AI interviews founders and analyzes their responses</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Get Reports</h3>
              <p className="text-gray-600">Receive comprehensive scoring and recommendation reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 lg:px-6 bg-blue-600 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Time Saved on Initial Screening</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10x</div>
              <div className="text-blue-100">More Pitches Processed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-blue-100">Accuracy in Pre-screening</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your deal flow?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading VCs who are already using AI to streamline their startup screening process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <Link href="/sign-up">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 lg:px-6 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Bot className="h-6 w-6" />
              <span className="font-bold text-xl">Fundwise</span>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">Terms</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Fundwise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}