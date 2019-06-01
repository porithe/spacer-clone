import React, {Component} from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors';
import backgroundImage from '../../photos/bgimage.jpg';
import Input from '../Input/Input';

const HeaderBlock = styled.header`
    width: 100%;
    height: 100vh;
    background-image: url('${backgroundImage}');
    background-size: cover;
    background-position: 80% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const SpacerBlock = styled.h1`
    color: ${colors.white};
    font-size: 4.1rem;
    text-align: center;
    font-weight: 700;
    letter-spacing: 6px;
    margin-bottom: 20px;
    @media (min-width: 481px) and (max-width: 767px) {
        font-size: 6rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 6.8rem;
  
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
       font-size: 7.8rem; 
    }
    @media (min-width: 1281px) {
       font-size: 9.8rem; 
    }
`;
const TextBlock = styled.p`
    color: ${colors.white};
    font-size: 1.1rem;
    text-align: center;
    font-weight: 400;
    padding: 10px;
    width: 100%;
    @media (min-width: 481px) and (max-width: 767px) {
        width: 450px;
        font-size: 1.2rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 600px;
        font-size: 1.3rem;
  
    }
    @media (min-width: 1025px) {
       width: 650px;
       font-size: 1.5rem; 
    }
`;


class Header extends Component {
    render() {
        return (
            <HeaderBlock>
                <SpacerBlock>SPACER</SpacerBlock>
                <TextBlock>Begin your journey through our amazing galaxy, and discover places you never even heard of.</TextBlock>
                <TextBlock>Type anything space-related to start</TextBlock>
                <Input />
            </HeaderBlock>
        );
    }
}

export default Header;
