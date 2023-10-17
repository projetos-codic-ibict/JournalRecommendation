import React from "react"

// import { AppointmentProvider } from "../components/appointment/AppointmentContext"
// import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Abstract from "../components/Abstract/Abstract"

import "./Appointment.scss"

function Appointment() {
  return (
    <div>
      <Header />
      <Abstract/>
      {/* <PlanContent>
        <SearchSpeciality />
      </PlanContent>
      <DoctorsList /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Appointment
