import { useEffect, useState } from "react";

const Home = () => {
  const [level, setLevel] = useState(0);
  const [visible, setVisible] = useState(false);
  const [expWidth, setExpWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (level < 99) {
        setLevel(prevLevel => prevLevel + 1);
        if (level % 20 === 0) {
          setVisible(prevVisible => !prevVisible);
        }
      } else if (level === 99) {
        setVisible(false);
      }
    }, 10); 

    const maxWidth = 300; // exp의 최대 너비
    const targetWidth = (level / 99) * maxWidth; // 레벨에 따른 너비 계산
    setExpWidth(targetWidth);

    return () => clearTimeout(timeout); // 컴포넌트가 언마운트될 때 timeout 제거
  }, [level]); // level이 변경될 때마다 실행

  return (
    <div className="homePage">
      <div className="homeInner">
        <div className="title">Doing Level Up!!!</div>
        <img src="/images/self/suntaeyoung.png" alt='내 사진' />
        <div className="levelContainer">
          <div className={`up ${visible ? 'visible' : 'hidden'}`}>Level Up!!!</div>
          <div className={level >= 99 ? "maxLevel levelText" : "levelUp levelText"}>Lv. {level}</div>
          <div className="expBox">
            <div className="exp" style={{ width: `${expWidth}px` }}>EXP</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
