/** @format */

const Container = ({ children, bg }) => {
  return (
    <div className={`min-h-screen bg-${bg} bg-no-repeat bg-cover bg-center`}>
      {children}
    </div>
  );
};

export default Container;
