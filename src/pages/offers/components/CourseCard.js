import React from "react";
import styled from "styled-components";
import { Card, Button } from "../../../elements";
import offerImage from "../../../images/SpecialDeal.png";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledCard = styled(Card)`
  margin-top: 5rem;
  /* display: flex; */
`;

const CardContent = styled.div`
  div {
    margin-bottom: 1rem;
  }
  display: flex;
  flex-direction: column;
`;
const OfferImg = styled.img`
  width: 200px;
  height: 200px;
  overflow: hidden;
  position: relative;
  top: -380px;
  left: 270px;
`;
const EnrollButton = styled(Button)`
  align-self: flex-end;
  padding: 0.5rem 2rem;
`;
const BackButton = styled(Button)`
  align-self: flex-start;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 1px solid transparent;
  &:hover {
    color: red;
    border: 1px solid red;
  }
`;
function CourseCard({ course ,close }) {
  return (
    <StyledCard>
      <CardContent>
        <BackButton onClick={close}>
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />{" "}
        </BackButton>
        <div>Program : {course.program}</div>
        <div>Batch Type: {course.batch_type}</div>

        <div>
          Date: {course.start_date} to {course.end_date}
        </div>
        <div> Exam Date: {course.exam_date}</div>
        <div>Duration: {course.duration}</div>
        <div> Time: {course.timings}</div>
        <div className="inr">
          <span>
            Regular Price: <del>INR {course.total_fee.price}</del>
          </span>
          <span> Offer Price: INR {course.total_fee.offer_price}</span>
        </div>
        <div>{course.batch_ID}</div>
        <div>Seat Left {course.seat}</div>
        <EnrollButton>ENROLL</EnrollButton>
      </CardContent>
      <OfferImg src={offerImage} alt="offer-image" />
    </StyledCard>
  );
}

export default CourseCard;
