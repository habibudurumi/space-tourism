/** @format */

const Title = ({ title, number }) => {
  return (
    <div className=' title'>
      <h5 className='mr-3 text-white opacity-60'>{number}</h5>
      <p className='text-white'>{title}</p>
    </div>
  );
};

export default Title;
