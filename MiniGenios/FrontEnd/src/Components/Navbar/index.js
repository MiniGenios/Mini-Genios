import "../Navbar/style.css"

function Navbar() {
    
  return (
    <>
    <header class="header">
        <nav class="nav container">
            <div class="nav__data">
                <a href="index.html" class="nav__logo">
                    <i class="bi bi-spellcheck"></i>
                    <div class="minigenios">Mini<span class="genios">Gênios</span></div>
                </a>
                <div class="nav__toggle" id="nav-toggle">
                    <i class="ri-menu-line nav__burger"></i>
                    <i class="ri-close-line nav__close"></i>
                </div>
            </div>

        </nav>
    </header>
    </>
  );
}

export default Navbar;