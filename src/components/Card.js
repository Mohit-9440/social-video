import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 202px;
    background-color: #999;
`;

const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px; 
`;

const ChannelImage = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

export default function Card(){
    return (
        <Container>
            <Image src="https://i.ytimg.com/an_webp/eMB_pO88rj0/mqdefault_6s.webp?du=3000&sqp=CODd-JgG&rs=AOn4CLApzq8widKkOO1MTIKktiArAUJTWw" />
        <Details>
            <ChannelImage/>
            <Texts>
                <Title>Test Video</Title>
                <ChannelName>Social Dev</ChannelName>
                <Info>696,802 views 1 day ago</Info>
            </Texts>
        </Details>
        </Container>
    )
}