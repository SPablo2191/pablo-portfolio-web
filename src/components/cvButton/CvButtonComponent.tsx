import './CvButton.style.css';
function CvButton(){
    return (
        <a
        href="https://drive.google.com/file/d/1W0hDlJiKTPrqo3ainhHGPBx00vTVjbYW/view?usp=sharing"
        target="_blank"
        className="float tooltip"
      >
        <span className="tooltiptext">Descargar CV</span>
        <i className="bi bi-paperclip my-float"></i>
      </a>
    );
}
export {CvButton}