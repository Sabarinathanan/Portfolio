
function NavbarPage() {
    return ( 
              <nav className="mb-20 flex items-center justify-between px-20">
                <div className="flex flex-shrink-0 items-center">
                  <img className="mx-2 w-40" src='./assets/logo.png' alt="Logo" />
                </div>
                <div className="m-8 flex items-center justify-center gap-4 text-2xl text-white">
                  <a href="www.linkedin.com/in/anish-prakash-i" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/Anish0Prakash" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="https://www.instagram.com/mr_riotz/" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-square-instagram"></i>
                  </a>
                </div>
              </nav>
            );
          };

export default NavbarPage;