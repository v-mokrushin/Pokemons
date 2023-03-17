import React from "react";
import "./App.css";
import "../../assets/css/main.scss";
import { observer } from "mobx-react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router";
import { Layout } from "../Structure/Layout/Layout";
import { HomePage } from "../../pages/HomePage/HomePage";
import { PokemonPage } from "../../pages/PokemonPage/PokemonPage";

const App = observer(() => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/:name" element={<PokemonPage />} />
          <Route
            path="*"
            element={
              <div>
                <h2>Страница не найдена</h2>
              </div>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
});

export default App;
