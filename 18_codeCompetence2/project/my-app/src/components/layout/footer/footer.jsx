import "./footer.css";
import Instagram from "../../../assets/instagram";
import Youtube from "../../../assets/youtube";
import LogoTwitter from "../../../assets/twitter";
export default function Footer(){

    return (
      <div className="footer">
        <div className="content-footer">
          <label htmlFor="text">
            <h1>SELCOUTH SUPREMACY.</h1>
          </label>
          <div className="media-sosial">
            <h2>Media Sosial</h2>
            <ul>
              <li>
                <Instagram/>
                <a href="https://instagram.com/selcouthsupremacy?igshid=MzRlODBiNWFlZA==">
                  selcouthsupremacy.
                </a>
              </li>
              <li>
                <Youtube/>
                <a href="https://youtube.com">selcouthsupremacyid</a>
              </li>
              <li>
                <LogoTwitter/>
                <a href="https://twitter.com">__selcouthsupremacy</a>
              </li>
            </ul>
          </div>
          <div className="about">
            <h2>About me</h2>
            <label htmlFor="text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                minus mollitia laborum accusamus porro sapiente!
              </p>
            </label>
            <div className="info">
              <label htmlFor="text" className="no-hp">
                <p>085783765752</p>
              </label>
              <label htmlFor="text">
                <p>jln. sukodadi surakarta, Jawa Tengah</p>
              </label>
            </div>
          </div>
        </div>

        <div className="copyright">
          <label htmlFor="text">
            ©2023 Selcouth | Supremacy Powered by Restu.store
          </label>
        </div>
      </div>
    );
}