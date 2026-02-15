import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import BrowseIssues from "../pages/Issues/BrowseIssues";
import ReportIssue from "../pages/Issues/ReportIssue";
import Auth from "../pages/Auth/Auth";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/issues" element={<BrowseIssues />} />
      <Route path="/report" element={<ReportIssue />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}
