import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import jsonData from "./json/data.json";

function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : jsonData;
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const removeData = (name) => {
    const updatedData = data.filter((item) => item.name !== name);
    setData(updatedData);
  };

  const restoreAll = () => {
    setData(jsonData);
  }

  const toggleData = (name) => {
    const updatedData = data.map((item) =>
      item.name === name ? { ...item, isActive: !item.isActive } : item
    );
    setData(updatedData);
  };

  const filteredData = data.filter((data) => {
    if (filter === "active") return data.isActive;
    if (filter === "inactive") return !data.isActive;
    return true; // "all"
  });

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540] text-white">
        <div className="max-w-7xl mx-auto p-6">
          <header className="mb-8">
            <Header />
          </header>

          <main className="flex flex-col items-center">
            <section className="w-full flex flex-col md:flex-row justify-between gap-5  items-center mb-8 dark:text-neutral-0 text-black">
              <h1 className="text-4xl font-bold">Extencions List</h1>
              <div className="flex justify-between items-center gap-2">
                <button
                  onClick={() => setFilter("all")}
                  className="rounded-3xl md:px-5 md:py-3 p-5  bg-neutral-0  text-2xl  dark:bg-neutral-800 hover:bg-red-400"
                >
                  All
                </button>
                <button
                  onClick={() => setFilter("active")}
                  className="rounded-3xl md:px-5 md:py-3 p-5  bg-neutral-0  text-2xl dark:bg-neutral-800 hover:bg-red-400"
                >
                  Active
                </button>
                <button
                  onClick={() => setFilter("inactive")}
                  className="rounded-3xl md:px-5 md:py-3 p-5   bg-neutral-0  text-2xl  dark:bg-neutral-800 hover:bg-red-400"
                >
                  Inactive
                </button>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredData.map((data, index) => (
                <Card
                  key={index}
                  data={data}
                  toggleData={toggleData}
                  removeData={removeData}
                />
              ))}
            </section>
            <button
              onClick={restoreAll}
              className="mt-10 rounded-3xl md:px-5 md:py-3 p-5 bg-gradient-to-b from-[#EBF2FC] to-[#EEF8F9] dark:from-[#040918] dark:to-[#091540] text-white dark:text-neutral-0 text-2xl font-bold border-2 border-neutral-0 hover:bg-red-400"
            >
              Restore All
            </button>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
