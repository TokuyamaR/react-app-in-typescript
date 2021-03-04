import React, { useEffect, useRef, useState } from "react";

// FunctionComponent = FC とかける
const Counter: React.FC<{}> = () => {
  const initialValue: number = 0;
  const [value, setValue] = useState<number>(initialValue);

  const increment = () => {
    // return setValue(value + 1);
    return setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    // return setValue(value - 1);
    return setValue((prevState) => prevState - 1);
  };

  // 引数を指定した型引数と合わせてオブジェクトにて管理する
  const getRenderTImes = useRef<number>(0);
  useEffect(() => {
    // renderされるたびに関数を実行
    getRenderTImes.current = getRenderTImes.current + 1;
  });

  const ref = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    // 通常の記法
    const current = ref.current;
    if (current != null) current.focus();

    // typescript 3.7以降は下記のoptional chaniningが使えるため下記の記法が可能
    // ref.current?.focus(); // currentが取得できる場合だけ実行

    // none null assertion operator　を利用した記法
    // null!と引数で記入する
    // !をつけることで、引数はnullではないと明示的にtypesrript側に伝えることができる。
    // ref.current でエラーが出なくなる
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {getRenderTImes.current} times.</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click me</button>
    </div>
  );
};

export default Counter;
