import { FlagCard } from "./components/FlagCard/FlagCard"
import { Header } from "./components/Header/Header"

function App() {

  return (
    <main className="w-[100%] bg-slate-800 h-[100%]">
      <Header />
      <div className="w-[90%] flex flex-wrap justify-center justify-center">
        <FlagCard
          capital="Capital"
          flag="https://www.holandaevoce.nl/binaries/large/content/gallery/nl-netherlandsandyou/content-afbeeldingen/vlag-nederland.png"
          name="Holanda"
          population="2"
          region="sei la porra"
        />
     
      </div>
    </main>
  )
}

export default App
