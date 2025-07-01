"use client";

import { useState } from "react";

export const dynamic = 'force-dynamic';
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeft, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  DollarSign, 
  Heart,
  Download,
  Share,
  AlertTriangle,
  CheckCircle,
  XCircle,
  BarChart3
} from "lucide-react";
import Link from "next/link";

// Mock data for the report
const mockReport = {
  pitch: {
    id: "1",
    companyName: "TechFlow AI",
    founderName: "Sarah Chen",
    industry: "AI/ML",
    stage: "Seed",
    ticketSize: "$250K",
    submittedAt: "2024-01-15"
  },
  scoring: {
    overall: 8.5,
    market: 9.0,
    team: 8.0,
    product: 8.5,
    traction: 7.5,
    financials: 8.0,
    fit: 9.0
  },
  recommendation: "strong_pass",
  analysis: {
    strengths: [
      "Strong technical founding team with relevant AI/ML expertise",
      "Large addressable market with clear growth potential",
      "Innovative product with demonstrated technical advantages",
      "Early traction with paying customers and positive feedback",
      "Solid financial projections with clear path to profitability"
    ],
    concerns: [
      "Competitive market with established players",
      "Customer acquisition costs may be higher than projected",
      "Technical team heavy, may need business development expertise"
    ],
    keyMetrics: {
      marketSize: "$15B",
      customers: 50,
      revenue: "$25K MRR",
      growth: "40% month-over-month",
      burnRate: "$15K/month",
      runway: "18 months"
    }
  },
  interviewSummary: {
    duration: "25 minutes",
    completionRate: "100%",
    keyResponses: [
      {
        question: "Market Opportunity",
        response: "AI automation in customer service represents a $15B market growing at 25% annually. Our solution addresses specific pain points that current solutions don't handle effectively.",
        score: 9.0
      },
      {
        question: "Team Expertise",
        response: "Founding team combines 15+ years of AI research from Stanford with enterprise sales experience from previous startups. Technical co-founder published 12 papers in top-tier conferences.",
        score: 8.0
      },
      {
        question: "Product Differentiation",
        response: "Our proprietary neural architecture reduces false positives by 80% compared to existing solutions, leading to 3x higher customer satisfaction scores.",
        score: 8.5
      }
    ]
  }
};

const getScoreColor = (score: number) => {
  if (score >= 8.5) return "text-green-600";
  if (score >= 7.0) return "text-yellow-600";
  return "text-red-600";
};

