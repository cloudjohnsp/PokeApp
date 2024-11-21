import { TailSpin, TailSpinProps } from 'react-loader-spinner';

const TailSpinner = ({
  width,
  height,
  color,
  ariaLabel,
  radius,
  wrapperClass,
  wrapperStyle,
}: TailSpinProps) => {
  return (
    <TailSpin
      height={height ?? '80'}
      width={width ?? '80'}
      color={color ?? '#c1121f'}
      ariaLabel={ariaLabel ?? 'tail-spin-loading'}
      radius={radius ?? '1'}
      wrapperStyle={wrapperStyle ?? undefined}
      wrapperClass={wrapperClass ?? ''}
    />
  );
};

export default TailSpinner;
