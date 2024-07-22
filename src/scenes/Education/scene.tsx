import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Social_media from '../../Components/social_media';

const Education = () => {
  return (
      <div>
        <h1 className="title">Education</h1>
        <VerticalTimeline>
          {/* <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
            className="vertical-timeline-element--work"
            date="June 22 - 2024"
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#ffffff'}}
            // icon={"/personal_test2.png"}
          >
            <h3 className="vertical-timeline-element-title">CS50's Introduction to Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              HarvardX (Harvard University online platform)
            </p>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            contentStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
            className="vertical-timeline-element--work"
            date="June - August - 2024"
            iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">CS50's Introduction to Programming with Python</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
            Awarded from Cambridge, Massachusetts
             and certified by Harvard University
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