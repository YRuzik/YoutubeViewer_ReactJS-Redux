import styled from "styled-components";
import React from "react";

const IFrameCustom = styled.iframe`
  border: none;
`

const Player = ({videoID}: any) => {
    return (
        <IFrameCustom allow='autoplay' allowFullScreen={true} width="50%" height="575rem" src={`https://www.youtube-nocookie.com/embed/${videoID}?autoplay=1&origin=http://example.com`}/>
    )
}

export default Player;
