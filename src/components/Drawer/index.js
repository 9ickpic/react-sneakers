import React from "react";

function Drawer(props) {
  return (
    <div className="top-0 left-0 absolute w-full h-full z-10 bg-[rgba(0,0,0,0.5)]">
      <div className="w-[385px] h-full right-0 absolute shdw p-[30px] flex flex-col">
        <div className="flex justify-between mr-2">
          <h2 className="text-2xl font-bold mb-[30px]">Корзина</h2>
          <button onClick={props.onClose} className="size-8">
            <img
              className="max-w-max opacity-50 hover:opacity-100 hover:transition-opacity cursor-pointer"
              src="/img/button_state/deletehover.svg"
              alt="delete"
            />
          </button>
        </div>
        <div className="overflow-auto mb-4 flex-1">
          <div className="borderuser hoveruser rounded-[20px] flex justify-end p-5">
            <div className="mb-[10px]">
              <img
                className=""
                width={70}
                height={70}
                src="/img/sneaker/image 5-11.png"
                alt="cardItem"
              />
            </div>
            <div className="items-center justify-center ml-[21px]">
              <p className="mb-2">Мужские Кроссовки Nike Air Max 270</p>
              <b className="font-bold">12 999 руб.</b>
            </div>
            <button className="size-8">
              <img
                className="max-w-max ml-3 opacity-50 hover:opacity-100 hover:transition-opacity cursor-pointer"
                src="/img/button_state/deletehover.svg"
                alt="delete"
              />
            </button>
          </div>
          <div className="borderuser hoveruser rounded-[20px] flex justify-end p-5 mt-5">
            <div className="mb-[10px]">
              <img
                className=""
                width={70}
                height={70}
                src="/img/sneaker/image 5-9.png"
                alt="cardItem"
              />
            </div>
            <div className="items-center justify-center ml-[21px]">
              <p className="mb-2">Мужские Кроссовки Nike Air Max 270</p>
              <b className="font-bold">8 499 руб.</b>
            </div>
            <button className="size-8">
              <img
                className="max-w-max ml-3 opacity-50 hover:opacity-100 hover:transition-opacity cursor-pointer"
                src="/img/button_state/deletehover.svg"
                alt="delete"
              />
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between mb-[19px]">
            <span>Итого:</span>
            <span>21428 руб.</span>
          </div>
          <div className="flex justify-between mb-6">
            <span>Налог 5%</span>
            <span>1074 руб.</span>
          </div>
          <button className="flex relative items-center justify-around lightenn rounded-[18px] w-[325px] h-[55px]">
            <span className="text-white">Оформить заказ</span>
            <img
              className="p-5 absolute right-1"
              src="/img/button_state/arrowleft.svg"
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
