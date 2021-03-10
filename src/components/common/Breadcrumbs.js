import React from "react";
import {
  Breadcrumbs as MUIBreadcrumbs,
  Link,
  Typography,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { AiOutlineDoubleRight } from "react-icons/ai";

const bcContainerStyle = {
  border: 0,
  height: 48,
  maxWidth: "1344px",
  width: "100%",
  margin: "10px auto 0",
  display: "flex",
  alignItems: "center",
  justifyContents: "center",
  padding: "0 30px",
  borderBottom: "0.25px solid #ccc",
};

const bcItem = {
  textDecoration: "none",
  cursor: "pointer",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  background: "rgb(243, 197, 190)",
  borderRadius: "10px",
  padding: "5px",
  textTransform: "capitalize",
};
const bcLastItem = { textTransform: "capitalize" };

const Breadcrumbs = (props) => {
  const {
    history,
    location: { pathname },
  } = props;
  const pathnames = pathname.split("/").filter((x) => x);

  return pathnames.length < 1 ? null : (
    <MUIBreadcrumbs
      style={bcContainerStyle}
      separator={<AiOutlineDoubleRight />}
      aria-label="breadcrumb"
    >
      <Link onClick={() => history.push("/")} style={bcItem}>
        {" "}
        Home{" "}
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Typography style={bcLastItem} key={name}>
            {name}
          </Typography>
        ) : (
          <Link style={bcItem} key={name} onClick={() => history.push(routeTo)}>
            {name}
          </Link>
        );
      })}
    </MUIBreadcrumbs>
  );
};

export default withRouter(Breadcrumbs);
