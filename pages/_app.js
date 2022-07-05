import NextNProgress from "nextjs-progressbar";
import RootContextProvider from "../context/RootContextProvider";
import TopNavBarLayoout from "../src/layout/TopNavBarLayout";
import routes from "../src/routes";
import { themeColor } from "../src/utils/theme";
import "../styles/globals.css";
const playerLayoutWithoutRoutes = [
  routes.logIn.path,
  routes.signUp.path,
  routes.forgotPassword.path,
  routes.verification.path,
];

function MyApp({ Component, pageProps, ...appProps }) {
  const routesPresentInApp = () => {
    const allRoutes = Object.values(routes).map((obj) => obj.path);
    return allRoutes;
  };
  const allRoutes = routesPresentInApp();
  const currentPath = appProps.router.pathname;
  console.log(appProps.router.pathname);
  const isNavbarNeeded =
    allRoutes.includes(currentPath) &&
    !playerLayoutWithoutRoutes.includes(currentPath);

  const renderLayout = () =>
    isNavbarNeeded ? (
      <TopNavBarLayoout>
        <Component {...pageProps} />
      </TopNavBarLayoout>
    ) : (
      <Component {...pageProps} />
    );
  return (
    <RootContextProvider appProps={appProps}>
      <NextNProgress color={themeColor.primaryColor} height={2} />
      {renderLayout()}
    </RootContextProvider>
  );
}

export default MyApp;
