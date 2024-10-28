import { TailSpin } from 'react-loader-spinner';

const TailSpinner = () => {
  const spinnerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '120px',
  };
  return (
    <TailSpin
      height='80'
      width='80'
      color='#c1121f'
      ariaLabel='tail-spin-loading'
      radius='1'
      wrapperStyle={spinnerStyle}
      wrapperClass=''
    />
  );
};

export default TailSpinner;
