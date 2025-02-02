import Header from "./components/Header";
import TaxForm from "./components/TaxForm";

function App() {
  return (
    <div className="h-screen w-screen p-4 flex justify-center items-center  bg-blue-100">
      <div className="container px-4 mx-auto">
        <div className="max-w-md mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg">
          <Header />
          <TaxForm />
        </div>
      </div>
    </div>
  );
}

export default App;
