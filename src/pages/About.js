import Profile from "../aboutDetail/Profile";
import Career from "../aboutDetail/Career";
import Skills from "../aboutDetail/Skills";
import Education from "../aboutDetail/Education";
import Certificate from "../aboutDetail/Certificate";

const About = () => {
  return (
    <div className="aboutPage">

      <div className="aboutInner">

        <div className="simpleIntroduction">
          - 안녕하세요! 꾸준히 성장하며 새로운 배움에 거부감 없는 신입 프론트엔드 개발자 선태영입니다.
          <br />- 새로운 기술에 대한 탐구와 익힘을 즐기며, 항상 더 나은 코드를 작성하고자 생각하고 노력합니다. 
          <br />- 함께 성장하고 발전하는 기회가 주어진다면, 저의 능력을 최대한 발휘하여 좋은 결과를 이끌어 내겠습니다.
          <br />- 열정과 열성으로 프로젝트에 기여할 것을 약속드립니다. 감사합니다!
        </div>

        <div className="aboutItems">
          <Profile />
          <Career />
          <Skills />
          <Education />
          <Certificate />
        </div>
      </div>
    </div>
  )
}
export default About;