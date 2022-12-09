import './App.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Outlet, Link, useSearchParams, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Title/>
    <MySidebar />
	  <Routes>
	    <Route path="/" element={<Layout />}>
		  <Route index element={<Home />} />
		  <Route path="search" element={<Search />} />
		  <Route path="*" element={<NoMatch />} />
	   </Route>
	  </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <Sidebar>
            <Menu>
            <Link to="/"><MenuItem> Home </MenuItem></Link>
            <Link to="/search?q="><MenuItem> Search </MenuItem></Link>
            <Link to="/nothing-here"><MenuItem> NoMatch </MenuItem></Link>
          </Menu>
      </Sidebar>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function MySidebar() {
  return(
    <Sidebar>
      <Menu>

      </Menu>
    </Sidebar>
  )
}

function Title() {
  return(
    <nav class="bg-dark navbar-dark navbar">
            <div className="row col-12 d-flex justify-content-center text-white">
                <h3>Welcome to NTUT Web Programming</h3>
            </div>
        </nav>
  )
}

function Home() {
  return (
    <div>
      <h2>This is our Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/search')
  };

  return (
    <div>
      <h2>Your search term: {searchParams.get('q')}</h2>
      <form>
        <label>
            Search:&nbsp;
            <input name="q" type="text" />&nbsp;
            <input type="submit" value="Submit" />
        </label>
      </form>
     </div>
  );
}

export default App;