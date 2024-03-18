import React from 'react';
const Tostadita = ({ t }) => {
  return (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } bg-black flex`}
      style={{
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        padding: '5px 10px',
        borderRadius: '15px',
        backgroundColor: 'black',
      }}
    >
      <img
        style={{ width: '50px', height: '50px', borderRadius: '5px' }}
        className="h-4 w-4 rounded-full"
        src="https://ep01.epimg.net/verne/imagenes/2019/05/17/articulo/1558087739_432602_1558090587_sumario_normal.jpg"
        alt=""
      />
      <p
        className="text-sm  text-white"
        style={{ marginBottom: 0, marginLeft: 5 }}
      >
        No vocales!
      </p>
    </div>
  );
};

export default Tostadita;