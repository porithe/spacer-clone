import React, {Component} from 'react';
import { connect } from 'react-redux';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }



    render() {


        console.log(this.props.results);

        return (
            <div>
                <h1>bez kappi</h1>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        results: state.results,
    }
}

export default connect(mapStateToProps)(Results);
