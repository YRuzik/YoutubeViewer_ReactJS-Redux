import styled from "styled-components";

const IFrameCustom = styled.iframe`
  border: none;
`

const Player = ({videoID}: any) => {
    return (
        <IFrameCustom allow='autoplay' allowFullScreen={true} width="100%" height="734.5rem" src={`https://www.youtube-nocookie.com/embed/${videoID}?autoplay=1&origin=http://example.com`}/>
    )
}

export default Player;
