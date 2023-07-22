function BigCard({ title, imageUrl, description }: any){
    return (
        <div
        className="bg-white m-4 dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
      >
        <div className="md:grid grid-cols-2 gap-2">
          <div className="fade_from_left">
            <img
              src={imageUrl}
              className="rounded mx-auto d-block about_me_picture"
            />
          </div>
          <div className="fade_from_right">
            <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
            <p className="text-lg text-justify">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
}
export {BigCard}