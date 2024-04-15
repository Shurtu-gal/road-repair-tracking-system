import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StatsCard from "../Components/StatsCard";
import { Title, useQuery } from "react-admin";
import { Resource } from "../api/resource/Resource";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  heroMessage: {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
    textAlign: "center",
    color: theme.palette.primary.main,
  },
}));

const initialStats = [
  { count: 0, label: "Ongoing Repairs", description: "Total number of ongoing repairs", link: "/admin/Repair" },
  { count: 0, label: "Pending Repairs", description: "Total number of pending repairs", link: "/admin/Repair" },
  { count: 0, label: "Resources", description: "Amount of resources in tons", link: "/admin/Resource" },
  { count: 0, label: "Users", description: "Total number of users", link: "/admin/User" },
  { count: 0, label: "Residents", description: "Total number of residents", link: "/admin/Resident" },
  { count: 0, label: "Supervisors", description: "Total number of supervisors", link: "/admin/Supervisor" },
  { count: 0, label: "Admins", description: "Total number of admins", link: "/admin/Admin" },
  { count: 0, label: "Areas", description: "Total number of areas", link: "/admin/Area" },
  { count: 0, label: "Complaints", description: "Total number of complaints", link: "/admin/Complaint" },
];

const Dashboard = () => {
  const classes = useStyles();
  const [stats, setStats] = React.useState(initialStats);

  const { data: users } = useQuery({
    type: "getList",
    resource: "User",
    payload: {},
  });

  const { data: residents } = useQuery({
    type: "getList",
    resource: "Resident",
    payload: {},
  });

  const { data: supervisors } = useQuery({
    type: "getList",
    resource: "Supervisor",
    payload: {},
  });

  const { data: admins } = useQuery({
    type: "getList",
    resource: "Admin",
    payload: {},
  });

  const { data: areas } = useQuery({
    type: "getList",
    resource: "Area",
    payload: {},
  });

  const { data: complaints } = useQuery({
    type: "getList",
    resource: "Complaint",
    payload: {},
  });

  const { data: inProgressRepairs } = useQuery({
    type: "getList",
    resource: "Repair",
    payload: { status: "InProgress" },
  });

  const { data: pendingRepairs } = useQuery({
    type: "getList",
    resource: "Repair",
    payload: { status: "Pending" },
  });

  const { data: resources } = useQuery({
    type: "getList",
    resource: "Resource",
    payload: {},
  });

  React.useEffect(() => {
    if (users && residents && supervisors && admins && areas && complaints && inProgressRepairs && pendingRepairs && resources) {
      console.log(inProgressRepairs, pendingRepairs, resources);
      setStats(prevStats => [
        { ...prevStats[0], count: inProgressRepairs ? inProgressRepairs.length : 0 },
        { ...prevStats[1], count: pendingRepairs ? pendingRepairs.length : 0 },
        { ...prevStats[2], count: resources ? resources.reduce((acc: number, resource: Resource) => acc + resource.quantity, 0) : 0 },
        { ...prevStats[3], count: users ? users.length : 0 },
        { ...prevStats[4], count: residents ? residents.length : 0 },
        { ...prevStats[5], count: supervisors ? supervisors.length : 0 },
        { ...prevStats[6], count: admins ? admins.length : 0 },
        { ...prevStats[7], count: areas ? areas.length : 0 },
        { ...prevStats[8], count: complaints ? complaints.length : 0 },
      ]);
    }
  }, [users, residents, supervisors, admins, areas, complaints, inProgressRepairs, pendingRepairs, resources]);

  return (
    <div className={classes.root}>
      <Typography className={classes.heroMessage}>
        Welcome to Admin Dashboard
      </Typography>
      <Title title="Dashboard" />
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid key={index} item xs={4}>
            <StatsCard count={stat.count} title={stat.label} description={stat.description} link={stat.link} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
