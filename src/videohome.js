import logo from './logo.svg';
import './App.scss';


function VideoHome() {
  return (
    <>
    <video preload="auto" webkit-playsinline playsinline loop autoPlay controls-off muted className="video-home-item" poster="Assets/multimedia/thumbnails/d8d12-00000001.jpg">
        <source type="video/mp4" src="http://tecnoturis.com/assets/multimedia/video_home.mp4"/>
    </video>
    <a name="sobrenosotros"></a>
    </>
  );
}

export default VideoHome;