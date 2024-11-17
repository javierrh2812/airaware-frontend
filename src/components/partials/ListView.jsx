import ListItem from "./ListItem";

export default function ListView({ listItem }) {
  return (
    <section className="bg-secondary h-full">
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="items-end justify-between sm:flex">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl font-sora">
              Nuestra lista de dispositivos
            </h2>
            <p className="max-w-lg mt-8 text-gray-900 font-manrope text-justify">
              Esta pagina contiene la lista de dispositivos que actualmente
              tenemos en Lima Metropolitana
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {listItem &&
            listItem.map((item, index) => {
              return <ListItem key={index} item={item} />;
            })}
        </div>
      </div>
    </section>
  );
}
