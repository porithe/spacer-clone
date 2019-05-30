import React, {Component} from 'react';
import { connect } from 'react-redux';

class Results extends Component {


    render() {


        return (
            <div>
                { this.props.results.map(item => <img src={item.links[0].href} /> )}
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
