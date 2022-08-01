import { useParams, useNavigate, Navigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Word from './Word';
import { useState } from 'react';

function Day() {
  const a = useParams();
  const day = a.day;
  const days = useFetch(`http://localhost:3001/days?day=${day}`);
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  let word;
  const [_word, set_Word] = useState(word);
  const [_day, set_Day] = useState(days);
  const navigate = useNavigate();

  function dayDel() {
    if (window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3001/days/${days[0].id}`, {
        method: 'DELETE',
      }).then((res) => {
        set_Day({ id: 0 });
      });
      for (word of words) {
        fetch(`http://localhost:3001/words/${word.id}`, {
          method: 'DELETE',
        }).then((res) => {
          set_Word({ id: 0 });
        });
      }
      alert('삭제가 완료되었습니다.');
      navigate(`/`);
    }
  }

  if (day[0].id === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="day_header">
        Day {day}{' '}
        <button className="btn_del" onClick={dayDel}>
          Day 삭제
        </button>
      </h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Day;
