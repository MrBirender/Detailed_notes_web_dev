import { createRoot } from "react-dom/client";
import { Provider as UiProvider } from "@/components/ui/provider.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UiProvider>
      <App />
    </UiProvider>
  </Provider>
);
