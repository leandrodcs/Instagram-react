import Story from "./Story";

export default function Stories() {
  const stories = [
    { name: `9gag`, image: `assets/9gag 1.png` },
    { name: `meowed`, image: `assets/meowed 1.png` },
    { name: `barked`, image: `assets/barked 1.png` },
    { name: `nathanwpylestrangeplanet`, image: `assets/nathanwpylestrangeplanet 1.png` },
    { name: `wawawiwacomics`, image: `assets/wawawiwacomicsa 1.png` },
    { name: `respondeai`, image: `assets/respondeai 1.png` },
    { name: `filomoderna`, image: `assets/filomoderna 1.png` },
    { name: `memeriago`, image: `assets/memeriagourmet 1.png` },
  ];
  return (
    <div class="stories-wrapper">
      <img class="arrow" src="assets/Vector.png" />
      {stories.map((s) => (
        <Story name={s.name} image={s.image} />
      ))}
    </div>
  );
}
