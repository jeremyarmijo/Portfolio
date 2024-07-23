import React from "react";

interface path_props {
    path:string
}

const PDFViewer: React.FC<path_props> = ({ path }) => {
 return (
    <div>
        <a href={path} target="_blank" title="Read PDF">View diploma</a>
    </div>
 );
};
export default PDFViewer;
