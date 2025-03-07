import { useState } from "react";
import useCarbonStore from "../useCarbonStore";
import CarbonHistory from "./CarbonHistory";

const CarbonCalculator = () => {
    const { addEntry } = useCarbonStore(); // Zustand store function
    const [formData, setFormData] = useState({ travelMode: "", distance: "", fuelType: "", passengers: "" });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
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
                addEntry(data.data); // Save to Zustand store
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
        <div>
            <h2>Carbon Footprint Calculator</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="travelMode" placeholder="Mode of Transport" onChange={handleChange} required />
                <input type="number" name="distance" placeholder="Distance (km)" onChange={handleChange} required />
                <input type="text" name="fuelType" placeholder="Fuel Type (if applicable)" onChange={handleChange} />
                <input type="number" name="passengers" placeholder="Passengers" onChange={handleChange} required />
                <button type="submit" disabled={loading}>{loading ? "Calculating..." : "Submit"}</button>
            </form>
        </div>
        <CarbonHistory/>
        </>
    );
};

export default CarbonCalculator;
