import React from 'react';

interface AppProps {
  message?: string;
}

// React.functionComponent : 関数自体にジェネリクスを用いて　型制約を行う
// 関数自体に型制約を設定することで、defaultPropsのdescriptionのような思わぬデータの混入を防げる
const App: React.FunctionComponent<AppProps> = ({message}) => {
  return <div>{message}</div>;
};

App.defaultProps = {
  message: 'Hello defaultProps!!',
  // description: 'This is App component.' // error
}

export default App;
