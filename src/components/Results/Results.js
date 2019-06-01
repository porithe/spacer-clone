import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../template/colors';
import Input from '../Input/Input';
import ChoosenImage from '../ChoosenImage/ChoosenImage';

const ResultsBlock = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: ${colors.grey};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ImagesBlock = styled.div`
    padding-top: 25px;
    padding-bottom: 25px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 250px;
    grid-gap: 15px;
    justify-content: center;
    @media (min-width: 430px) and (max-width: 670px) {
        grid-template-columns: 300px;
    }
    @media (min-width: 671px) and (max-width: 767px) {
        grid-template-columns: 300px 300px;
  
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        grid-template-columns: 350px 350px;
        grid-gap: 25px;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        grid-template-columns: 290px 290px 290px;
        grid-gap: 25px;
  
    }
    @media (min-width: 1281px) {
        grid-template-columns: 290px 290px 290px 290px;
        grid-gap: 25px;
    }
`;
const Image = styled.img`
    width: 250px;
    height: 250px;
    cursor: pointer;
    @media (min-width: 430px) and (max-width: 767px) {
        width: 300px;
        height: 300px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 350px;
        height: 350px;
  
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        width: 290px;
        height: 290px;
    }
    @media (min-width: 1281px) {
        width: 290px;
        height: 290px;
    }
`;
const LogoType = styled.h1`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    color: ${colors.dark};
    font-size: 2.4rem;
    font-weight: 700;
    @media (min-width: 481px) {
        font-size: 3.5rem;
    }
`;


class Results extends Component {



    render() {

        if(this.props.loading === true) {
            return (
                <ResultsBlock>
                    <LogoType>SPACER</LogoType>
                    <Input />

                    <ImagesBlock>
                        { this.props.results.map(item => <Image key={item.data[0].nasa_id} src={item.links[0].href} /> )}
                    </ImagesBlock>
                    <ChoosenImage />
                </ResultsBlock>
            );
        }
        else return null;
    }
}

function mapStateToProps(state){
    return {
        results: state.results,
        loading: state.loading,
    }
}

export default connect(mapStateToProps)(Results);
