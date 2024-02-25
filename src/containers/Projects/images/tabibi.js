// import img1 from '../../../assets/projects/Tabibi/Logo TABIBI.png';
// import img2 from '../../../assets/projects/Tabibi/conversation-pt.png';
// import img3 from '../../../assets/projects/Tabibi/conversation.png';
// import img4 from '../../../assets/projects/Tabibi/detail_sous_urgance-pt.png';
// import img5 from '../../../assets/projects/Tabibi/favorite-pt.png';
// import img6 from '../../../assets/projects/Tabibi/home-pt.png';


// const images = [
//   { image: TabibiImg },
//   {  image: AppointifyImg },
//   { image: BrainWaveImg },
// ];


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  const images = importAll(require.context('../../../assets/projects/Tabibi', false, /\.(png|jpe?g|svg)$/));
  
export default images;
  

