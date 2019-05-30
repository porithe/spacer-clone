import React, {Component} from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors';
import _ from 'lodash';
import { connect } from 'react-redux';
import axios from 'axios';

const InputBlock = styled.input`
    width: 220px;
    height: 45px;
    color: ${colors.white};
    text-align: center;
    font-size: 1.7rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid rgba(236,240,241 ,1);
    padding: 5px;
    ::placeholder {
        color: rgba(236,240,241 ,0.8);
    }
    margin-top: 40px;
    @media (min-width: 481px) and (max-width: 767px) {
        width: 250px;
        height: 50px;
        font-size: 2.1rem;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 300px;
        height: 53px;
        font-size: 2.3rem;
    }
    @media (min-width: 1025px) and (max-width: 1280px) {
        width: 340px;
        height: 58px;
        font-size: 2.5rem;
    }
    @media (min-width: 1281px) {
       width: 380px;
       height: 61px;
       font-size: 2.7rem;
    }
`;


class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            results: [],
        };
        this.onChangeDebounced = _.debounce(this.onChangeDebounced, 1000)
    }

    handleInput = e => {
        this.setState({
            value: e.target.value,
        });
        this.onChangeDebounced(e)
    };
    onChangeDebounced = e => {
        if(this.state.value !== '') {
            axios.get(`https://images-api.nasa.gov/search?q=${this.state.value}&media_type=image`)
                .then(res => {
                    this.setState({
                        results: res.data.collection.items,
                    })
                });

            setTimeout( () => {
                this.props.dispatch({
                    type: 'GET RESULTS',
                    items: this.state.results,
                });
            }, 1000);
        }
    };


    render() {

        return (
            <InputBlock value={this.state.search} onChange={this.handleInput} placeholder="e.g. Titan" />
        );
    }
}
function mapStateToProps(state){
    return {
        apiValue: state.apiValue,
    }
}

export default connect(mapStateToProps)(Input);
