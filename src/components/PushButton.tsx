import styles from '@/styles/components/PushButton.module.css';

type PushButtonProps = {
	variant: 'primary' | 'secondary';
  size: 'sm' | 'lg';
  onClick?: Function;
	text: string;
};

const PushButton: React.FC<PushButtonProps> = ({variant, size, onClick, text}) => {
  const primarySmall = [styles.outer, styles.top_primary, styles.text, styles.bottom_primary]
  const primaryLarge = [styles.outer_lg, styles.top_primary_lg, styles.text_lg, styles.bottom_primary_lg]
  const secondarySmall = [styles.outer, styles.top_secondary, styles.text, styles.bottom_secondary]
  const secondaryLarge = [styles.outer_lg, styles.top_secondary_lg, styles.text_lg, styles.bottom_secondary_lg]
  const styleArray = 
    variant == 'primary' && size == 'sm' ? primarySmall :
    variant == 'primary' && size == 'lg' ? primaryLarge :
    variant == 'secondary' && size == 'sm' ? secondarySmall :
    variant == 'secondary' && size == 'lg' ? secondaryLarge :
    primarySmall

  return (
    <div className={styleArray[0]}>
      <a onClick={() => onClick && onClick()} className={styleArray[1]}>
          <p className={styleArray[2]}>{text}</p>
      </a>
      <div className={styleArray[3]}></div>
    </div>
  )
};

export default PushButton;