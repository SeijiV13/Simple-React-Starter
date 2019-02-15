import React from 'react';
import Title from '../common/Title';
import CourseList from './CourseList';



class CoursePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {
                id: 0,
                title: '',
                author: ''
            },
            courses: [],
            
        }

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }
    
    updateCourseState(event){
       let fieldName = event.target.name;
       let course = Object.assign({}, this.state.course);
       course[fieldName] = event.target.value;
      this.setState({course});
    }

    iterateId(){
        let course = Object.assign({}, this.state.course);
        course.id += 1;
        this.setState({course})
    }

    saveCourse(event){
        event.preventDefault();
        let newcourses = this.state.courses;
        this.iterateId();
        newcourses.push(this.state.course);
        this.setState({courses: newcourses});
    }

    render(){
        const title="Create Course";
        const buttonStyle = {
            float: 'right'
        }
        return(
            <div>
                 <Title title={title}></Title>
                <div className="form-card">
                    <form>

                    <div class="form-gorup">
                      <label class="control-label">Title</label>
                      <div className="field">
                        <input className="form-control" name="title" onChange={this.updateCourseState}/>
                      </div> 
                    </div>

                    <div class="form-gorup">
                      <label class="control-label">Author</label>
                      <div className="field">
                        <input className="form-control" name="author" onChange={this.updateCourseState}/>
                      </div>
                    </div>
                   
                     <br></br>
                        <input style={buttonStyle} type="submit" className="btn btn-primary" onClick={this.saveCourse}></input>
                    </form>
                 
                </div>
                <br></br>
                <br></br>
                <CourseList courses={this.state.courses}></CourseList>
           
            </div>
        )
    }
}


export default CoursePage;