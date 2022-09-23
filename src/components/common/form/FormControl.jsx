import s from './FormControl.module.css';
export const Element =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <Element {...input} {...props} />
        {hasError && <div> {meta.error} </div>}
      </div>
    );
  };
