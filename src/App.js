import Sidebar from './components/Sidebar';
import Route from './components/Route';
import UITestPage from './pages/UITestPage';
import PicsPage from './pages/PicsPage';
import BooksManagePage from './pages/BooksManagePage';
import TodosPage from './pages/TodosPage';

function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/">
          <TodosPage />
        </Route>
        <Route path="/buttons">
          <UITestPage />
        </Route>
        <Route path="/pics">
          <PicsPage />
        </Route>
        <Route path="/bookmanage">
          <BooksManagePage />
        </Route>
      </div>
    </div>
  );
}

export default App;
