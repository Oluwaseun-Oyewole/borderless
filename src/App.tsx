import History from "./components/history";
import MainContent from "./components/main";
import Navigation from "./components/nav";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Navigation />
      <main className="w-full">
        <div className="grid lg:grid-flow-col lg:grid-cols-[17%_60%_23%] h-screen">
          <Sidebar />
          <MainContent />
          <History />
        </div>
      </main>
    </>
  );
}

export default App;
