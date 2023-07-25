import './CvButton.style.css';
function CvButton(){
    return (
        <a
        href={process.env.REACT_APP_CV_URL ?? ''}
        target="_blank"
        className="float tooltip"
      >
        <span className="tooltiptext">Descargar CV</span>
        <i className="bi bi-paperclip my-float"></i>
      </a>
    );
}
export {CvButton}