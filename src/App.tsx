import { Header } from "./components/Header/Header";
import { QueryClientProvider, QueryClient } from 'react-query';
import { Index } from "./pages";
import {ReactQueryDevtools} from 'react-query/devtools'


const queryClient = new QueryClient();

function App() {

  


  

  return (
    <QueryClientProvider client={queryClient}>
      <main className="w-full h-full flex justify-center flex-col">
        <Header />
        <Index/>
      </main>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}

export default App
