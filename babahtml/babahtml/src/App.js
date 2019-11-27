import React,{Component} from 'react';
import './style/style.css';


class App extends Component{
  render(){
    return(
      <div className="wraaper">
        <div className="header">
          <div className="navbar">
            <div className="logo">
              <img src={require('./logo/babastudio-logo.png')} className="imgfluid"/>
            </div>
            <div className="menu">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Galery</a></li>
                <li><a href="">Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* end header */}
        <div className="slider">
          <div className="slidercontent">
            <img src={require('./images/banner-desktop.jpg')} className="imageslider"/> 
          </div>        
        </div>
        {/* end slider */}
        <h2 className="dataprestasi">Prestasi Murid babastudio</h2>
        <div className="content">
          <div className="content-gambar">
            <div className="image">
              <img src={require('./images/21cineplex.jpg')} className="imagesliderr"/>
              <div className="contentimage">
                <h2 className="fontimage">www.cinemaple.com</h2>
              </div>
            </div>
            <div className="image">
              <img src={require('./images/bpn.jpg')} className="imagesliderr"/>
              <div className="contentimage">
                <h2 className="fontimage">www.bpn.com</h2>
              </div>
            </div>
            <div className="image">
              <img src={require('./images/republika.jpg')} className="imagesliderr"/>
              <div className="contentimage">
                <h2 className="fontimage">www.republika.com</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="content-gambar">
          <h2 className="dataprestasi">Tempat kursus baba studio</h2>
          <div className="content-yutube">
            <iframe src="https://www.youtube.com/embed/k1OWLK0Yhc8" frameborder="0" width="560" height="315" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="content-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.035859052045!2d106.82664721477006!3d-6.389374495376794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebfa864c148f%3A0x3bcc69ceb90f794c!2sJl.%20STM%20Mandiri%2C%20Kota%20Depok%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1574870071603!5m2!1sid!2sid" width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
