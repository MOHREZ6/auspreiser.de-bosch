import Head from "next/head";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title}-shopping`}</title>
      </Head>
      <div>
        <header className="Header">
          <div className="  sd  border-bottom   d-flex justify-content-center ">
            <div className="text-end">
              <div v="blockquote">
                <h2>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-tags"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
                    <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
                  </svg>
                  auspreiser.de
                </h2>

                <p className="Source Title">Preisvergleiche & produktsuche</p>
              </div>
            </div>
            <div className="d-flex justify-content-center searchBox  d-flex bd-highlight me-1 p-4   rounded-start">
              <span
                className="input-group-text border-0 search-icon rounded-0"
                id="search-addon"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search  "
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414
                  l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </span>
              <input
                type="search"
                className="form-control rounded-0 rounded-end "
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="d-flex align-items-center">
              {/* <div class="dropdown" > 
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="60"
                  height="60"
                  viewBox="0 0 30 30"
                >
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                </svg>
                <div class="dropdown-content">
                  <p>Hello World!</p>
                 
                  <p>Hel 
                </div>
              </div> */}
              <div class="dropdown">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="me-3   "
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                >
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                </svg>
                <div class="dropdown-content d-flex p-3 ">
                  <div class="">
                    <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                      The current button
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">A second item</button>
                    <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                  </div>
                  
                  <div class=" me-3 ">
                    <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
                      The current button
                    </button>
                    <button type="button" class="list-group-item list-group-item-action">A second item</button>
                    <button type="button" class="list-group-item list-group-item-action">A third button item</button>
                    <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>
                    <button type="button" class="list-group-item list-group-item-action" disabled>A disabled button item</button>
                  </div>
                  
                </div>
              </div>
              <div className="lala d-flex bd-highlight">
                <p1 className="fs-4  ">Kategorien</p1>
              </div>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  );
}

export default Layout;
