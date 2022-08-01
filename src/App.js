import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Footer } from "./components/atoms/Footer";
import { Woche1 } from "./components/pages/Woche1";
import { AnimatePresence } from "framer-motion";
import { StoreProvider } from "./helper/store";
import { UnlockChapter1 } from "./components/pages/UnlockChapter1";
import { HomeDev } from "./components/pages/HomeDev";
import { Woche2 } from "./components/pages/Woche2";
import { Woche3 } from "./components/pages/Woche3";
import { Woche4 } from "./components/pages/Woche4";
import { Woche5 } from "./components/pages/Woche5";
import { UnlockRiddle } from "./components/pages/UnlockRiddle";
import { UnlockRiddle4_9 } from "./components/pages/UnlockRiddle4_9";

function App() {
  return (
    <>
      <HashRouter>
        <StoreProvider>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/Woche1" component={Woche1} />
                  <Route exact path="/Woche2" component={Woche2} />
                  <Route exact path="/Woche3" component={Woche3} />
                  <Route exact path="/Woche4" component={Woche4} />
                  <Route exact path="/Woche5" component={Woche5} />
                  <Route exact path="/siegel/:id" component={UnlockRiddle4_9} />
                  <Route
                    exact
                    path="/Woche-4-bansa"
                    render={() => (
                      <UnlockRiddle chapter={4} riddle={8}>
                        <Woche4 />
                      </UnlockRiddle>
                    )}
                  />
                  <Route
                    exact
                    path="/abschlussWoche2"
                    render={() => (
                      <UnlockRiddle chapter={2} riddle={4}>
                        <Woche2 />
                      </UnlockRiddle>
                    )}
                  />
                  <Route exact path="/dev" component={HomeDev} />
                  <Route
                    exact
                    path="/abschlussWoche1"
                    component={UnlockChapter1}
                  />
                  <Route default component={Home} />
                </Switch>
              </AnimatePresence>
            )}
          />
        </StoreProvider>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
