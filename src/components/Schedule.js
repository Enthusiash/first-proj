import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import '../styles/Schedule.css'

const locales = {
  "en-US": require('date-fns/locale/en-US')
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})
const events = [
  {
    title: "Test 1",
    allDay: true,
    start: new Date(2023, 3, 0),
    end: new Date(2023, 3, 0)
  },
  {
    title: "Test 2",
    start: new Date(2023, 3, 0),
    end: new Date(2023, 3, 0)
  },
  {
    title: "Test 3",
    start: new Date(2023, 4, 0),
    end: new Date(2023, 4, 0)
  },
]


function Schedule() {

  return (
    <div className="Cal">
      <h1>Calendar</h1>
      <div className="but"> 
      <Link to="/appointment">
        <button>SCHEDULE HERE</button>
        </Link>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>

  )
}
export default Schedule