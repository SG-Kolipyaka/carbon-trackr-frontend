import AllRoutes from "./pages/AllRoutes";

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url('https://media.istockphoto.com/id/1328866524/photo/green-blue-watercolor-background.jpg?s=612x612&w=0&k=20&c=nZgicZQ-LPg0IuxC809sqiaKlA0lWZPh8chNbCch6LM=')`,
        backgroundSize: 'cover',  // Ensures the image covers the entire area
        backgroundPosition: 'center',  // Centers the background image
        backgroundRepeat: 'no-repeat',  // Prevents repeating the image
      }}
    >
      <AllRoutes />
    </div>
  );
}

export default App;
