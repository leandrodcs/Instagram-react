import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

export default function MainContent() {
  return (
    <div class="container">
      <div class="main">
        <Stories />
        <Posts />
        <Sidebar />
      </div>
      <div class="main-blank"></div>
      <div class="bottom-fixer"></div>
    </div>
  );
}
