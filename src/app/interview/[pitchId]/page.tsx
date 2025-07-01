"use client";

import { useState, useEffect, useRef } from "react";

export const dynamic = 'force-dynamic';
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { 
  Bot, 
  User, 
  Send, 
  Mic, 
  MicOff, 
  Clock, 
  CheckCircle,
  ArrowLeft,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

interface Message {
  id: string;
  type: "ai" | "user";
  content: string;
  timestamp: Date;
}

type InterviewStage = "introduction" | "company_overview" | "market_analysis" | "team" | "product" | "traction" | "financials" | "funding" | "completion";

interface InterviewState {
  stage: InterviewStage;
  currentQuestion: string;
  progress: number;
}

const INTERVIEW_QUESTIONS = {
  introduction: "Hi! I'm the Fundwise AI interviewer. I'll be asking you a series of questions about your startup to help our investment team evaluate your pitch. Let's start with a brief introduction - what's your name and what does your company do?",
  company_overview: "Great! Can you tell me more about your company's mission and the specific problem you're solving?",
  market_analysis: "That's interesting. Can you describe the market opportunity? How large is the addressable market and what's your go-to-market strategy?",
  team: "Tell me about your founding team. What relevant experience and expertise do you bring to this venture?",
  product: "Can you walk me through your current product or service? What makes it unique compared to existing solutions?",
  traction: "What traction have you achieved so far? This could include customers, revenue, partnerships, or other key metrics.",
  financials: "Can you share some details about your current financial situation and projections?",
  funding: "What are you looking to raise in this round and how do you plan to use the funding?",
  completion: "Thank you for taking the time to answer these questions. Your responses have been recorded and will be analyzed to generate a comprehensive report for our investment team. You should receive feedback within 24-48 hours. Is there anything else you'd like to add?"
};

export default function InterviewPage() {
  const params = useParams();
  const pitchId = params.pitchId as string;
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [interviewState, setInterviewState] = useState<InterviewState>({
    stage: "introduction",
    currentQuestion: INTERVIEW_QUESTIONS.introduction,
    progress: 0
  });
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Add initial AI message
    const initialMessage: Message = {
      id: "1",
      type: "ai",
      content: interviewState.currentQuestion,
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  }, [interviewState.currentQuestion]);

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(() => {
      const nextStage = getNextStage(interviewState.stage);
      const nextQuestion = INTERVIEW_QUESTIONS[nextStage];
      const progress = calculateProgress(nextStage);

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: nextQuestion,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setInterviewState({
        stage: nextStage,
        currentQuestion: nextQuestion,
        progress
      });
      setIsTyping(false);
    }, 2000);
  };

  const getNextStage = (currentStage: InterviewStage): InterviewStage => {
    const stages = Object.keys(INTERVIEW_QUESTIONS) as InterviewStage[];
    const currentIndex = stages.indexOf(currentStage);
    return currentIndex < stages.length - 1 ? stages[currentIndex + 1] : "completion";
  };

  const calculateProgress = (stage: string) => {
    const stages = Object.keys(INTERVIEW_QUESTIONS);
    const currentIndex = stages.indexOf(stage);
    return Math.round((currentIndex / (stages.length - 1)) * 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const isCompleted = interviewState.stage === "completion";

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
            <div className="flex items-center space-x-2">
              <Bot className="h-6 w-6 text-blue-600" />
              <h1 className="text-xl font-semibold">AI Interview</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary">
              <Clock className="h-3 w-3 mr-1" />
              {Math.floor(messages.length / 2)} min
            </Badge>
            <div className="text-sm text-gray-600">
              Progress: {interviewState.progress}%
            </div>
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${interviewState.progress}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center">
                  <Bot className="h-5 w-5 mr-2 text-blue-600" />
                  Fundwise AI Interviewer
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-4 ${
                          message.type === "user"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === "ai" && (
                            <Bot className="h-4 w-4 mt-1 text-blue-600" />
                          )}
                          {message.type === "user" && (
                            <User className="h-4 w-4 mt-1" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-4 max-w-[80%]">
                        <div className="flex items-center space-x-2">
                          <Bot className="h-4 w-4 text-blue-600" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </CardContent>
              
              {!isCompleted && (
                <div className="border-t p-4">
                  <div className="flex items-center space-x-2">
                    <Textarea
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your response here..."
                      className="flex-1 min-h-[40px] max-h-[120px] resize-none"
                      rows={2}
                    />
                    <div className="flex flex-col space-y-2">
                      <Button
                        onClick={handleSendMessage}
                        disabled={!currentMessage.trim() || isTyping}
                        size="sm"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsRecording(!isRecording)}
                        className={isRecording ? "bg-red-50 border-red-200" : ""}
                      >
                        {isRecording ? (
                          <MicOff className="h-4 w-4 text-red-600" />
                        ) : (
                          <Mic className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  {isRecording && (
                    <p className="text-xs text-red-600 mt-2 flex items-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></div>
                      Recording... Click to stop
                    </p>
                  )}
                </div>
              )}
              
              {isCompleted && (
                <div className="border-t p-4 bg-green-50">
                  <div className="flex items-center space-x-2 text-green-800">
                    <CheckCircle className="h-5 w-5" />
                    <p className="font-medium">Interview Completed!</p>
                  </div>
                  <p className="text-sm text-green-700 mt-1">
                    Your responses are being analyzed. You'll receive a detailed report within 24-48 hours.
                  </p>
                </div>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Interview Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Interview Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.keys(INTERVIEW_QUESTIONS).map((stage, index) => {
                    const stageNames = {
                      introduction: "Introduction",
                      company_overview: "Company Overview",
                      market_analysis: "Market Analysis",
                      team: "Team",
                      product: "Product",
                      traction: "Traction",
                      financials: "Financials",
                      funding: "Funding",
                      completion: "Completion"
                    };
                    
                    const currentIndex = Object.keys(INTERVIEW_QUESTIONS).indexOf(interviewState.stage);
                    const isCompleted = index < currentIndex;
                    const isCurrent = index === currentIndex;
                    
                    return (
                      <div key={stage} className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full ${
                          isCompleted ? "bg-green-500" : 
                          isCurrent ? "bg-blue-500" : "bg-gray-300"
                        }`}>
                          {isCompleted && <CheckCircle className="w-4 h-4 text-white" />}
                        </div>
                        <span className={`text-sm ${
                          isCurrent ? "font-medium text-blue-600" : 
                          isCompleted ? "text-green-600" : "text-gray-500"
                        }`}>
                          {stageNames[stage as keyof typeof stageNames]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Lightbulb className="h-4 w-4 mr-2 text-yellow-500" />
                  Interview Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Be specific with numbers and metrics</p>
                  <p>• Provide concrete examples</p>
                  <p>• Keep responses focused and clear</p>
                  <p>• You can use voice or text input</p>
                  <p>• Take your time to think</p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Session Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p><strong>Pitch ID:</strong> {pitchId}</p>
                <p><strong>Started:</strong> {new Date().toLocaleTimeString()}</p>
                <p><strong>Duration:</strong> {Math.floor(messages.length / 2)} minutes</p>
                <p><strong>Responses:</strong> {Math.floor(messages.length / 2)}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}