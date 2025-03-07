import { useState, ChangeEvent, FormEvent } from "react";
import useCarbonStore from "../useCarbonStore";
import CarbonHistory from "./CarbonHistory";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";  // Import Shadcn Card components

interface FormData {
  travelMode: string;
  distance: string;
  fuelType: string;
  passengers: string;
}

const CarbonCalculator: React.FC = () => {
  const { addEntry } = useCarbonStore(); 
  const [formData, setFormData] = useState<FormData>({ travelMode: "", distance: "", fuelType: "", passengers: "" });
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/carbon/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        addEntry(data.data);
      } else {
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Logo Section */}
      <div className="absolute top-4 left-6">
        <img 
          src="https://bnzgreen.io/_next/image?url=%2Fimages%2Flogo%2Flogo3.png&w=96&q=75" 
          alt="CarbonTrackr Logo"
          className="w-16 h-auto" // Adjust size as needed
        />
      </div>

      <div className="flex justify-center py-6 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl">
          <h1 className="text-3xl font-semibold">Track and Offset Your Carbon Footprint</h1>
          <p className="text-lg text-gray-600 mt-2">
            Take the first step towards a sustainable future by calculating your carbon footprint from travel.
            Use this tool to understand your impact and explore ways to reduce it.
          </p>
        </div>
      </div>

      <div className="flex justify-center py-6 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">Carbon Footprint Calculator</CardTitle>
            <CardDescription className="text-center text-sm text-gray-500">
              Calculate the carbon footprint based on your travel details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="travelMode" className="font-medium">Mode of Transport</label>
                <Input
                  id="travelMode"
                  name="travelMode"
                  placeholder="Mode of Transport"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="distance" className="font-medium">Distance (km)</label>
                <Input
                  type="number"
                  id="distance"
                  name="distance"
                  placeholder="Distance (km)"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="fuelType" className="font-medium">Fuel Type (if applicable)</label>
                <Input
                  id="fuelType"
                  name="fuelType"
                  placeholder="Fuel Type"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="passengers" className="font-medium">Passengers</label>
                <Input
                  type="number"
                  id="passengers"
                  name="passengers"
                  placeholder="Passengers"
                  onChange={handleChange}
                  required
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Calculating..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <CarbonHistory />
      </div>
    </>
  );
};

export default CarbonCalculator;
