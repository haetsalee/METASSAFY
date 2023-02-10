import styled from 'styled-components';
import html2canvas from 'html2canvas';

function PhoneApp() {
  function onCapture() {
    console.log('onCapture');
    html2canvas(document.getElementById('react-unity-webgl-canvas-1'))
      .then((canvas) => {
        onSaveAs(canvas.toDataURL('image/png'), 'image-download.png');
      })
      .catch((err) => console.log(err));
  }

  function onSaveAs(url, filename) {
    console.log('onSaveAs');
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.href = url;
    link.download = filename;
    link.click();
    document.body.removeChild(link);
  }
  return (
    <CenterDiv>
      app
      <button onClick={onCapture}>캡쳐 실험</button>
      <p>그외 사이트 여럿</p>
    </CenterDiv>
  );
}

export default PhoneApp;

const CenterDiv = styled.div`
  text-align: center;
  margin: 7rem 4rem;
`;
