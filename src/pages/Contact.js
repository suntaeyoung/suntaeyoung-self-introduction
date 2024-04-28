const Contact = () => {
  return (
    <div className="contactPage">
      <div className="contactTitle">My Contacts</div>

      <div className="contactInner">
        <div className="contactList">
          <span className="material-symbols-outlined">phone_iphone</span>
          <div className="contactItem">010-2708-8706</div>
        </div>

        <div className="contactList">
          <span className="material-symbols-outlined">mail</span>
          <div className="contactItem">sty8706@naver.com</div>
        </div>

        <div className="contactList">
          <a href="https://github.com/suntaeyoung" target="_blank" rel="noopener noreferrer">
            <img src="/images/skillLogo/github.png" alt='github모양 사진' />
            <div className="contactItem">Github</div>
          </a>
        </div>

      </div>
    </div>
  )
}
export default Contact;