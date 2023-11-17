import routes from "./router/index";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((item: any) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={<item.component />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
