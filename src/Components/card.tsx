import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  linkUrl: string;
  language: string;
  type: string;
  group_size: string;
  duration_project: string;
  begin_date: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl1, imageUrl2, imageUrl3, linkUrl,
                                    language, type, group_size, begin_date, duration_project }) => {
  const size_pic="400px"
  const width_max="1300px"
  const border_card = {
    width: `${width_max}`,
  };
  return (
    <div>
      <div style={border_card} className="card">
        <h1 className='title_card'><br/>{title}<br/></h1>
        <img width={size_pic} height={size_pic} src={imageUrl1} alt={imageUrl1}/>
        &nbsp;&nbsp;
        <img width={size_pic} height={size_pic} src={imageUrl2} alt={imageUrl2}/>
        &nbsp;&nbsp;
        <img width={size_pic} height={size_pic} src={imageUrl3} alt={imageUrl3}/>
        <p>{description}</p>
        <form action={linkUrl}>
                <h3>{language} - {type} - {group_size} - {begin_date} - {duration_project}</h3>
              <button type="submit" className="GFG">View code on Github</button>
        </form>
      </div>
    </div>
  );
};

export default Card;
