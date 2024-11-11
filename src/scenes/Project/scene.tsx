import First_year_projects from "../../Components/first_year";
import Personal_project from "../../Components/personal_project";
import Social_media from "../../Components/social_media";
// import Table_of_content from "../../Components/table_of_content";

const Project_scene = () => {
    return (
      <div className="display_adaptative">
        <h1 className="title">Project</h1>
        {/* <Table_of_content/> */}
        <h1>Personal project</h1>
        <Personal_project/>
        <h1>Epitech projects</h1>
        <h1>First year</h1>
        <First_year_projects/>
        <Social_media/>
        <div className='edition'><br/>© 2024 | Jérémy Armijo</div>
    </div>
    )
  };

export default Project_scene;