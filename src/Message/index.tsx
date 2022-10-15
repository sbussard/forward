import { useParams } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import './styles.scss'

export default () => {
  const { base64To, base64From } = useParams<{ base64To: string, base64From: string }>();
  const { width, height } = useWindowSize();

  const to = atob(base64To!);
  const from = atob(base64From!);

  return (
    <div className="Message">
      <Confetti
        className='Message-confetti'
        width={width}
        height={height}
        initialVelocityY={100}
        initialVelocityX={2}

      />
      <div className='Message-content'>
        Happy Birthday {to}!
      </div>
      <div className='Message-from'>
        — {from}
      </div>
    </div>
  )
}