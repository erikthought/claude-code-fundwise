"use client";

import { useState } from "react";

export const dynamic = 'force-dynamic';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, Building2, DollarSign, MapPin, Target } from "lucide-react";

const STAGES = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C", "Growth"];
const INDUSTRIES = ["SaaS", "Fintech", "Healthtech", "AI/ML", "E-commerce", "EdTech", "PropTech", "CleanTech", "Consumer", "B2B"];
const GEOGRAPHIES = ["North America", "Europe", "Asia", "Latin America", "Africa", "Global"];
const FIRM_SIZES = ["Solo GP", "2-5 Partners", "6-15 Partners", "16+ Partners"];

interface OnboardingData {
  firmName: string;
  firmSize: string;
  investmentFocus: string;
  ticketSizeMin: string;
  ticketSizeMax: string;
  stagePreference: string[];
  industryPreference: string[];
  geographyPreference: string[];
}

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    firmName: "",
    firmSize: "",
    investmentFocus: "",
    ticketSizeMin: "",
    ticketSizeMax: "",
    stagePreference: [],
    industryPreference: [],
    geographyPreference: []
  });

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async () => {
    // Here you would save to Supabase
    console.log("Onboarding data:", data);
    router.push("/dashboard");
  };

  const handleArrayChange = (field: keyof OnboardingData, value: string, checked: boolean) => {
    setData(prev => {
      const currentArray = prev[field] as string[];
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] };
      } else {
        return { ...prev, [field]: currentArray.filter(item => item !== value) };
      }
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Tell us about your firm</h2>
              <p className="text-gray-600">We'll customize Fundwise to match your investment criteria</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="firmName">Firm Name</Label>
                <Input
                  id="firmName"
                  value={data.firmName}
                  onChange={(e) => setData({ ...data, firmName: e.target.value })}
                  placeholder="Enter your firm name"
                />
              </div>
              
              <div>
                <Label htmlFor="firmSize">Firm Size</Label>
                <Select value={data.firmSize} onValueChange={(value) => setData({ ...data, firmSize: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select firm size" />
                  </SelectTrigger>
                  <SelectContent>
                    {FIRM_SIZES.map(size => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="investmentFocus">Investment Focus</Label>
                <Textarea
                  id="investmentFocus"
                  value={data.investmentFocus}
                  onChange={(e) => setData({ ...data, investmentFocus: e.target.value })}
                  placeholder="Describe your investment thesis and focus areas"
                  rows={4}
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Investment Parameters</h2>
              <p className="text-gray-600">Define your typical ticket size range</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="ticketMin">Minimum Ticket Size ($)</Label>
                <Input
                  id="ticketMin"
                  type="number"
                  value={data.ticketSizeMin}
                  onChange={(e) => setData({ ...data, ticketSizeMin: e.target.value })}
                  placeholder="25000"
                />
              </div>
              
              <div>
                <Label htmlFor="ticketMax">Maximum Ticket Size ($)</Label>
                <Input
                  id="ticketMax"
                  type="number"
                  value={data.ticketSizeMax}
                  onChange={(e) => setData({ ...data, ticketSizeMax: e.target.value })}
                  placeholder="500000"
                />
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-4 block">Preferred Stages</Label>
              <div className="grid grid-cols-2 gap-3">
                {STAGES.map(stage => (
                  <div key={stage} className="flex items-center space-x-2">
                    <Checkbox
                      id={stage}
                      checked={data.stagePreference.includes(stage)}
                      onCheckedChange={(checked) => 
                        handleArrayChange("stagePreference", stage, checked as boolean)
                      }
                    />
                    <Label htmlFor={stage} className="text-sm">{stage}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Industry Preferences</h2>
              <p className="text-gray-600">Select the industries you typically invest in</p>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-4 block">Industries</Label>
              <div className="grid grid-cols-2 gap-3">
                {INDUSTRIES.map(industry => (
                  <div key={industry} className="flex items-center space-x-2">
                    <Checkbox
                      id={industry}
                      checked={data.industryPreference.includes(industry)}
                      onCheckedChange={(checked) => 
                        handleArrayChange("industryPreference", industry, checked as boolean)
                      }
                    />
                    <Label htmlFor={industry} className="text-sm">{industry}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold">Geographic Focus</h2>
              <p className="text-gray-600">Where do you typically invest?</p>
            </div>
            
            <div>
              <Label className="text-base font-medium mb-4 block">Geographies</Label>
              <div className="grid grid-cols-2 gap-3">
                {GEOGRAPHIES.map(geography => (
                  <div key={geography} className="flex items-center space-x-2">
                    <Checkbox
                      id={geography}
                      checked={data.geographyPreference.includes(geography)}
                      onCheckedChange={(checked) => 
                        handleArrayChange("geographyPreference", geography, checked as boolean)
                      }
                    />
                    <Label htmlFor={geography} className="text-sm">{geography}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium mb-2">Your Investment Profile Summary</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Firm:</strong> {data.firmName || "Not specified"}</p>
                <p><strong>Ticket Size:</strong> ${data.ticketSizeMin || "0"} - ${data.ticketSizeMax || "0"}</p>
                <p><strong>Stages:</strong> {data.stagePreference.length > 0 ? data.stagePreference.join(", ") : "None selected"}</p>
                <p><strong>Industries:</strong> {data.industryPreference.length > 0 ? data.industryPreference.join(", ") : "None selected"}</p>
                <p><strong>Geographies:</strong> {data.geographyPreference.length > 0 ? data.geographyPreference.join(", ") : "None selected"}</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Welcome to Fundwise</h1>
            <div className="text-sm text-gray-500">Step {step} of 4</div>
          </div>
          
          <div className="flex space-x-2">
            {[1, 2, 3, 4].map(i => (
              <div
                key={i}
                className={`h-2 flex-1 rounded-full ${
                  i <= step ? "bg-blue-600" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            {renderStep()}
            
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              
              <Button
                onClick={handleNext}
                className="flex items-center"
              >
                {step === 4 ? "Complete Setup" : "Next"}
                {step < 4 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}