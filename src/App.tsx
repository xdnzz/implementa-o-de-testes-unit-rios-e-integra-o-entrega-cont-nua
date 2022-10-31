import { Header } from "./components/Header/Header";
import { QueryClientProvider, QueryClient } from 'react-query';
import {SingleCountry} from './pages/Country/SingleCountry'
import { ReactQueryDevtools } from 'react-query/devtools';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Index } from "./pages/Index/Index";


const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <main className="w-full h-full flex justify-center flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test" element={<SingleCountry />} />
          </Routes>
        </main>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      </QueryClientProvider>
    </Router>
  )
}

export default App
