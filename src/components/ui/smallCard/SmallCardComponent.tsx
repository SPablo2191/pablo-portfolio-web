import { Technology } from "../../../models/technology.interface";
import { TechnologyItem } from "../../technologyItem/TechnologyItemComponent";

function SmallCard({ title, subtitle, description, footer, url, items }: any) {
  return (
    <a href={url} className="fade" target="_blank">
      <div
        className="bg-white dark:bg-slate-800 my-4 md:mx-4 rounded-xl px-6 py-8 ring-1 hover:drop-shadow-2xl ring-slate-900/5 shadow-xl text-center"
      >
        <h2 className="font-bold text-3xl">{title}</h2>
        <h3 className="my-3">{subtitle}</h3>
        <p className="text-lg my-3">
          {description}
        </p>
        {
          items ? (
            <div className="mt-6">
              <h3 className="text-2xl font-bold">Tecnologias</h3>
              <div className="flex justify-center  flex-wrap">
                {items.map((item: Technology) => (
                  <div key={item.id}>
                    <TechnologyItem name={item.name} imageUrl={item.image_url}></TechnologyItem>
                  </div>
                ))}
              </div>
            </div>
          ) : (<></>)
        }
        <p className="font-bold">{footer}</p>
      </div>
    </a>
  );
}
export { SmallCard };