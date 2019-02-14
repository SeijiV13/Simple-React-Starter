import React from 'react';



class CoursePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {
                id: 0,
                title: ''
            },
            courses: [],
            
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    
    updateCourseState(event){
       let courseName = event.target.value;
       let course = {
           id: this.state.course.id,
           title: courseName
       }
      this.setState({course});
    }

    iterateId(){
        let course = Object.assign({}, this.state.course);
        course.id += 1;
        this.setState({course})
    }

    saveCourse(){
        let newcourses = this.state.courses;
        this.iterateId();
        newcourses.push(this.state.course);
        this.setState({courses: newcourses});
    }

    render(){
        return(
            <div>
                 <h1>Create Course</h1>
                 {this.state.courses.map(course =>{
                     return <ol key={course.id}>{course.id} | {course.title}</ol>
                 })}
                <input className="form-control" name="title" onChange={this.updateCourseState}/>
                <br></br>
                <input type="submit" className="btn btn-primary" onClick={this.saveCourse}></input>
                <br></br>
            </div>
        )
    }
}


export default CoursePage;