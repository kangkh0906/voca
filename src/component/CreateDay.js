import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

function CreateDay() {
  const days = useFetch('http://localhost:3001/days');
  const navigate = useNavigate();

  function addDay() {
    const day_list = days.map((day) => day.day);
    if (day_Ref.current.value < 1) {
      alert('Day는 1 이상이어야합니다.');
    } else if (day_list.includes(day_Ref.current.value)) {
      alert('이미 해당 Day가 존재합니다.');
    } else {
      fetch(`http://localhost:3001/days/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: day_Ref.current.value,
        }),
      }).then((res) => {
        if (res.ok) {
          alert('생성이 완료되었습니다.');
          navigate(`/`);
        }
      });
    }
  }

  const day_Ref = useRef(null);

  return (
    <div className="input_area">
      <label>Day</label>
      <input
        className="add_day_input"
        type="text"
        placeholder="ex) 1"
        ref={day_Ref}
      />
      <button className="add_day" onClick={addDay}>
        Day 추가
      </button>
    </div>
  );
}

export default CreateDay;
