import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/Landing";
import BrowseIssues from "../pages/Issues/BrowseIssues";
import ReportIssue from "../pages/Issues/ReportIssue";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/issues" element={<BrowseIssues />} />
      <Route path="/report" element={<ReportIssue />} />
    </Routes>
  );
}
