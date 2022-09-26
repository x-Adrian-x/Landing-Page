export const MyCard = ({ titulo, descripcion, url_preview, url_github }) => {
  return (
    <div className="m-4 bg-white px-20 py-12 rounded-2xl border-8 border-slate-700 shadow-2xl shadow-slate-700 md:my-36 my-10">
      <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" className="rounded-2xl mx-auto mb-4 shadow-2xl" />
      <h1 className="font-bold text-2xl mb-4">{titulo}</h1>
      <h1 className="mb-6">{descripcion}</h1>
      <a href={url_preview} target="_blank" className="bg-green-700 mr-2 text-white px-6 py-2 rounded-full">
        Vista Previa
      </a>
      <a href={url_github} target="_blank" className="bg-green-700 text-white px-6 py-2 rounded-full">
        GitHub
      </a>
    </div>
  );
};
