const Education = () => {
  const educationInfo = {
    startDate: "2016.03",
    endDate: "2021.02",
    institution: "연성대학교",
    department: "디지털전자과(3년제)"
  }

  return (
    <div className="item">
      <span className="material-symbols-outlined">school</span>
      <div className="itemTitle">Education</div>
      <div className="schoolDetail">
        <div className="schoolDate">{educationInfo.startDate} ~ {educationInfo.endDate}</div>
        <div className="schoolInfo">
          <div className="schoolList">
            <div>{educationInfo.institution}</div>
            <div className="schoolDescription">{educationInfo.department}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Education;