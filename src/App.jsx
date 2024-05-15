import Meylani from "./assets/Meylani.jpeg";
import Aviva from "./assets/aviva (1).jpeg";
import Nabiila from "./assets/nabiila (1).jpg";
import Fadlur from "./assets/fadlur (1).jpg";
import Taekwondo from "./assets/diving.jpg";
import Cat from "./assets/cat.jpg";
import Cook from "./assets/cook.jpg";
import Rock from "./assets/rock.jpg"
import Logo from "./assets/logo.png"

function App() {
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center "
        style={{ height: "100vh" }}
      >
        <img src={Logo} alt="" />
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          style={{ width: "70%" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner" style={{borderRadius:"20px"}}>
            <div className="carousel-item active">
              <div style={{ height: "400px", position: "relative" }}>
                <img
                  src={Cat}
                  className="d-block  w-100"
                  alt="..."
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></div>
              </div>
              <div className="carousel-caption d-none d-md-block">
                <div className="d-flex flex-row justyfi-content-around gap-5 align-items-center" style={{height:"350px"}}>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "200px" }}
                  >
                    <img
                      src={Nabiila}
                      alt="nabiila"
                      className="d-block w-100"
                      style={{
                        objectFit: "cover",
                        border: "none",
                        borderRadius: "100px",
                        height:"180px",
                      }}
                    />
                  </div>
                  <div>
                    <h5>Nabiila Azarine Firdaus 21.11.4332</h5>
                    <p>Terus berjuang, impianmu semakin dekat!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item" style={{borderRadius:"20px"}}>
              <div style={{ height: "400px", position: "relative" }}>
                <img
                  src={Cook}
                  className="d-block  w-100"
                  alt="..."
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></div>
              </div>
              <div className="carousel-caption d-none d-md-block">
              <div className="d-flex flex-row justyfi-content-between gap-5 align-items-center" style={{height:"350px"}}>
                  <div>
                    <h5>Aviva Pradasyah 21.11.4335</h5>
                    <p>Jangan pernah menyerah, sukses sudah menantimu!</p>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "200px" }}
                  >
                    <img
                      src={Aviva}
                      alt="Aviva"
                      className="d-block w-100"
                      style={{
                        objectFit: "cover",
                        border: "none",
                        borderRadius: "100px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div style={{ height: "400px", position: "relative" }}>
                <img
                  src={Rock}
                  className="d-block  w-100"
                  alt="..."
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></div>
              </div>
              <div className="carousel-caption d-none d-md-block">
              <div className="d-flex flex-row justyfi-content-between gap-5 align-items-center" style={{height:"350px"}}>
                  
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "200px" }}
                  >
                    <img
                      src={Meylani}
                      alt="Meylani"
                      className="d-block w-100"
                      style={{
                        objectFit: "cover",
                        border: "none",
                        borderRadius: "100px",
                        height:"190px"
                      }}
                    />
                  </div>
                  <div>
                    <h5>Meylani Eka Pertiwi 21.11.4393</h5>
                    <p>Terus berjuang, impianmu semakin dekat!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div style={{ height: "400px", position: "relative" }}>
                <img
                  src={Taekwondo}
                  className="d-block  w-100"
                  alt="..."
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                  }}
                ></div>
              </div>
              <div className="carousel-caption d-none d-md-block">
              <div className="d-flex flex-row justyfi-content-between gap-5 align-items-center" style={{height:"350px"}}>
                  <div>
                    <h5>Fadlur Nur Rahman 21.11.4349</h5>
                    <p>Terus berjuang, impianmu semakin dekat!</p>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{ width: "200px" }}
                  >
                    <img
                      src={Fadlur}
                      alt="Fadlur"
                      className="d-block w-100"
                      style={{
                        objectFit: "cover",
                        border: "none",
                        borderRadius: "100px", 
                        height:"180px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
