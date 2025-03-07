import React from "react";
import useCarbonStore from "../useCarbonStore";
import { Button } from "@/components/ui/button";  // Import Shadcn Button
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";  // Import Shadcn Card components

// Define types for the entry structure
interface CarbonEntry {
  carbonFootprint: string;
  recommendations: string[];
}

const CarbonHistory: React.FC = () => {
  const { history, clearHistory } = useCarbonStore();

  return (
    <div className="py-6 px-4 sm:px-6 lg:px-8">
 <Card className="w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto">
  <CardHeader>
    <CardTitle className="text-xl font-semibold">Past Calculations</CardTitle>
    <CardDescription className="text-sm text-gray-500">
      View your past carbon footprint calculations and recommendations.
    </CardDescription>
  </CardHeader>

  <CardContent>
    {history.length === 0 ? (
      <p className="leading-7 text-center [&:not(:first-child)]:mt-6">No history yet.</p>
    ) : (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        {history.map((entry: CarbonEntry, index: number) => (
          <li key={index} className="mb-4">
            <strong>{entry.carbonFootprint}</strong>
            <br />
            <h3 className="font-semibold">Basic Recommendations:</h3>
            <ul className="ml-6 list-inside">
              {entry.recommendations.map((point: string, i: number) => (
                <li key={i}>{point}</li> // Render each recommendation as a list item
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )}

    {history.length > 0 && (
      <Button onClick={clearHistory} variant="outline" className="mt-4 w-full sm:w-auto">
        Clear History
      </Button>
    )}
  </CardContent>
</Card>

    </div>
  );
};

export default CarbonHistory;
