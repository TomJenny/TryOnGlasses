import TOGContent from "./Compoments/TryOnGlasses/TOGContent";
import TOGHeader from "./Compoments/TryOnGlasses/TOGHeader";
function App() {
  const bgSrc = './img/background.jpg';
  return (
    <div style={{
      background: `url(${bgSrc}) center`,
      height: '100vh',
      width: '100%',
    }}>
      <div style={{
        background: 'rgba(0,0,0,0.4)',
        height: '100vh',
        width: '100%',
      }}>
        <TOGHeader />
        <TOGContent />
      </div>
    </div>
  );
}

export default App;
