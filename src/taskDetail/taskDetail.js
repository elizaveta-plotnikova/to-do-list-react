import React from 'react';
import {withRouter} from 'react-router-dom';

const taskDetail = (props) => {
    return(
        <div>
            <h2>Task № {this.props.id}</h2>
            <p>{this.props.match.params.id}</p>
        </div>
    )
}

export default withRouter(taskDetail);