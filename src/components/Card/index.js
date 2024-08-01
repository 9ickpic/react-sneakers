function Card(props) {
  return (
    <div className="card p-5 items-center hoveruser m-5">
      <button
        className="absolute cursor-pointer"
        onClick={props.onClickFavorite}
      >
        <img
          className="opacity-70 hover:opacity-100"
          src="/img/button_state/unlike.svg"
          alt="unliked"
        />
      </button>
      <img width={133} height={112} src={props.imageURL} alt="sneakers" />
      <h5 className="mt-[14px]">{props.title}</h5>
      <div className="mt-[14px]">
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="mb-[2px] text-[#BDBDBD]">Цена: </span>
            <p className="font-bold flex">{props.price} руб.</p>
          </div>

          <button
            className="ml-[39px] button-border flex justify-center items-center"
            onClick={props.onClickAddCart}
          >
            <img
              width={11}
              height={11}
              src="/img/sneaker/add_cart_button.svg"
              alt="add in cart"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
