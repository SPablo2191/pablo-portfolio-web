function SmallCard({ title, subtitle, description, footer }: any) {
  return (
    <a href="" className="fade">
      <div
        className="bg-white dark:bg-slate-900 m-4 rounded-xl px-6 py-8 ring-1 hover:drop-shadow-2xl ring-slate-900/5 shadow-xl text-center"
      >
        <h2 className="font-bold text-3xl">{title}</h2>
        <h3 className="my-3">{subtitle}</h3>
        <p className="text-lg my-3">
          {description}
        </p>
        <p className="font-bold">{footer}</p>
      </div>
    </a>
  );
}
export { SmallCard };