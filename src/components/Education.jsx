import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <div id="education" className="education-container">
        <div className="education-content">
            <h2 className="about-title">Education</h2>
            
            <div className="education-item">
                <div className="education-details">
                    <h3>AGH University of Science and Technology</h3>
                    <h4>Faculty of Computer Science</h4>
                    <p className="location"><strong>Cracow, Poland</strong></p>
                    <div className="degree-dates">
                        <h5>Bachelor of Computer Science</h5>
                        <p className="date"><strong>Oct 2022 - Present</strong></p>
                    </div>
                    <p>
                        During my studies in Computer Science at AGH University, I have deepened my knowledge and skills in the field of information technology and programming. 
                        This includes a comprehensive understanding of software development methodologies, data structures, algorithms, and modern programming languages.
                    </p>
                </div>
            </div>
            
            <div className="education-item">
                <div className="education-details">
                    <h3>High School no. 1 name of Nicolaus Copernicus</h3>
                    <p className="location"><strong>Jarosław, Poland</strong></p>
                    <div className="degree-dates">
                        <h5>High School Diploma</h5>
                        <p className="date"><strong>Sep 2019 - Jun 2022</strong></p>
                    </div>
                    <p>
                        I completed my high school education at High School in Jarosław with a focus on a broad range of subjects, 
                        including a specialized profile in Information Technology. This IT-focused curriculum provided me with a solid foundation in computing and programming, 
                        and it was instrumental in preparing me for higher education. 
                        The rigorous coursework helped develop my critical thinking and problem-solving skills, as well as a deep interest in technology and its applications.
                    </p>                
                </div>
            </div>

            <div className="education-item">
                <div className="education-details">
                    <h3>Language Skills</h3>
                    <h4>English (B2 Level)</h4>
                    <p>
                        I have English skills at the B2 level, as certified through an exam administered by AGH University of Science and Technology. 
                        The B2 level certification confirms my ability to communicate effectively in English, both in writing and orally, at an upper-intermediate level. 
                        This qualification has been essential for my academic and professional development, proving my proficiency in various contexts.
                    </p>
                    
                </div>
            </div>
            
        </div>
    </div>
  );
};

export default Education;
