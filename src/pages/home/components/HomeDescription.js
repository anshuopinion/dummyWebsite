import React from "react";
import styled from "styled-components";

const DescriptionContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
`;
const DescriptionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const Description = styled.p`
  line-height: 1.3;
`;
function HomeDescription() {
  return (
    <DescriptionContainer>
      <DescriptionTitle>About....</DescriptionTitle>
      <Description>
        <b>
          ur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget
          malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac
          lectus. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id
          orci porta dapibus. Curabitur non nulla sit amet nisl tempus convallis
          quis ac lectus. Praesent sapien massa, convallis a pellentesque nec,
          egestas non nisi. Curabitur aliquet quam id dui posuere blandit. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut
          libero malesuada feugiat. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
          malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac
          lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Curabitur aliquet quam id dui posuere blandit. Curabitur
          aliquet quam id dui posuere
        </b>
      </Description>
    </DescriptionContainer>
  );
}

export default HomeDescription;
