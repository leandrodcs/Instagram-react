import Posts from "./Posts";
import Stories from "./Stories";

export default function MainContent() {
  return (
    <div class="container">
      <div class="main">
        <Stories />
        <Posts />
      </div>
      <div class="main-blank"></div>
      <div class="bottom-fixer"></div>
    </div>
  );
}
