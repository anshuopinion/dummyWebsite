import React from "react";
import styled from "styled-components";
const Video = styled.iframe`
  padding: 3rem;
  width: 100%;
  height: 600px;
`;
function HomeVideo() {
  return (
    <Video
      src="https://www.youtube.com/embed/Lv6iQW2s7So"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></Video>
  );
}

export default HomeVideo;
