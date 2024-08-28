import logo from './logo.svg';
import './App.css';
import './styles/main.css'
import AnimeCarousel from './components/main';
function App() {
    const handleShareInviteLink = () => {
        const shareLink = `https://t.me/anime_world_fun_bot`;
        window.open(shareLink, '_blank');
    };

    const handleCopyInviteLink = () => {
        const inviteLink = `2yzfEsYL25coZwSo3hAgYNxHWAJ8Na2H2EyQLocTpump`;
        navigator.clipboard.writeText(inviteLink)
    };
    const handleShareInviteLink2 = () => {
        const shareLink = `https://t.me/anime_world_fun_bot`;
        window.open(shareLink, '_blank');
    };
    const handleShareInviteLink3 = () => {
        const shareLink = `https://x.com/anime_world_aw_`;
        window.open(shareLink, '_blank');
    };
  return (

      <div className="App">
          <div className="App-header">
              <div className="_footer_text _ca" onClick={handleCopyInviteLink}>CA: &nbsp; &nbsp; 2yzfEsYL25coZwSo3hAgYNxHWAJ8Na2H2EyQLocTpump</div>
              <div className="_footer_text _coin">Anime World</div>
              <div className="_footer_text _play" style={{fontSize:"50px"}} onClick={handleShareInviteLink}>PLAY NOW</div>
          </div>
        <AnimeCarousel/>
          <div className="_sotials">
              <img style={{width:"4.2%"}} onClick={handleShareInviteLink2} src={`${process.env.PUBLIC_URL}/Telegram-removebg-preview.png`} className="_sotials_media"/>
              <img onClick={handleShareInviteLink3} src={`${process.env.PUBLIC_URL}/new-twitter-logo-x-with-circle-line-badge_692249-34-removebg-preview.png`} className="_sotials_media"/>
          </div>
          <footer style={{
              color: "pink",
              background: "rgba(0,0,0,.9)",
              height: 60,
              placeContent: "center",
              placeItems:"center",marginLeft: "auto",
              marginRight: "auto",left: 0,
              right: 0,position:"absolute",bottom:0,}}> Anime World inc. </footer>

      </div>
  );
}

export default App;
