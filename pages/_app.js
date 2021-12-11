import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout/Layout";
import { store } from "../store/configureStore";
import { GlobalStyles } from "../styles/globalStyles";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
