import React, {Component} from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors';
import { connect } from 'react-redux';

const ChoosenBlock = styled.div`
    width: 330px;
    height: 500px;
    background-color: ${colors.dark};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    z-index: 3;
`;
const Image = styled.img`
    width: 270px;
    height: 200px;
    margin: 10px auto 0 auto;
`;
const Title = styled.h1`
    font-size: 1.25rem;
    padding: 0 15px 0 15px;
    text-align: center;
    margin-top: 10px;
    color: ${colors.white};
`;
const Id = styled.h1`
    font-size: 1.1rem;
    text-align: center;
    margin-top: 10px;
    color: ${colors.white};
`;
const Date = styled.h1`
    font-size: 1rem;
    text-align: center;
    margin-top: 5px;
    color: ${colors.white};
`;
const Description = styled.p`
    font-size: 1.2rem;
    padding: 10px;
    text-align: center;
    color: ${colors.white};
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
        background-color: ${colors.white};
        transform: rotate(45deg);
    }
    ::after {
        content: '';
        position: absolute;
        top: 15px;
        right: 0;
        width: 30px;
        height: 3px;
        background-color: ${colors.white};
        transform: rotate(135deg);
    }
`;


class ChoosenImage extends Component {



    render() {
        return (
            <ChoosenBlock>
                <ExitButton />
                <Title>Nearside of the Moon</Title>
                <Image src={"https://images-assets.nasa.gov/image/PIA13998/PIA13998~thumb.jpg"} />
                <Id>PIA13998</Id>
                <Date>2009-09-24T18:00:22Z</Date>
                <Description>
                    In this photograph, the composite material mirror is tested in the X-Ray Calibration Facility at the Marshall Space Flight Center for the James Webb Space Telescope(JWST).
                </Description>
            </ChoosenBlock>
        );
    }
}

function mapStateToProps(state){
    return {
        showImage: state.showImage,
    }
}

export default connect(mapStateToProps)(ChoosenImage);
