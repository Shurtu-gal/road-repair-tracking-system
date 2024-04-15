import React, { useEffect, useState } from "react";
import { Admin, AdminProps, CustomRoutes, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ResidentList } from "./resident/ResidentList";
import { ResidentCreate } from "./resident/ResidentCreate";
import { ResidentEdit } from "./resident/ResidentEdit";
import { ResidentShow } from "./resident/ResidentShow";
import { SupervisorList } from "./supervisor/SupervisorList";
import { SupervisorCreate } from "./supervisor/SupervisorCreate";
import { SupervisorEdit } from "./supervisor/SupervisorEdit";
import { SupervisorShow } from "./supervisor/SupervisorShow";
import { AdminList } from "./admin/AdminList";
import { AdminCreate } from "./admin/AdminCreate";
import { AdminEdit } from "./admin/AdminEdit";
import { AdminShow } from "./admin/AdminShow";
import { MayorList } from "./mayor/MayorList";
import { MayorCreate } from "./mayor/MayorCreate";
import { MayorEdit } from "./mayor/MayorEdit";
import { MayorShow } from "./mayor/MayorShow";
import { ComplaintList } from "./complaint/ComplaintList";
import { ComplaintCreate } from "./complaint/ComplaintCreate";
import { ComplaintEdit } from "./complaint/ComplaintEdit";
import { ComplaintShow } from "./complaint/ComplaintShow";
import { AreaList } from "./area/AreaList";
import { AreaCreate } from "./area/AreaCreate";
import { AreaEdit } from "./area/AreaEdit";
import { AreaShow } from "./area/AreaShow";
import { RepairList } from "./repair/RepairList";
import { RepairCreate } from "./repair/RepairCreate";
import { RepairEdit } from "./repair/RepairEdit";
import { RepairShow } from "./repair/RepairShow";
import { ResourceList } from "./resource/ResourceList";
import { ResourceCreate } from "./resource/ResourceCreate";
import { ResourceEdit } from "./resource/ResourceEdit";
import { ResourceShow } from "./resource/ResourceShow";
import { RepairScheduleList } from "./repairSchedule/RepairScheduleList";
import { RepairScheduleCreate } from "./repairSchedule/RepairScheduleCreate";
import { RepairScheduleEdit } from "./repairSchedule/RepairScheduleEdit";
import { RepairScheduleShow } from "./repairSchedule/RepairScheduleShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { UpdateList } from "./update/UpdateList";
import { UpdateCreate } from "./update/UpdateCreate";
import { UpdateEdit } from "./update/UpdateEdit";
import { UpdateShow } from "./update/UpdateShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";
import { createBrowserHistory as createHistory } from 'history';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6"

export const history = createHistory({
  basename: "/admin"
});

const AdminPanel = ({ routes }: {routes?: CustomRoutes}): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"road repair and tracking system"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
        history={history}
        customRoutes={routes}
        
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Resident"
          list={ResidentList}
          edit={ResidentEdit}
          create={ResidentCreate}
          show={ResidentShow}
        />
        <Resource
          name="Supervisor"
          list={SupervisorList}
          edit={SupervisorEdit}
          create={SupervisorCreate}
          show={SupervisorShow}
        />
        <Resource
          name="Admin"
          list={AdminList}
          edit={AdminEdit}
          create={AdminCreate}
          show={AdminShow}
        />
        <Resource
          name="Mayor"
          list={MayorList}
          edit={MayorEdit}
          create={MayorCreate}
          show={MayorShow}
        />
        <Resource
          name="Complaint"
          list={ComplaintList}
          edit={ComplaintEdit}
          create={ComplaintCreate}
          show={ComplaintShow}
        />
        <Resource
          name="Area"
          list={AreaList}
          edit={AreaEdit}
          create={AreaCreate}
          show={AreaShow}
        />
        <Resource
          name="Repair"
          list={RepairList}
          edit={RepairEdit}
          create={RepairCreate}
          show={RepairShow}
        />
        <Resource
          name="Resource"
          list={ResourceList}
          edit={ResourceEdit}
          create={ResourceCreate}
          show={ResourceShow}
        />
        <Resource
          name="RepairSchedule"
          list={RepairScheduleList}
          edit={RepairScheduleEdit}
          create={RepairScheduleCreate}
          show={RepairScheduleShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Update"
          list={UpdateList}
          edit={UpdateEdit}
          create={UpdateCreate}
          show={UpdateShow}
        />

        {/* Custom Components */}

        <footer className="footer">
          <div className="container">
            <div className="links">
              <a href="https://github.com/Shurtu-gal" target="_blank">
                <FaGithub />
              </a>
              <a href="https://twitter.com/Shurtu-Gal" target="_blank">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/ashishpadhy-3023" target="_blank">
                <FaLinkedin />
              </a>
            </div>
            <span className="text-muted">
              <a href="https://github.com/Shurtu-gal/road-repair-and-tracking-system#readme" target="_blank">Road Repair and Tracking System</a> &copy; 2024
            </span>
            <div className="outro">
              <p>
                Made with <span className="heart">💔</span> by Ashish Padhy
              </p>
            </div>
          </div>
        </footer>
      </Admin>
    </div>
  );
};

export default AdminPanel;
