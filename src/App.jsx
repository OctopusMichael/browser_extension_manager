import Card from "./components/Card";
import Header from "./components/Header";

function App() {
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
                <button className="rounded-3xl md:px-5 md:py-3 p-5  bg-neutral-0  text-2xl  dark:bg-neutral-800 hover:bg-red-400">All</button>
                <button className="rounded-3xl md:px-5 md:py-3 p-5  bg-neutral-0  text-2xl dark:bg-neutral-800 hover:bg-red-400">Active</button>
                <button className="rounded-3xl md:px-5 md:py-3 p-5   bg-neutral-0  text-2xl  dark:bg-neutral-800 hover:bg-red-400">Inactive</button>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
