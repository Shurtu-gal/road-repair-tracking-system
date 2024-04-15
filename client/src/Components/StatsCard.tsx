import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface StatsCardProps {
  title: string;
  description: string;
  count: number;
  link?: string;
}

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    maxWidth: "25rem",
    background: "linear-gradient(to bottom right, #0052D4, #4364F7)",
    color: "#fff",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
    borderRadius: "0.5rem",
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  title: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: "1.15rem",
    color: "#e0e0e0",
  },
  count: {
    fontSize: "3rem",
    fontWeight: "bold",
    color: "#00fc08",
  },
  header: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
  },
}));

const StatsCard: React.FC<StatsCardProps> = ({ title, description, count, link }) => {
  const classes = useStyles();

  const cardContent = (
    <Card className={classes.card}>
      <CardHeader
        title={<Typography variant="h6" className={classes.title}>{title}</Typography>}
        subheader={<Typography variant="body2" className={classes.description}>{description}</Typography>}
        className={classes.header}
      />
      <CardContent>
        <Typography variant="h2" className={classes.count}>
          {count}
        </Typography>
      </CardContent>
    </Card>
  );

  return link ? (
    <a href={link} className={classes.card} style={{ textDecoration: "none" }}>
      {cardContent}
    </a>
  ) : (
    <div className={classes.card}>
      {cardContent}
    </div>
  );
};

export default StatsCard;
