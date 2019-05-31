import React, {Component} from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors';
import _ from 'lodash';
import { connect } from 'react-redux';
import axios from 'axios';


const InputBlock = styled.input`
    width: 220px;
    height: 45px;
    color: ${props => props.theme.main};
    text-align: center;
    font-size: 1.7rem;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${props => props.theme.main};
    padding: 5px;    
    ::placeholder {
        color: ${props => props.theme.mainPlaceHolder};
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

const theme = {
    main: "#FAFAFA",
    mainPlaceHolder: 'rgba(236,240,241 ,0.8)',
};


class Input extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: '',
            results: [],
            loading: false,
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
                        loading: true,
                    });
                    this.props.dispatch({
                        type: 'GET RESULTS',
                        items: this.state.results,
                        loading: this.state.loading,
                    });
                });
        }
        theme.main = colors.dark;
        theme.mainPlaceHolder = colors.darkPlaceHolder;
    };



    render() {
        return (
            <InputBlock theme={theme} value={this.state.search} onChange={this.handleInput} placeholder="e.g. Titan" />
        );
    }
}
function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps)(Input);
