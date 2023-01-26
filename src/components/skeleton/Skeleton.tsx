import styled from "styled-components";
import React from "react";

const Anim = styled.div`
  position: relative;
  overflow: hidden;
  background: #463782;
  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #463782 0%, rgba(255,255,255,.10) 40%, rgba(255,255,255,.10) 50%, #463782 100%);
    background-repeat: no-repeat;
    background-size: 200% 200%;
    animation: shimmer 2s ease infinite;
  }
  @keyframes shimmer {
    0%{
      background-position: 200% 0;
    }
    100%{
      background-position: -200% 0;
    }
  }
`

const SkeletonContainer = styled.div`
`

const SkeletonThumbnail = styled(Anim)`
  width: 100%;
  min-height: 11.5rem;
  border-radius: 10px;
`

const SkeletonContent = styled.div`
  padding: 1rem;
`

const SkeletonTitleLine = styled(Anim)`
  width: 84%;
  min-height: 1rem;
  margin: 0 0 0 3rem;
  border-radius: 10px;
`

const SkeletonChannelLine = styled(Anim)`
  width: 40%;
  min-height: 1rem;
  margin: 0.5rem 0 0 3rem;
  border-radius: 10px;
`

const SkeletonStatistics = styled(Anim)`
  width: 60%;
  min-height: 1rem;
  margin: 0.5rem 0 0 3rem;
  border-radius: 10px;
`

const SkeletonAvatar = styled(Anim)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50px;
  position: absolute;
`

const Skeleton = ({big}: any) => {
    return (
            <SkeletonContainer>
                <SkeletonThumbnail style={big ? {minHeight: '45rem'} : {minHeight: '11.5rem'}}/>
                <SkeletonContent>
                    <SkeletonAvatar/>
                    <SkeletonTitleLine/>
                    <SkeletonChannelLine/>
                    <SkeletonStatistics/>
                </SkeletonContent>
            </SkeletonContainer>
    )
}

export default Skeleton
