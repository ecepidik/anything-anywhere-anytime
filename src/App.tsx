import React, { FunctionComponent, MouseEvent, ReactNode, useState } from "react";
import "./App.css";
import { InvisibleButton, StyledPaper } from "./AppStyles";
import { AppHeader } from "./components/AppHeader";
import { AppSideMenu } from "./components/side-menu/AppSideMenu";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router';
import { TaskTracker } from "./views/task-tracker/TaskTracker";
import Grid from "@mui/material/Grid";

interface componentRoute {
  route: string;
  fnComponent: ReactNode;
  displayName: string;
}

const App: FunctionComponent = () => {
  const [showMenu, setShowMenu] = useState(true);
  const routes: componentRoute[] = [
    {"route": "/tasks", "fnComponent": <TaskTracker/>, displayName: "Task Tracker"},
    {"route": "/habits", "fnComponent": <TaskTracker/>, displayName: "Habit Tracker"}
  ];
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setShowMenu(open);
    };
  const selectMenuItem = (target: EventTarget) => {
    console.log(target);
  };

  return (
    <StyledPaper>
      <InvisibleButton onMouseOver={() => setShowMenu(true)} />
      <AppSideMenu menuOpen={showMenu} toggleMenu={toggleDrawer} selectMenuItem={selectMenuItem}/>
      <Grid container direction="column" spacing={2} alignItems="center">
      <AppHeader />
      <Router>
      <div>
        <nav>
          <ul>
            {routes.map((r, index) => (
              <li>
              <Link to={r.route}>{r.displayName}</Link>
            </li>
            ))}
          </ul>
        </nav>        
        <Routes>
          {routes.map((r, index) => (
            <Route key={index} path={r.route} element={r.fnComponent} />
          ))}
        </Routes>
      </div>
      </Router>
      </Grid>
    </StyledPaper>
  );
};

export default App;
