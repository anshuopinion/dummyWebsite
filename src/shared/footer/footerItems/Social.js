import React from "react";
import styled from "styled-components";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = styled.div`
  color: ${(props) => props.theme.color.light};
  width: 20%;
  display: flex;
  justify-content: space-evenly;
`;

const icons = [
  { i: faFacebook },
  { i: faInstagram },
  { i: faTwitter },
  { i: faYoutube },
  { i: faTelegram },
];

function Social() {
  return (
    <SocialIcon>
      {icons.map((icon, i) => (
        <FontAwesomeIcon icon={icon.i} size="2x" key={i} />
      ))}
    </SocialIcon>
  );
}

export default Social;
