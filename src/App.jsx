import AllRoutes from "./routes/AllRoutes";
import { Footer, Header } from "./components";
function App() {

  return (
    <div className="bg-black  text-white h-screen " >
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
