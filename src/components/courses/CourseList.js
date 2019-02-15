
import React from 'react';


const CourseList = ({courses}) => {
    const tableStyle = {
        width: '400px',
        margin: 'auto'
    }
    return(
       <table style={tableStyle} class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Author</th>
                </tr>

            </thead>
            <tbody>
             {courses.map((course)=>{
                return       <tr key={course.id}>
                                <td>{course.title}</td>
                                <td>{course.author}</td>
                             </tr>
             })}
          

            </tbody>
       </table>
    )
}


export default CourseList;