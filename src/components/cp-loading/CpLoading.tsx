import style from './cploading.module.scss';


const Loading = () => {
  return (
    <>
      <div className={style["loading"]}></div>
      <div className={style["loading"]}></div>
      <div className={style["loading"]}></div>
    </>
  );
};

export default Loading;
