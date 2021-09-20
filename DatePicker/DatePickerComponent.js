import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function DateComponent () {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <>
        <DatePicker 
        placeholder="select date"
        selected={selectedDate}
        onChange={date => setSelectedDate(date)} 
        dateFormat={"dd/MM/yyyy"}
        mindate={new Date()}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
        showYearDropdown
        scrollableYearDropdown
        isClearable
        />
    </>
  )
  }
 
export default DateComponent ;