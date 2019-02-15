import React from 'react';
import Title from '../common/Title';


class AboutPage extends React.Component{
   render(){
       const title= "About";
       return(
         
          <div>
                <Title title={title}></Title>
                <p>this applications uses React, Redux, React Router and a variety of helpful other libraries</p>
          </div>
       );
   }
}


export default AboutPage;