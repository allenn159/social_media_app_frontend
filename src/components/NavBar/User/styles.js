import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    height: "70px",
    backgroundColor: "#113CFC",
    color: "#fff",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentCont: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  menuIcon: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  title: {
    fontFamily: "Mukta",
    fontWeight: 700,
    fontSize: "30px",
    marginLeft: "10px",
    marginTop: "25px",
    color: "#fff",
    textDecoration: "none",
  },
  buttonCont: {
    marginLeft: "20px",
    display: "flex",
  },
  button: {
    margin: "0 20px",
    fontFamily: "Mukta",
    fontSize: "18px",
    color: "#fff",
  },
  drawerBtn: {
    margin: "20px 0",
    fontFamily: "Mukta",
    fontSize: "18px",
    color: "#fff",
    backgroundColor: "#113CFC",
    width: "120px",
  },
  exploreBtn: {
    background: "linear-gradient(45deg, #FFA400 30%, #ff8e53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, 0.3)",
    marginLeft: "20px",
    fontFamily: "Mukta",
    fontSize: "18px",
    height: "40px",
    width: "110px",
  },
  plusIcon: {
    margin: "0 0 3px 3px",
  },
  logoutBtn: {
    marginRight: "20px",
  },
  drawerBox: {
    width: "280px",
  },
  drawerList: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  drawerTitle: {
    fontFamily: "Mukta",
    fontSize: "30px",
    margin: 0,
  },
}));
