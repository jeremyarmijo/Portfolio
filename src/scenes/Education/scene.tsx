import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Social_media from '../../Components/social_media';
import PDFViewer from "../Education/view_pdf"


const Education = () => {
  return (
      <div>
        <h1 className="title">Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
            className="vertical-timeline-element--work"
            date="July 24 - September 27 - 2024"
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#ffffff'}}
            // icon={"/personal_test2.png"}
          >
            <h3 className="vertical-timeline-element-title">CS50's Introduction to Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
            This is CS50x, Harvard University's introduction to the intellectual enterprises of computer science and the art of programming for majors and non-majors alike, with or without prior programming experience.
              <br/>
              This course it focuse on computer science more generally as well as programming with C, Python, SQL, and JavaScript.
              <br/>
              Awarded from Cambridge, Massachusetts
              and certified by HarvardX (Harvard University online platform)
              <PDFViewer path="/CS50x.pdf"/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
            className="vertical-timeline-element--work"
            date="June 1 - July 23 - 2024"
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">CS50's Introduction to Programming with Python</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              An introduction to programming using a language called Python. Learn how to read and write code as well as how to test and "debug" it. Designed for students with or without prior programming experience who'd like to learn Python specifically.
              CS50P, is entirely focused on programming with Python.
              <br/>
              Awarded from Cambridge, Massachusetts
              and certified by HarvardX (Harvard University online platform)
              <PDFViewer path="/CS50P.pdf"/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
            // className="vertical-timeline-element--work"
            className="text_color"
            date="2023 - 2028"
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Epitech</h3>
            <h4 className="vertical-timeline-element-subtitle">High school program - 5 years</h4>
            <p>
              Expert diploma in information technologies approved by the Ministry of Higher Education and Research & Expert title in software engineering level 7, registered with the RNCP
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}

            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Lycée Nicolas Jospeh Cugnot</h3>
            <h4 className="vertical-timeline-element-subtitle">BAC général - 3 years</h4>
            <p>
              spécialité Mathematique, S.E.S
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <Social_media/>
        <div className='edition'><br/>©&nbsp;2024&nbsp;|&nbsp;Jérémy Armijo</div>
    </div>
    )    
  };

export default Education;