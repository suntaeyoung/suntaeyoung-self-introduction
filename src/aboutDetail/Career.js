const Career = () => {
  const careerInfo = {
    startDate: "2021.07.12",
    endDate: "2023.12.31",
    company: "(주)스탠다드랩스",
    description: "(비개발 업종)"
  }

  return (
    <div className="item">
      <span className="material-symbols-outlined">work</span>
      <div className="itemTitle">Career</div>
      <div className="careerDetail">
        <div className="workDate">{careerInfo.startDate} ~ {careerInfo.endDate}</div>
        <div className="careerInfo">
          <div className="careerList">
            <div>{careerInfo.company}</div>
            <div className="careerDescription">{careerInfo.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Career;