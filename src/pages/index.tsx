import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Layout } from "./Layout";
import { Skills } from "./Skills";
import { About } from "./About";
import { Portfolio } from "./Portfolio";
import { Contact } from "./Contact";
import { Welcome } from "./Welcome";
import { PageNames } from "./enum";

export function Pages() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path={PageNames.welcome} element={<Welcome />} />
        <Route index path={PageNames.home} element={<Home />} />
        <Route path={PageNames.readme} element={<About />} />
        <Route path={PageNames.skills} element={<Skills />} />
        <Route path={PageNames.portfolio} element={<Portfolio />} />
        <Route path={PageNames.contact} element={<Contact />} />
      </Route>
    </Routes>
  );
}
