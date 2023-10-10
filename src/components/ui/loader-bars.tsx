interface ILoaderCircle {
  /**
   * Length of the animation in seconds
   */
  length: number;
  color?: 'gray' | 'red' | 'purple' | 'green';
  children?: React.ReactNode;
}

export const LoaderCircle = ({
  length,
  color = 'purple',
  children,
}: ILoaderCircle) => {
  return (
    <div>
      <svg
        style={{
          width: '100%',
          height: '100%',
        }}
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          style={{
            fill: 'none',
            strokeWidth: 10,
            stroke: '#f4f4f4',
          }}
          cx='50'
          cy='50'
          r='45'
        />
        <circle
          style={{
            fill: 'none',
            strokeWidth: 10,
            stroke: 'rgb(168 85 247)',
            strokeLinecap: 'round',
            strokeDasharray: '283',
            strokeDashoffset: '283',
            animation: `drawCircle ${length}s linear forwards`,
          }}
          className={`stroke-${color}-300/75`}
          cx='50'
          cy='50'
          r='45'
        />
        {children}
      </svg>
    </div>
  );
};
