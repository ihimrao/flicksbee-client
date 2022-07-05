import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import styles from "./TopNavBar.style";

const useStyles = makeStyles(styles);
function app({ children }) {
  const classes = useStyles();

  const [isopen, setIsopen] = useState(false);
  const object = [
    {
      id: 1,
      name: "Home",
      subnav: [
        {
          "home-Heading1": {
            item1: "/item1",
            item2: "/item2",
            item3: "/item3",
          },
        },
        {
          "home-heading2": {
            item1: "/item1",
            item2: "/item2",
            item3: "/item3",
          },
        },
        {
          "home-heading3": {
            item1: "/item1",
            item2: "/item2",
            item3: "/item3",
          },
        },
      ],
    },
    {
      id: 2,
      name: "Our story",
      subnav: [],
    },
    {
      id: 3,
      name: "Genres",
      subnav: [
        {
          Political: {
            states: "/state",
            national: "/national",
            regional: "/regional",
          },
        },
        {
          Technical: {
            Mobile: "/mobile",
            Computer: "/computer",
            Software: "/software",
          },
        },
        {
          Crypto: {
            "Top Trrending": "/toptrending",
            Blockchain: "/blockchain",
            Nft: "/nftmarket",
          },
        },
      ],
    },
    {
      id: 4,
      name: "Sign in",
      subnav: [],
    },
  ];
  const [subNavItem, setsubNavItem] = useState({});
  const toggleNavState = (state, item) => {
    setIsopen(state);

    setsubNavItem(item?.subnav || []);
  };
  return (
    <>
      <div className={classes.mainWrapper}>
        {object?.map((item) => (
          <Button
            onMouseEnter={() => toggleNavState(true, item)}
            onMouseLeave={() => toggleNavState(false, item)}
            className={classes.navItemWrapper}
          >
            {item.name}
          </Button>
        ))}
      </div>

      {isopen && (
        <div
          onMouseEnter={() => toggleNavState(true, subNavItem)}
          onMouseLeave={() => toggleNavState(false, subNavItem)}
        >
          {subNavItem.map((subnavitem, index) => {
            console.log(Object.keys(subnavitem)[0], index);
            return (
              <>
                <div style={{}}>
                  <h1>{Object.keys(subnavitem)[0]}</h1>
                  {Object.entries(Object.values(subnavitem)[0]).forEach(
                    ([key, value]) => {
                      return (
                        <>
                          <p
                            onClick={() => {
                              console.log(value);
                            }}
                          >
                            {key}f
                          </p>
                        </>
                      );
                    }
                  )}
                </div>
              </>
            );
          })}
        </div>
      )}
      {children}
    </>
  );
}
export default app;
