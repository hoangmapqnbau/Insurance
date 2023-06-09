import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { route } from "./Routes";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {route &&
            route.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
