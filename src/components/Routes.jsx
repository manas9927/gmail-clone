import React from "react";
import {
  BrowserRouter as Router,
  Routes as Pages,
  Route as Page,
} from "react-router-dom";
import { Email, EmailList } from "../pages";
import { Layout } from "./Layout";

const Routes = () => {
  return (
    <Router>
      <Layout>
        <Pages>
          <Page path="/" exact element={<EmailList />} />
          <Page path="/email/:emailId" element={<Email />} />
        </Pages>
      </Layout>
    </Router>
  );
};

export default Routes;
