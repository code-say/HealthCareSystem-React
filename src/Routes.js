import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./core/Home";
import Contact from "./core/Contact";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import Notfound from "./error/Notfound";
import TestResultAdmin from "./admin/TestResultAdmin";
import Create from "./admin/TestResult/create";
import Read from "./admin/TestResult/read";
import Update from "./admin/TestResult/update";
import About from "./core/About";

import DiagnosticCenter from "./admin/DiagnosticCenter";
import Create1 from "./admin/DiagnosticCenter/create";
import Read1 from "./admin/DiagnosticCenter/read";
import Update1 from "./admin/DiagnosticCenter/update";

import DiagnosticTest from "./admin/DiagnosticTest";
import Create2 from "./admin/DiagnosticTest/create";
import Read2 from "./admin/DiagnosticTest/read";
import Update2 from "./admin/DiagnosticTest/update";

import PatientAdmin from "./admin/PatientAdmin";
import Register from "./admin/Patient/RegisterPatient";
import View from "./admin/Patient/ViewPatient";
import Update3 from "./admin/Patient/UpdatePatient";

// import AppointmentAdmin from "./admin/AppointmentAdmin";
// import AddAdmin from "./admin/Appointment/AddAdmin";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/about" exact component={About}/>
        
        <PrivateRoute path="/user/dashboard" exact component={UserDashBoard} />

        <PrivateRoute path="/user/testresult" exact component={TestResultAdmin} />
        <PrivateRoute path="/user/create/testresult" exact component={Create} />
        <PrivateRoute path="/user/view/testresult" exact component={Read} />
        <PrivateRoute path="/user/update/testresult" exact component={Update} />

        
        <PrivateRoute path="/user/diagnosticcenter" exact component={DiagnosticCenter} />
        <PrivateRoute path="/user/create/diagnosticcenter" exact component={Create1} />
        <PrivateRoute path="/user/view/diagnosticcenter" exact component={Read1} />
        <PrivateRoute path="/user/update/diagnosticcenter" exact component={Update1} />

        <PrivateRoute path="/user/diagnostictest" exact component={DiagnosticTest} />
        <PrivateRoute path="/user/create/diagnostictest" exact component={Create2} />
        <PrivateRoute path="/user/view/diagnostictest" exact component={Read2} />
        <PrivateRoute path="/user/update/diagnostictest" exact component={Update2} />

        <PrivateRoute path="/user/patient" exact component={PatientAdmin} />
        <PrivateRoute path="/user/create/patient" exact component={Register} />
        <PrivateRoute path="/user/view/patient" exact component={View} />
        <PrivateRoute path="/user/update/patient" exact component={Update3} />

        {/* <PrivateRoute path="/user/appointment" exact component={AppointmentAdmin} />
        <PrivateRoute path="/user/add/patient" exact component={AddAdmin} /> */}

        <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard} />


        <Route component={Notfound} /> 

        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
