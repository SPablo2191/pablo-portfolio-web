function SmallCard(){
    return (
        <a href="" className="fade">
        <div
          className="bg-white dark:bg-slate-900 m-4 rounded-xl px-6 py-8 ring-1 hover:drop-shadow-2xl ring-slate-900/5 shadow-xl text-center"
        >
          <h2 className="font-bold text-3xl">Empresa X</h2>
          <h3 className="my-3">Rol: <strong>Desarrollador</strong></h3>
          <p className="text-lg my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nulla
            eveniet cupiditate temporibus sed a vitae quidem ab quia deserunt
            enim cum illo dignissimos ratione asperiores vero, omnis ipsa quo!
          </p>
          <p className="font-bold">06/01/2001 - Actualidad</p>
        </div>
      </a>
    );
}
export {SmallCard};