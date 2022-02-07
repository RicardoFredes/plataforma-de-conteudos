export default function PageTemplate({ children }) {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__brand">Fredes</div>
        <div className="navbar__content">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__link" href="">Painel</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="">Certificados</a>
            </li>
            <li className="navbar__item">
              <a className="navbar__link" href="">Notificações</a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="page-template">
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  )
}
