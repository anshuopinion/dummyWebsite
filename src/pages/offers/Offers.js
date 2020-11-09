import React, { useState } from "react";
import styled from "styled-components";

import CourseCard from "./components/CourseCard";
import CourseTable from "./components/CourseTable";
const StyledOffers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function Offers() {
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState();
  const showCard = (course) => {
    setCourse(course);
    setOpen(true);
  };

  const closeCard = () => {
    setOpen(false);
  };
  const tableData = [
    {
      program: "German A1",
      batch_type: "Weekend Evening",
      start_date: "12-10-2020",
      end_date: "04-12-2020",
      exam_date: "17-12-2020",
      duration: "80 Hours",
      timings: "7PM - 9PM",
      total_fee: { price: 18110, offer_price: 12999 },
      batch_ID: "V1922020",
      seat: 12,
    },
    {
      program: "German A1",
      batch_type: "Weekend Evening",
      start_date: "12-10-2020",
      end_date: "04-12-2020",
      exam_date: "17-12-2020",
      duration: "80 Hours",
      timings: "7PM - 9PM",
      total_fee: { price: 18110, offer_price: 12999 },
      batch_ID: "V1922020",
      seat: 12,
    },
    {
      program: "German A1",
      batch_type: "Weekend Evening",
      start_date: "12-10-2020",
      end_date: "04-12-2020",
      exam_date: "17-12-2020",
      duration: "80 Hours",
      timings: "7PM - 9PM",
      total_fee: { price: 18110, offer_price: 12999 },
      batch_ID: "V1922020",
      seat: 12,
    },
    {
      program: "German A1",
      batch_type: "Weekend Evening",
      start_date: "12-10-2020",
      end_date: "04-12-2020",
      exam_date: "17-12-2020",
      duration: "80 Hours",
      timings: "7PM - 9PM",
      total_fee: { price: 18110, offer_price: 12999 },
      batch_ID: "V1922020",
      seat: 12,
    },
    {
      program: "German A1",
      batch_type: "Weekend Evening",
      start_date: "12-10-2020",
      end_date: "04-12-2020",
      exam_date: "17-12-2020",
      duration: "80 Hours",
      timings: "7PM - 9PM",
      total_fee: { price: 18110, offer_price: 12999 },
      batch_ID: "V1922020",
      seat: 12,
    },
    {
      program: "German A1",
      batch_type: "Weekend Evening",
      start_date: "12-10-2020",
      end_date: "04-12-2020",
      exam_date: "17-12-2020",
      duration: "80 Hours",
      timings: "7PM - 9PM",
      total_fee: { price: 18110, offer_price: 12999 },
      batch_ID: "V1922020",
      seat: 12,
    },
  ];

  return (
    <StyledOffers>
      {open ? (
        <CourseCard course={course} close={closeCard} />
      ) : (
        <CourseTable tableData={tableData} showCard={showCard} />
      )}
    </StyledOffers>
  );
}

export default Offers;
