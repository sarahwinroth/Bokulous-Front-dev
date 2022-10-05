import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from './components/Landingpage';
import Header from './components/Header';
import Navbar from './components/NavBar';
import Basket from './components/Basket';
import CreateUser from './components/CreateUser';
import LogIn from './components/LogIn';
import StatsForAdmin from './components/StatsForAdmin';
import Profile from './components/Profile';
import GetBooksAdmin from './components/GetBooksAdmin';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import UpdateBook from './components/UpdateBook';
import PurgeBook from './components/PurgeBook';
import GetCategories from './components/GetCategories';
import AddCategory from './components/AddCategory';
import DeleteCategory from './components/DeleteCategory';
import UpdateCategory from './components/UpdateCategory';
import GetUserBooks from './components/GetUserBooks';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />

        <main>
          <Routes>
            <Route
              path="/LogIn"
              element={
                <LogIn
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/Home"
              element={
                <Landingpage
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/Basket"
              element={
                <Basket
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route path="/CreateUser" element={<CreateUser />} />
            <Route path="/StatsForAdmin" element={<StatsForAdmin />} />
            <Route
              path="/Profile"
              element={
                <Profile
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/GetBooksAdmin"
              element={
                <GetBooksAdmin
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/AddBook"
              element={
                <AddBook
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/DeleteBook"
              element={
                <DeleteBook
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/PurgeBook"
              element={
                <PurgeBook
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/UpdateBook"
              element={
                <UpdateBook
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/GetCategories"
              element={
                <GetCategories
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/AddCategory"
              element={
                <AddCategory
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/DeleteCategory"
              element={
                <DeleteCategory
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/UpdateCategory"
              element={
                <UpdateCategory
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
            <Route
              path="/GetUserBooks"
              element={
                <GetUserBooks
                  loggedInUser={loggedInUser}
                  setLoggedInUser={setLoggedInUser}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
