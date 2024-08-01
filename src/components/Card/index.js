import React from "react";
function Card(props) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };

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
          <img
            className="ml-[39px] button-border flex justify-center items-center"
            onClick={onClickPlus}
            src={
              isAdded
                ? "/img/button_state/added.svg"
                : "/img/button_state/unadded.svg"
            }
            alt="add in cart"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
