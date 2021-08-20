export default function Header() {
  return (
    <div class="header-wrapper">
      <div class="header">
        <div class="logo-wrapper">
          <a href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <div class="logo-separator"></div>
          <a href="#">
            <img src="assets/logo.png" />
          </a>
        </div>

        <input class="search" placeholder="Pesquisar" />
        <div class="fix-header">
          <div class="fix-header1"></div>
          <div class="shortcuts">
            <a href="#">
              <ion-icon name="paper-plane-outline"></ion-icon>
            </a>
            <a class="mobile-trash" href="#">
              <ion-icon name="compass-outline"></ion-icon>
            </a>
            <a class="mobile-trash" href="#">
              <ion-icon name="heart-outline"></ion-icon>
            </a>
            <a class="mobile-trash" href="#">
              <ion-icon name="person-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
