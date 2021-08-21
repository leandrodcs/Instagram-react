import SidebarSuggestion from "./SidebarSuggestion";

export default function Sidebar() {
  const user = {name: `Leandro Schmidt`, username: `leandrodcs`, image: `assets/catanacomics 1.png`};
  const suggestions = [
    {name: `bad.vibes.memes`, image: `assets/badvibesmemes 1.png`, follows: true},
    {name: `chibirdart`, image: `assets/chibirdart 1.png`, follows: true},
    {name: `razoesparaacreditar`, image: `assets/razoesparaacreditar 1.png`, follows: false},
    {name: `adorable_animals`, image: `assets/adorableanimals 1.png`, follows: true},
    {name: `smallcutecats`, image: `assets/smallcutecats 1.png`, follows: true},
  ];

  return (
    <div class="sidebar">
      <SidebarHeader name={user.name} username={user.username} image={user.image}/>
      <div class="suggestions-header">
        <p>Sugestões para você</p>
        <a href="#">Ver tudo</a>
      </div>
      {suggestions.map((s) => (
        <SidebarSuggestion name={s.name} image={s.image} follows={s.follows} />
      ))}
      <p class="sidebar-footer">
        <a href="">Sobre</a> • <a href="">Ajuda</a> • <a href="">Imprensa</a>•
        <a href="">API</a> • <a href="">Carreiras</a> •
        <a href="">Privacidade</a> • <a href="">Termos</a> •
        <a href="">Localizações</a> • <a href="">Contas mais relevantes</a> •
        <a href="">Hashtags</a> • <a href="">Idioma</a>
      </p>
      <p class="sidebar-footer fixer">© 2021 INSTAGRAM DO FACEBOOK</p>
    </div>
  );
}

function SidebarHeader(props) {
  return (
    <div class="sidebar-header">
    <a href="#">
      <img src={props.image} />
    </a>
    <div class="sidebar-header-writing">
      <a href="#" class="account">
      {props.username}
      </a>
      <div class="account-name">{props.name}</div>
    </div>
  </div>
  )
}