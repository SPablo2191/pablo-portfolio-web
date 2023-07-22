import './spinner.css';
function Spinner(){
    return (
        <div className='grid gap-4 grid-cols-1'>
        <div className='flex justify-center'>
        <div className='spinner'></div>
        </div>
        <p className='font-semibold'>Cargando...</p>
        </div>
    );
}
export {Spinner}