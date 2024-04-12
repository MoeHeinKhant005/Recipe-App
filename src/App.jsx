import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RandomRecipe from './pages/RandomRecipe';
import SearchResults from './pages/SearchResult';
import { createContext, useState } from 'react';

export const SidebarContext = createContext(null);

function App() {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="App w-full h-auto bg-white flex flex-none flex-col justify-start items-center">
      <SidebarContext.Provider value={[isExpanded, setIsExpanded]}>
        <Header/>
        <Sidebar/>
      </SidebarContext.Provider>
      <SearchResults/> 
    </div>
  )
}

export default App;
