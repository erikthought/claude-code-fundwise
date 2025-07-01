"use client";

import { useState } from "react";
// import { UserButton } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";

export const dynamic = 'force-dynamic';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Bot, 
  Mail, 
  Search,
  Filter,
  Plus,
  BarChart3,
  FileText,
  Settings
} from "lucide-react";

// Mock data
const mockPitches = [
  {
    id: "1",
    companyName: "TechFlow AI",
    founderName: "Sarah Chen",
    status: "completed",
    overallScore: 8.5,
    recommendation: "strong_pass",
    createdAt: "2024-01-15",
    industry: "AI/ML",
    stage: "Seed",
    ticketSize: "$250K"
  },
  {
    id: "2",
    companyName: "GreenLogistics",
    founderName: "Mike Rodriguez",
    status: "in_progress",
    overallScore: null,
    recommendation: null,
    createdAt: "2024-01-14",
    industry: "CleanTech",
    stage: "Series A",
    ticketSize: "$500K"
  },
  {
    id: "3",
    companyName: "FinanceBot",
    founderName: "Emma Thompson",
    status: "pending",
    overallScore: null,
    recommendation: null,
    createdAt: "2024-01-13",
    industry: "Fintech",
    stage: "Pre-Seed",
    ticketSize: "$100K"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed": return "bg-green-100 text-green-800";
    case "in_progress": return "bg-yellow-100 text-yellow-800";
    case "pending": return "bg-gray-100 text-gray-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const getRecommendationColor = (recommendation: string) => {
  switch (recommendation) {
    case "strong_pass": return "bg-green-100 text-green-800";
    case "pass": return "bg-blue-100 text-blue-800";
    case "maybe": return "bg-yellow-100 text-yellow-800";
    case "no": return "bg-red-100 text-red-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPitches = mockPitches.filter(pitch => 
    pitch.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pitch.founderName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    totalPitches: mockPitches.length,
    pendingReview: mockPitches.filter(p => p.status === "pending").length,
    inProgress: mockPitches.filter(p => p.status === "in_progress").length,
    completed: mockPitches.filter(p => p.status === "completed").length,
    avgScore: 8.5
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold">Fundwise</h1>
            </div>
            <Badge variant="secondary">Dashboard</Badge>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            {/* <UserButton afterSignOutUrl="/" /> */}
            <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Total Pitches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPitches}</div>
              <div className="text-xs text-gray-500">+12% from last month</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Pending Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{stats.pendingReview}</div>
              <div className="text-xs text-gray-500">Awaiting AI interview</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
              <div className="text-xs text-gray-500">Currently interviewing</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
              <div className="text-xs text-gray-500">Reports generated</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">Avg Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.avgScore}/10</div>
              <div className="text-xs text-gray-500">Across all pitches</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Pitches List */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Pitches</CardTitle>
                    <CardDescription>Manage and review incoming startup pitches</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Pitch
                  </Button>
                </div>
                
                <div className="flex items-center space-x-4 mt-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search pitches..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {filteredPitches.map((pitch) => (
                    <div key={pitch.id} className="border rounded-lg p-4 hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold">{pitch.companyName}</h3>
                            <Badge className={getStatusColor(pitch.status)}>
                              {pitch.status.replace("_", " ")}
                            </Badge>
                            {pitch.recommendation && (
                              <Badge className={getRecommendationColor(pitch.recommendation)}>
                                {pitch.recommendation.replace("_", " ")}
                              </Badge>
                            )}
                          </div>
                          
                          <div className="text-sm text-gray-600 mb-2">
                            <div className="flex items-center space-x-4">
                              <span><strong>Founder:</strong> {pitch.founderName}</span>
                              <span><strong>Industry:</strong> {pitch.industry}</span>
                              <span><strong>Stage:</strong> {pitch.stage}</span>
                              <span><strong>Ticket:</strong> {pitch.ticketSize}</span>
                            </div>
                          </div>
                          
                          <div className="text-xs text-gray-500">
                            Received {new Date(pitch.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {pitch.overallScore && (
                            <div className="text-right">
                              <div className="text-lg font-bold text-blue-600">
                                {pitch.overallScore}/10
                              </div>
                              <div className="text-xs text-gray-500">Score</div>
                            </div>
                          )}
                          
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            View Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Forwarding Setup
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics Dashboard
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Bot className="h-4 w-4 mr-2" />
                  AI Interview Settings
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="text-sm">
                      <div className="font-medium">TechFlow AI scored 8.5/10</div>
                      <div className="text-gray-500">2 hours ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="text-sm">
                      <div className="font-medium">GreenLogistics interview started</div>
                      <div className="text-gray-500">4 hours ago</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="text-sm">
                      <div className="font-medium">New pitch from FinanceBot</div>
                      <div className="text-gray-500">1 day ago</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email Alias */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Your Email Alias</CardTitle>
                <CardDescription>Forward pitches to this address</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 p-3 rounded-md font-mono text-sm">
                  pitches@your-alias.fundwise.ai
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3">
                  Copy Address
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}