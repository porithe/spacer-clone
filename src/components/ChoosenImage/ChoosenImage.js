import React, {Component} from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors';
import { connect } from 'react-redux';

const ChoosenBlock = styled.div`
    width: 330px;
    min-height: 500px;
    background-color: ${colors.lightgrey};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    z-index: 3;
    box-shadow: 0 0 10px 0 ${colors.dark};
    @media (min-width: 320px) and (max-width: 350px) {
  
        width: 290px;
  
    }
    @media (min-width: 481px) and (max-width: 767px) {
  
        width: 440px;
  
    }
    @media (min-width: 768px) and (max-width: 1024px) {
  
        width: 700px;
        
      
    }
    @media (min-width: 1025px) {
  
        width: 960px;
      
    }
`;
const Image = styled.img`
    width: 270px;
    height: 200px;
    margin: 10px auto 0 auto;
    @media (min-width: 320px) and (max-width: 350px) {
  
        width: 260px;
        height: 180px;
  
    }
    @media (min-width: 481px) and (max-width: 767px) {
  
        width: 380px;
        height: 270px;
      
    }
    @media (min-width: 768px) and (max-width: 1024px) {
  
        width: 620px;
        height: 320px;
      
    }
    @media (min-width: 1025px) {
  
        width: 450px;
        height: 295px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 25px;
    }
    
`;
const Title = styled.h1`
    font-size: 1.25rem;
    padding: 0 25px 0 25px;
    text-align: center;
    margin-top: 10px;
    color: ${colors.black};
    @media (min-width: 320px) and (max-width: 350px) {
  
        padding: 0 30px 0 30px;
  
    }
    @media (min-width: 481px) and (max-width: 767px) {
  
        padding: 0 45px 0 45px;
  
    }
    @media (min-width: 768px) and (max-width: 1024px) {
  
        padding: 0 55px 0 55px;
      
    }
    @media (min-width: 1025px) {
    
        padding-top: 10px;
        font-size: 1.4rem;        
    }
    
`;
const Id = styled.h1`
    font-size: 1.1rem;
    text-align: center;
    margin-top: 10px;
    color: ${colors.black};
    
    @media (min-width: 1025px) {
        width: 450px;
        top: 18%;
        transform: translateY(-18%);
        position: absolute;
        text-align: center;
        right: 15px;
        font-size: 1.25rem;
    }
`;
const Date = styled.h1`
    font-size: 1rem;
    text-align: center;
    margin-top: 5px;
    color: ${colors.black};
    
    @media (min-width: 1025px) {
        width: 450px;
        top: 25%;
        transform: translateY(-25%);
        position: absolute;
        text-align: center;
        right: 15px;
        font-size: 1.15rem;
    }
`;
const Description = styled.p`
    font-size: 1.2rem;
    padding: 10px;
    text-align: center;
    color: ${colors.black};
    @media (min-width: 1025px) {
        width: 450px;
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        text-align: center;
        right: 15px;
        font-size: 1.2rem;
        word-wrap: break-word;
    }
`;
const ExitButton = styled.div`
    position: absolute;
    top: 5px;
    right: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    ::before {
        content: '';
        position: absolute;
        top: 15px;
        left: 0;
        width: 30px;
        height: 3px;
        background-color: ${colors.black};
        transform: rotate(45deg);
    }
    ::after {
        content: '';
        position: absolute;
        top: 15px;
        right: 0;
        width: 30px;
        height: 3px;
        background-color: ${colors.black};
        transform: rotate(135deg);
    }
`;


class ChoosenImage extends Component {



    closeImage = () => {
        this.props.closeImage(false);
    };

    render() {

        console.log(this.props.value);

        return (
            <ChoosenBlock>
                <ExitButton onClick={this.closeImage} />
                <Title>{this.props.value.data[0].title}</Title>
                <Image src={this.props.value.links[0].href} />
                <Id>{this.props.value.data[0].nasa_id.substring(0,20)}</Id>
                <Date>{this.props.value.data[0].date_created}</Date>
                <Description>
                    {this.props.value.data[0].description.substring(0,200)}
                </Description>
            </ChoosenBlock>
        );
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(ChoosenImage);
