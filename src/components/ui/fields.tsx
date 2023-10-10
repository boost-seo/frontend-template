type textFieldProps = React.InputHTMLAttributes<HTMLDivElement>;

const formClasses =
  'focus:border-purple pl-14.5 w-full rounded-lg border border-white/[0.12] bg-transparent py-3.5 pr-4 font-medium outline-none focus-visible:shadow-none';

export function TextField({
  id,
  type = 'text',
  className = '',
  ...props
}: textFieldProps) {
  return (
    <div className={className}>
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
}

const checkboxClasses =
  'text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600';

export function CheckboxField({
  id,
  type = 'checkbox',
  className = '',
  ...props
}: textFieldProps) {
  return (
    <div className={className}>
      <input id={id} type={type} {...props} className={checkboxClasses} />
    </div>
  );
}
