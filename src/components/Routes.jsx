import React from "react";
import {
  BrowserRouter as Router,
  Routes as Pages,
  Route as Page,
} from "react-router-dom";
import { Email, EmailList } from "../pages";

const Routes = () => {
  return (
    <Router>
      <Pages>
        <Page path="/" exact element={<EmailList />} />
        <Page path="/email/:emailId" element={<Email />} />
      </Pages>
    </Router>
  );
};

export default Routes;
