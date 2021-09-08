import React from "react";

export default function UseCourseCard(){
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return[handleExpandClick,expanded, setExpanded]
}