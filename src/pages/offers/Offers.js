import React from "react";
import styled from "styled-components";
import { Button } from "../../elements";
const Table = styled.table`
  margin-top: 1rem;
  width: 100%;
  height: 1rem;
  thead {
    background-color: ${(props) => props.theme.color.main};
    tr {
      th {
        padding: 1rem;
      }
    }
  }
  tbody {
    tr {
      .inr {
        display: flex;
        flex-direction: column;
      }
      td {
        padding: 0.2rem;
      }
      &:nth-child(even) {
        background-color: #ccc;
      }
    }
  }
`;

function Offers() {
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
    },
  ];

  return (
    <Table>
      <thead>
        <tr>
          <th>Program</th>
          <th>Batch Type</th>
          <th>Start Date</th>
          <th>End Data</th>
          <th>Exam Date</th>
          <th>Duration</th>
          <th>Timings</th>
          <th>Total Fee</th>
          <th>Batch ID</th>
          <th>Register</th>
          <th>Enquire</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((course, i) => (
          <>
            <tr key={i}>
              <td>{course.program}</td>
              <td>{course.batch_type}</td>
              <td>{course.start_date}</td>
              <td>{course.end_date}</td>
              <td>{course.exam_date}</td>
              <td>{course.duration}</td>
              <td>{course.timings}</td>
              <td className="inr">
                <span>
                  <del>INR {course.total_fee.price}</del>
                </span>
                <span>INR {course.total_fee.offer_price}</span>
              </td>
              <td>{course.batch_ID}</td>
              <td>
                <Button>Register</Button>
              </td>
              <td>
                <Button>Enquire</Button>
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </Table>
  );
}

export default Offers;
