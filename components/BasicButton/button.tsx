import styles from './Button.module.css';

interface ButtonProps {
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
  return (
    <div className={styles.buttonDiv}>
      <button
        className={styles.button}
        style={{ '--color': 'red', '--slant': '30px', '--border': '2px' }}
      >
        {/* How to insert this? */}
        {name}
      </button>
      {/* <label for={"change Page"}></label> */}
    </div>
  );
};

export default Button;
