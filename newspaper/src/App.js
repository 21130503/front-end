import { BrowserRouter, Route, Routes } from "react-router-dom";
import { route } from "./route";
import DefaultLayout from "./layout/DefaultLayout/defaulLayout";
import { Fragment } from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {route.map((comp, index) => {
          let Layout = DefaultLayout;
          let Page = comp.Component;
          if (comp.layout) {
            Layout = comp.layout;
          } else if (comp.layout === null) {
            Layout = Fragment;
          }
          return (
            <Route
              key={index}
              path={comp.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
