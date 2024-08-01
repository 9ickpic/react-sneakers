import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageURL: "./img/sneaker/image 5-7.png",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12999,
    imageURL: "./img/sneaker/image 5-11.png",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageURL: "./img/sneaker/image 5-8.png",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageURL: "./img/sneaker/image 5-9.png",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 15199,
    imageURL: "./img/sneaker/image 5-1.png",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 11299,
    imageURL: "./img/sneaker/image 5-2.png",
  },
  {
    title: "Мужские Кроссовки Jordan Air Jordan 11",
    price: 10799,
    imageURL: "./img/sneaker/image 5-4.png",
  },
  {
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 16499,
    imageURL: "./img/sneaker/image 5-5.png",
  },
  {
    title: "Мужские Кроссовки Nike Lebron XVIII Low",
    price: 13999,
    imageURL: "./img/sneaker/image 5-6.png",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageURL: "./img/sneaker/image 5-7.png",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageURL: "./img/sneaker/image 5-9.png",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
    price: 11299,
    imageURL: "./img/sneaker/image 5-3.png",
  },
];

function App() {
  return (
    <div className="bg-white max-w-[1080px] m-[50px_auto] rounded-[20px] shdw">
      <Drawer />
      <Header />
      <main className="m-0 p-10">
        <div className="flex flex-row items-center justify-between mb-10">
          <h1 className="font-bold text-3xl">Все кроссовки</h1>

          <div width={200} height={45} className="borderuser flex">
            <img className="ml-[18px]" src="/img/searchicon.svg" alt="search" />
            <input
              className="bg-white p-[10px] text-base outline-none"
              placeholder="Поиск..."
            ></input>
          </div>
        </div>

        <div className="flex flex-wrap">
          {arr.map((obj) => (
            <Card
              title={obj.title}
              imageURL={obj.imageURL}
              price={obj.price}
              onClickFavorite={() => console.log(obj)}
              onClickAddCart={() => console.log(obj)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
