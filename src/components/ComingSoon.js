import logo from '@/resources/images/devclub-logo.png';
import '@/styles/ComingSoon.css';

function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <header className="coming-soon-content">
        <img src={logo} className="devclub-logo" alt="logo" />
        <p>
          Coming soon!
        </p>
      </header>
    </div>
  );
}

export default ComingSoon;
