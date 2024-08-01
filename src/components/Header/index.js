function Header(props) {
  return (
    <header className="pt-[43px] flex justify-between items-center p-10 line">
      <div className="flex items-center">
        <img
          width={40}
          height={40}
          className="mr-4"
          src="/img/logo.png"
          alt=""
        />
        <div>
          <h3 className="uppercase font-bold">React Sneakers</h3>
          <p className="font-normal text-[#BDBDBD]">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="flex items-center">
        <li onClick={props.onClickCart} className="mr-8 flex cursor-pointer">
          <img
            width={18}
            height={18}
            className="mr-[10px]"
            src="/img/cart.svg"
            alt=""
          />
          <span>1205руб.</span>
        </li>
        <li className="mr-8 flex">
          <img
            width={18}
            height={18}
            className="mr-[10px]"
            src="/img/favorite.svg"
            alt=""
          />
          <span>Избранное</span>
        </li>
        <li className="flex">
          <img
            width={18}
            height={18}
            className="mr-[10px]"
            src="/img/user.svg"
            alt=""
          />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
