function TechnologyItem({ imageUrl, name }: any) {
    return (<div className="flex flex-col items-center justify-center">
        <img
            src={imageUrl}
            alt={name}
            width="100"
            height="100"
            className="floating"
        />
        <p className="font-bold my-3 mx-12">{name}</p>
    </div>
    );
}
export { TechnologyItem }