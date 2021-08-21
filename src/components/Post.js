export default function Post(props) {
  return (
    <div class="post-wrapper">
      <div class="post-header">
        <div class="post-header-author">
          <a href="#">
            <img class="post-header-author-img" src={props.authorImg} />
          </a>
          <a class="post-header-author-name" href="#">
            {props.author}
          </a>
        </div>
        <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
      {props.video ? (
        <video width="612" height="612" autoplay controls muted>
          <source src={props.videoMp4} type="video/mp4" />
          <source src={props.videoOgg} type="video/ogg" />
        </video>
      ) : (
        <img src={props.postImg} />
      )}
      <div class="post-footer">
        <div class="post-footer-actions">
          <ion-icon class="post-heart" name="heart-outline"></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <ion-icon class="bookmark" name="bookmark-outline"></ion-icon>
      </div>
      <div class="post-likes">
        <a href="#">
          <img src={props.userLikedImg} />
        </a>
        <p>
          Curtido por
          <a href="#"> {props.userLiked} </a>e
          <a href="#"> outras {props.likesAmount} pessoas</a>
        </p>
      </div>
      <div class="comments-header">
        <a href="#">
          {" "}
          Clique para ver todos os {props.commentsAmount} comentários
        </a>
      </div>
      <div class="comments">
        <div class="comment">
          <p>
            <a class="comment-author" href="#">
              {props.comment1Author}
            </a>
            {props.comment1Text}
            <a class="tags" href="#">
              {props.comment1Tag}
            </a>
          </p>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div class="comment">
          <p>
            <a class="comment-author" href="#">
              {props.comment2Author}
            </a>
            {props.comment2Text}
            <a class="tags" href="#">
              {props.comment2Tag}
            </a>
          </p>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div class="comment">
          <p>
            <a class="comment-author" href="#">
              {props.comment3Author}
            </a>
            {props.comment3Text}
            <a class="tags" href="#">
              {props.comment3Tag}
            </a>
          </p>
          <ion-icon name="heart-outline"></ion-icon>
        </div>
        <div class="comment-time">
          <a href="#">há {props.lastCommentTime} horas</a>
        </div>
      </div>
      <div class="add-comment">
        <div class="add-comment-left">
          <ion-icon name="happy-outline"></ion-icon>
          <input placeholder="Adicione um comentário..." />
        </div>
        <div class="add-comment-right">Publicar</div>
      </div>
    </div>
  );
}
