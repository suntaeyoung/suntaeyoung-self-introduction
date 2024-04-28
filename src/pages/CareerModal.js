const CareerModal = (props) => {
  return (
    <div className="careerModal">
      <div className="careerModalContent">
        <span className="material-symbols-outlined">work</span>
        <div className="itemTitle">Career</div>
      </div>
      <button className="modalClose" onClick={() => props.setCareerModal(false)}>Close</button>

      <div className="careerInfo">
        <div className="careerList">
          <div>(주)스탠다드랩스</div>
          <div className="careerDescription">-비개발 업종</div>
          <div>2021.07 ~ 2023.12</div>
        </div>
      </div>
    </div>
  )
}
export default CareerModal;