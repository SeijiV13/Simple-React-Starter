
import React from 'react';
import Title from '../common/Title';

class HomePage extends React.Component {
    render(){
        const title="Pluralsignt Administration";

        return(
            <div className="jumbotron">
                  <Title title={title}></Title>
                 <p>React, Redux and React Router in Es6</p>
            </div>
        )
    }
}

export default HomePage;