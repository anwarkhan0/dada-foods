import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer, CreateContainer } from "./components";

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-slate-100">
        <Header />
        <main className="mt-10 w-full p-8">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
