export default function Suggestion(props) {
  return (
    <div class="suggestion">
      <div class="suggestion-right">
        <a href="#">
          <img class="suggestion-image" src={props.image} />
        </a>
        <div class="suggestion-right-writing">
          <a href="#">{props.name}</a>
          <p>{props.follows === true ? `Segue você` : `Novo no Instagram`}</p>
        </div>
      </div>
      <p>Seguir</p>
    </div>
  );
}
