const styles = (theme) => ({
  mainWrapper: {
    padding: "5px 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
        borderRadius: "100px",
    borderShadow:"#000000",
    gap: "20px",
    "& :hover": {
      background: "#cccccc",
    },
  },
  navItemWrapper: {
    color: "#000000",
    cursor: "pointer",
    "& :hover": {
      opacity: "0.01",
      background: "#cccccc",
      borderRadius: "13px",
      transition: "opacity 5000ms ease-in",
    },
  },
  pageTitleStyles: {
    margin: `${theme.spacing(2)} 0px !important`,
  },
});

export default styles;
