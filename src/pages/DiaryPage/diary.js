function Diary() {
  return (
    <div className='diary-page-segment'>
      <div className='left'>
        <TodayQuestionPage />
      </div>
      {/* 추후에 설정 변경 */}
      {/* <div class='vr-center'></div>  */}
      <div className='right'>
        <DiaryPage />
      </div>
    </div>
  );
};
  
  export default Diary;