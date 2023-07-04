import { Provider } from "react-redux";
import Router from "./Router";
import store from "./utils/store/store";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
