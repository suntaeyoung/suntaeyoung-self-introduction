const Profile = () => {
  const profileInfo = {
    name: "선태영",
    birthDate: "1997.07.08",
    phone: "010-2708-8706",
    email: "sty8706@naver.com",
    location: "대한민국, 서울 마포구"
  }

  return (
    <div className="item">
      <span className="material-symbols-outlined">account_circle</span>
      <div className="itemTitle">Profile</div>
      <div className="profileInfo">
        <div>이름 : {profileInfo.name}</div>
        <div>생년월일 : {profileInfo.birthDate}</div>
        <div>핸드폰 : {profileInfo.phone}</div>
        <div>이메일 : {profileInfo.email}</div>
        <div>거주지 : {profileInfo.location}</div>
      </div>
    </div>
  )
}
export default Profile;