import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar"
import CreateAppointment from "./components/appointments/Create"
import AppointmentList from "./components/appointments/List"
import TodayAppointments from "./components/appointments/Today"

function App() {
  return (
    <div>
      <Sidebar/>
      <CreateAppointment/>
      <AppointmentList/>
      <TodayAppointments/>
    </div>
  );
}

export default App;
