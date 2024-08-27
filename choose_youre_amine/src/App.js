import logo from './logo.svg';
import './App.css';
import './styles/main.css'
import AnimeCarousel from './components/main';
function App() {
    const handleShareInviteLink = () => {
        const shareLink = `https://t.me/anime_world_fun_bot`;
        window.open(shareLink, '_blank');
    };
  return (

      <div className="App">
          <div className="App-header">
        <div className="_footer_text _coin">Anime World</div>
              <div className="_footer_text _play" style={{fontSize:"50px"}} onClick={handleShareInviteLink}>PLAY NOW</div>
          </div>
        <AnimeCarousel/>
          <footer style={{color:"pink", background: "rgba(0,0,0,.5)",height:60,placeContent:"center",placeItems:"center",marginLeft: "auto",
              marginRight: "auto",left: 0,
              right: 0,position:"absolute",bottom:0,}}> Anime World inc. </footer>
      </div>
  );
}

export default App;
