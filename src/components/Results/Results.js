import React, {Component} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { colors } from '../../template/colors';
import Input from '../Input/Input';

const ResultsBlock = styled.div`
    width: 100%;
    height: 100%;
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
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 250px;
    grid-gap: 15px;
    justify-content: center;
`;
const Image = styled.img`
    width: 250px;
    height: 250px;
`;

class Results extends Component {


    render() {

        if(this.props.loading === true) {
            return (
                <ResultsBlock>
                    <Input />
                    <ImagesBlock>
                        { this.props.results.map(item => <Image key={item.data[0].nasa_id} src={item.links[0].href} /> )}
                    </ImagesBlock>
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
