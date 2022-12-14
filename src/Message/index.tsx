import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import './styles.scss'

export default () => {
  const { width, height } = useWindowSize();
  const [base64To, base64From] = location.hash.slice(1).split(';');
  const to = window.atob(base64To).trim();
  const from = window.atob(base64From).trim();

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