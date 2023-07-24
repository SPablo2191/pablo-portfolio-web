import { Technology } from "../../models/technology.interface";
import { TechnologyItem } from "../technologyItem/TechnologyItemComponent";

function SkillCard({ name, items }: any) {
    return (
        <div
            className="bg-white m-4 text-center dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl fade_from_below"
        >
            <h2 className="text-3xl font-bold mb-3">{name}</h2>
            <div className="md:grid grid-cols-3">
                {items.map((item: Technology) => (
                    <div key={item.id}>
                        <TechnologyItem name={item.name} imageUrl={item.image_url}></TechnologyItem>
                    </div>
                ))}

            </div>
        </div>
    );
}
export { SkillCard }