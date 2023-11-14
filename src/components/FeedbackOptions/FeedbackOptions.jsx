import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttonList}>
      {options.map(option => {
        return (
          <button type="button"  className={css.buttonStyle} onClick={() => onLeaveFeedback(option)} key={option}>
            {option}
          </button>
        );
      })}
    </div>
  );
};
