const Certificate = () => {
  const certificateInfo = {
    date: "2018.06",
    name: "정보처리기능사",
    authority: "한국산업인력공단"
  };

  return (
    <div className="item">
      <span className="material-symbols-outlined">badge</span>
      <div className="itemTitle">Certificate</div>
      <div className="badgeDetail">
        <div className="badgeDate">{certificateInfo.date}</div>
        <div className="badgeInfo">
          <div className="badgeList">
            <div>{certificateInfo.name}</div>
            <div className="badgeDescription">{certificateInfo.authority}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certificate;