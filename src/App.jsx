import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RandomRecipe from './pages/RandomRecipe';
import SearchResults from './pages/SearchResult';
import RecipeDetails from './pages/RecipeDetails';
import { createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

export const SidebarContext = createContext(null);

function App() {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <HashRouter>
      <div className="App w-full h-auto bg-white flex flex-none flex-col justify-start items-center">
        <SidebarContext.Provider value={[isExpanded, setIsExpanded]}>
          <Header/>
          <Sidebar/>
        </SidebarContext.Provider>
        <Routes>
          <Route path='/' element={<SearchResults/>} />
          <Route path='/randomRecipe' element={<RandomRecipe/>} />
          <Route path='/recipeDetails/:recipeId' element={<RecipeDetails/>} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App;
