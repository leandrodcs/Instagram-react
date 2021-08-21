import Post from "./Post";

export default function Posts() {
  const postProps = [
    {
      author: `meowed`,
      authorImg: `assets/meowed 1.png`,
      postImg: `assets/gato-telefone 1.png`,
      userLiked: `respondeai`,
      userLikedImg: `assets/respondeai 1.png`,
      likesAmount: `101.523`,
      lastCommentTime: `2`,
      commentsAmount: `987`,
      video: false,
      comments: [
        {
          author: `lester`,
          text: ` This cat can use the phone, I knew that.`,
        },
        {
          author: `merellalunkes`,
          text: ` ownti que fofoleto!!!`,
        },
        {
          author: `rodrigodcss`,
          text: ` Que paia`,
        },
      ],
    },
    {
      author: `barked`,
      authorImg: `assets/barked 1.png`,
      postImg: `assets/dog 1.png`,
      userLiked: `adorable_animals`,
      userLikedImg: `assets/adorableanimals 1.png`,
      likesAmount: `99.159`,
      lastCommentTime: `5`,
      commentsAmount: `840`,
      video: false,
      comments: [
        {
          author: `gutsyputsy`,
          text: ` olha que lindo amooor`,
          tag: ` @agoodoy`,
        },
        {
          author: `iverti.radaveli`,
          text: ` preciso mandar isso no grupo da família!`,
        },
        {
          author: `rodrigodcss`,
          text: ` Que paia 2`,
        },
      ],
    },
    {
      author: `beetlejuice`,
      authorImg: `assets/beetle.jpg`,
      videoMp4: `assets/Oblivion NPC Conversation.mp4`,
      videoOgg: `assets/Oblivion NPC Conversation.ogg`,
      userLiked: `chibirdart`,
      userLikedImg: `assets/chibirdart 1.png`,
      likesAmount: `99.159`,
      lastCommentTime: `3`,
      commentsAmount: `2077`,
      video: true,
      comments: [
        {
          author: `lester`,
          text: `That was a longtime ago`,
          tag: ` @sean`,
        },
        {
          author: `julianasantos`,
          text: ` para de me manda esse video`,
          tag: ` @leandrodcs`,
        },
        {
          author: `merellalunkes`,
          text: ` para de me manda esse video`,
          tag: ` @rodrigodcss`,
        },
      ],
    },
  ];
  return (
    <>
      {postProps.map((p) => (
        <Post
          author={p.author}
          authorImg={p.authorImg}
          postImg={p.postImg}
          userLiked={p.userLiked}
          userLikedImg={p.userLikedImg}
          likesAmount={p.likesAmount}
          lastCommentTime={p.lastCommentTime}
          commentsAmount={p.commentsAmount}
          comment1Author={p.comments[0].author}
          comment1Text={p.comments[0].text}
          comment1Tag={p.comments[0].tag}
          comment2Author={p.comments[1].author}
          comment2Text={p.comments[1].text}
          comment2Tag={p.comments[1].tag}
          comment3Author={p.comments[2].author}
          comment3Text={p.comments[2].text}
          comment3Tag={p.comments[2].tag}
          video={p.video}
          videoMp4={p.videoMp4}
          videoOgg={p.videoOgg}
        />
      ))}
    </>
  );
}