const getRecommendationColor = (recommendation: string) => {
  switch (recommendation) {
    case "strong_pass": return "bg-green-100 text-green-800 border-green-200";
    case "pass": return "bg-blue-100 text-blue-800 border-blue-200";
    case "maybe": return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "no": return "bg-red-100 text-red-800 border-red-200";
    default: return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getRecommendationIcon = (recommendation: string) => {
  switch (recommendation) {
    case "strong_pass": return <CheckCircle className="h-4 w-4" />;
    case "pass": return <CheckCircle className="h-4 w-4" />;
    case "maybe": return <AlertTriangle className="h-4 w-4" />;
    case "no": return <XCircle className="h-4 w-4" />;
    default: return <AlertTriangle className="h-4 w-4" />;
  }
};

export default function ReportPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Link>
            </Button>
            <div>
              <h1 className="text-xl font-semibold">{mockReport.pitch.companyName} - Analysis Report</h1>
              <p className="text-sm text-gray-600">
                Generated on {new Date(mockReport.pitch.submittedAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-6xl">
        {/* Summary Card */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Overall Score */}
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {mockReport.scoring.overall}/10
                </div>
                <div className="text-lg font-medium mb-2">Overall Score</div>
                <Badge 
                  className={`${getRecommendationColor(mockReport.recommendation)} border`}
                >
                  {getRecommendationIcon(mockReport.recommendation)}
                  <span className="ml-1 capitalize">
                    {mockReport.recommendation.replace("_", " ")}
                  </span>
                </Badge>
              </div>
              
              {/* Company Info */}
              <div>
                <h3 className="font-semibold mb-3">Company Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founder:</span>
                    <span>{mockReport.pitch.founderName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Industry:</span>
                    <span>{mockReport.pitch.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Stage:</span>
                    <span>{mockReport.pitch.stage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Funding Ask:</span>
                    <span>{mockReport.pitch.ticketSize}</span>
                  </div>
                </div>
              </div>
              
              {/* Key Metrics */}
              <div>
                <h3 className="font-semibold mb-3">Key Metrics</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Market Size:</span>
                    <span>{mockReport.analysis.keyMetrics.marketSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customers:</span>
                    <span>{mockReport.analysis.keyMetrics.customers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">MRR:</span>
                    <span>{mockReport.analysis.keyMetrics.revenue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Growth:</span>
                    <span className="text-green-600">{mockReport.analysis.keyMetrics.growth}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="scoring">Detailed Scoring</TabsTrigger>
            <TabsTrigger value="interview">Interview Analysis</TabsTrigger>
            <TabsTrigger value="recommendation">Recommendation</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Scoring Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Scoring Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(mockReport.scoring).filter(([key]) => key !== "overall").map(([category, score]) => (
                    <div key={category} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="capitalize text-sm font-medium">
                          {category === "fit" ? "Investment Fit" : category}
                        </span>
                        <span className={`font-bold ${getScoreColor(score)}`}>
                          {score}/10
                        </span>
                      </div>
                      <Progress value={score * 10} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Strengths & Concerns */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Insights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2 flex items-center">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Strengths
                    </h4>
                    <ul className="space-y-1">
                      {mockReport.analysis.strengths.slice(0, 3).map((strength, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Areas of Concern
                    </h4>
                    <ul className="space-y-1">
                      {mockReport.analysis.concerns.map((concern, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <div className="w-1 h-1 bg-yellow-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {concern}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="scoring" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(mockReport.scoring).filter(([key]) => key !== "overall").map(([category, score]) => {
                const icons = {
                  market: Target,
                  team: Users,
                  product: Zap,
                  traction: TrendingUp,
                  financials: DollarSign,
                  fit: Heart
                };
                
                const Icon = icons[category as keyof typeof icons];
                
                return (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Icon className="h-5 w-5 mr-2 text-blue-600" />
                          <span className="capitalize">
                            {category === "fit" ? "Investment Fit" : category}
                          </span>
                        </div>
                        <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
                          {score}/10
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={score * 10} className="h-3 mb-4" />
                      <div className="text-sm text-gray-600">
                        {category === "market" && "Assessment of market size, growth potential, and competitive landscape."}
                        {category === "team" && "Evaluation of founding team experience, expertise, and track record."}
                        {category === "product" && "Analysis of product innovation, technical advantages, and market fit."}
                        {category === "traction" && "Review of customer adoption, revenue growth, and key metrics."}
                        {category === "financials" && "Assessment of financial projections, unit economics, and burn rate."}
                        {category === "fit" && "Alignment with investment criteria, stage, and portfolio strategy."}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="interview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Interview Summary</CardTitle>
                <CardDescription>
                  Duration: {mockReport.interviewSummary.duration} • 
                  Completion: {mockReport.interviewSummary.completionRate}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockReport.interviewSummary.keyResponses.map((response, index) => (
                  <div key={index} className="border-l-4 border-blue-200 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{response.question}</h4>
                      <Badge variant="secondary">{response.score}/10</Badge>
                    </div>
                    <p className="text-sm text-gray-600 italic">&quot;{response.response}&quot;</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {getRecommendationIcon(mockReport.recommendation)}
                  <span className="ml-2">Investment Recommendation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <Badge 
                    className={`${getRecommendationColor(mockReport.recommendation)} border text-lg p-2`}
                  >
                    {getRecommendationIcon(mockReport.recommendation)}
                    <span className="ml-2 capitalize">
                      {mockReport.recommendation.replace("_", " ")}
                    </span>
                  </Badge>
                  <p className="text-lg font-semibold mt-4 text-green-800">
                    This startup shows strong potential and aligns well with your investment criteria.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">Why This is a Strong Pass:</h4>
                    <ul className="space-y-2">
                      {mockReport.analysis.strengths.map((strength, index) => (
                        <li key={index} className="text-sm flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-yellow-700">Consider These Points:</h4>
                    <ul className="space-y-2">
                      {mockReport.analysis.concerns.map((concern, index) => (
                        <li key={index} className="text-sm flex items-start">
                          <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          {concern}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-blue-800">Next Steps:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Schedule a partner meeting to discuss further</li>
                    <li>• Request detailed financial projections and unit economics</li>
                    <li>• Consider due diligence on competitive landscape</li>
                    <li>• Evaluate potential for follow-on investment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}