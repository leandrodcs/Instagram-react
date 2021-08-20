export default function Story(props) {
  console.log(props);
  return (
    <a class="story" href="#">
      <img class="story-background" src="assets/stories_background.jpg" />
      <img class="story-image" src={props.image} />
      <p>{props.name}</p>
    </a>
  );
}
