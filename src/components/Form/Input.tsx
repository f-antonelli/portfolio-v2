import { ErrorMessage, useField } from "formik";

import styles from "./form.module.scss";

interface Props {
  label: string;
  name: string;
  type?: "text" | "textarea" | "email";
  placeholder?: string;
  [x: string]: any;
}

const Input = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div className={styles.boxInput}>
      <label htmlFor={props.id || props.name}>{label}</label>
      {props.type === "textarea" ? (
        <textarea className={styles.textarea} {...field} {...props} />
      ) : (
        <input className={styles.input} {...field} {...props} />
      )}
      <ErrorMessage
        className={styles.error}
        component="span"
        name={props.name}
      />
    </div>
  );
};

export default Input;
