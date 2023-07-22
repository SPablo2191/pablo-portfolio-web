function BigCard(){
    return (
        <div
        className="bg-white m-4 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div className="md:grid grid-cols-2 gap-2">
          <div className="fade_from_left">
            <img
              src="static/imgs/about-me-picture.jpeg"
              className="rounded mx-auto d-block about_me_picture"
            />
          </div>
          <div className="fade_from_right">
            <h2 className="text-2xl font-bold mb-2 text-center">¿Quién Soy?</h2>
            <p className="text-lg text-justify">
              Soy un desarrollador Full-Stack con pasión por el aprendizaje y la
              resolución de problemas. Soy tecnico universitario en Informatica y
              a su vez, estoy proximo a obtener mi título en Ingeniería en
              Informática. Se me ha otorgado la oportunidad de estudiar un
              semestre completo en Perú. Busco trabajo en la industria con nuevos
              retos donde pueda aprender y crecer.
            </p>
          </div>
        </div>
      </div>
    );
}
export {BigCard}