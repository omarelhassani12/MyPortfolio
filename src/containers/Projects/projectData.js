import NoImg from '../../assets/projects/no-img.jpg';

import TabibiImg from '../../assets/projects/Tabibi/Cover-Tabibi.png';
import AppointifyImg from '../../assets/projects/Appointify/1Appointify.png';
import BarinWaveImg from '../../assets/projects/BrainWave.png';
import AbsenceImg from '../../assets/projects/absence.png';
import MedicalImg from '../../assets/projects/medicalapp.png';
import ScentitImg from '../../assets/projects/Scentit/Candle.png';
import TabibiWebImg from '../../assets/projects/TabibiWeb/login.png';


//including all image for each one
import TabibiImages from './images/tabibi';
import AbsenceImages from './images/absence';
import MedicalImages from './images/medical';
import AppointifyImages from './images/appointify';
import ScentitImages from './images/scentit';
import TabibiWebImages from './images/tabibiWeb';

export const allProjects = [
  { 
    id: 0, 
    title: 'Tabibi',
    category: 'Mobile',
    image: TabibiImg,
    url:'https://youtu.be/9ya1XUMEOTs',
    githubUrl: 'https://github.com/omarelhassani12/Tabibi',
    images: Object.values(TabibiImages),
    tools:[
        'Flutter/Dart',
        'NodeJs',
        'Html',
        'Css',
        'Js',
        'Socket.io',
        'Cloudinary',   
        'MySQL',  
        <div></div>,
        'UML',
        'Figma',
        'Postman',
        'Adobe illistrator',
    ],
    description: [
        <span><b>Healthcare App Development:</b> Tabibi is a mobile application designed to provide convenient access to healthcare services. Users can view their urgency case, consult with doctors remotely, and access their medical records securely through the app.</span>,
        <span><b>Cross-Platform Compatibility:</b> Built using Flutter and Dart, Tabibi ensures a seamless user experience across different platforms, including iOS and Android devices. This allows users to access the app on their preferred devices without compromising functionality or performance.</span>,
        <span><b>Backend Infrastructure:</b> Leveraging NodeJs and MySQL, Tabibi's backend infrastructure ensures robust data management and secure communication between users and healthcare providers. Socket.io is utilized for real-time messaging and notifications, enhancing the overall user experience.</span>,
        <span><b>User-Friendly Interface:</b> With a modern and intuitive design, Tabibi offers an easy-to-navigate interface for users of all ages. Html and Css are employed to create visually appealing layouts, while Js adds interactivity and responsiveness to the app's frontend components.</span>,
        <span><b>Cloud Integration:</b> Integration with Cloudinary enables efficient storage and management of multimedia content within the app. Images and other media uploaded by users or healthcare providers are securely stored in the cloud, ensuring accessibility and scalability.</span>,
        <span><b>Continuous Improvement:</b> Tabibi is continuously evolving to meet the changing needs of its users and the healthcare industry. Regular updates and enhancements, driven by user feedback and technological advancements, ensure that Tabibi remains a reliable and innovative solution for healthcare management.</span>,
    ]  
  },
  { 
    id: 1, 
    title: 'Absence Management System', 
    category: 'Web', 
    image: AbsenceImg,
    githubUrl: 'https://github.com/omarelhassani12/gestion_d_absence',
    images: Object.values(AbsenceImages),

    tools:[
        'NodeJs',
        'Html',
        'Css',
        'Js',
        'MySQL',  
    ],
    description: [
        <span><b>Absence Management System for Interns:</b> The Absence Management System is a web application specifically designed to manage the absence of interns at the OFPPT center. It simplifies the process of tracking intern leave requests, managing absence records, and generating reports for analysis.</span>,
        <span><b>Cross-Platform Compatibility:</b> Built using modern web technologies including NodeJs, Html, Css, and Js, the Absence Management System ensures compatibility across different devices and platforms, allowing interns and administrators to access the system from desktops, laptops, and mobile devices.</span>,
        <span><b>Backend Infrastructure:</b> Leveraging NodeJs and MySQL, the backend infrastructure of the Absence Management System ensures efficient data storage, retrieval, and management. It facilitates secure communication between interns and administrators, ensuring data integrity and confidentiality.</span>,
        <span><b>User-Friendly Interface:</b> With a user-friendly interface, the Absence Management System offers intuitive navigation and easy access to features for both interns and administrators. Html and Css are used to design visually appealing layouts, enhancing the user experience.</span>,
        <span><b>Customization and Scalability:</b> The Absence Management System is highly customizable and scalable, allowing the OFPPT center to tailor the system according to its specific requirements for managing intern attendance. It supports the addition of new features and functionalities as the center's needs evolve.</span>,
        <span><b>Continuous Improvement:</b> The Absence Management System is continuously updated and improved to incorporate user feedback and technological advancements. Regular updates ensure that the system remains efficient, reliable, and up-to-date with the requirements of the OFPPT center and the internship program.</span>,
    ]      
  },
  { 
    id: 2, 
    title: 'Medical Cabinet System', 
    category: 'Web', 
    image: MedicalImg,
    githubUrl: 'https://github.com/omarelhassani12/Medical_Web_site',
    images: Object.values(MedicalImages),
    tools:[
      'Node.js',
      'Html',
      'Css',
      'Js',
      'MySQL',  
      'Ajax.js',  
  ],
  },
  { 
    id: 3, 
    title: 'Appointify', 
    category: 'Mobile', 
    image: AppointifyImg,
    githubUrl: 'https://github.com/omarelhassani12/Appointify',
    images: Object.values(AppointifyImages),
    tools:[
      'Flutter/Dart',
      'Figma',
      'Maps',
    ],
    description: [
      <span><b>Appointment Management Application:</b> Appointify is a versatile mobile application designed to simplify the process of managing appointments for businesses and clients. It offers comprehensive features for scheduling, tracking, and communicating appointments, enhancing productivity and client satisfaction.</span>,
      <span><b>Seamless Multi-Platform Experience:</b> Developed using Flutter and Dart, Appointify ensures a seamless user experience across various platforms, including iOS and Android devices. This cross-platform compatibility allows users to access the app from their preferred devices, ensuring convenience and accessibility.</span>,
      // <span><b>Robust Backend Infrastructure:</b> Powered by Node.js and MySQL, Appointify's backend system efficiently manages data and facilitates secure communication between businesses and clients. Real-time updates and notifications are supported, enabling timely interactions and smooth appointment management.</span>,
      <span><b>Intuitive User Interface:</b> Appointify delivers an intuitive and user-friendly interface, ensuring easy navigation and accessibility for users of all levels. Leveraging Flutter and Dart widgets, the app's frontend is designed to create visually appealing and interactive elements, providing a delightful user experience.</span>,
      // <span><b>Cloud Integration:</b> Integration with cloud services such as Cloudinary enables efficient storage and management of multimedia content within the app. This ensures scalability and accessibility of data, enhancing the overall functionality of the app.</span>,
      <span><b>Continuous Improvement:</b> Appointify is committed to continuous enhancement through regular updates and user feedback. By staying updated with technological advancements and user needs, Appointify aims to remain a reliable and innovative solution for appointment management.</span>,
    ],  
  },
  { 
    id: 4, 
    title: 'Saska', 
    category: 'Design', 
    image: NoImg,
    githubUrl: '#'
  },
  { 
    id: 5, 
    title: 'Stock Management System', 
    category: 'Web', 
    image: NoImg,
    githubUrl: 'https://github.com/omarelhassani12/Management-stock',
    images: null,
    tools:[
      'HTML',
      'CSS',
      'JS',
      'PHP',
      'MySQL',
      'FPDF',
    ],
  },
  { 
    id: 6, 
    title: 'Scentit', 
    category: 'Web', 
    image: ScentitImg,
    githubUrl: 'https://omarelhassani12.github.io/Scentit/',
    images: Object.values(ScentitImages),
    tools:[
      'HTML',
      'CSS',
      'JS',
      'Figma',
    ],
    description: [
      <span><b>Candle Store Website:</b> Scentit is a versatile website designed to offer a delightful candle shopping experience. It provides comprehensive features for browsing, purchasing, and exploring various candle products, enhancing customer satisfaction and engagement.</span>,
      <span><b>Seamless Multi-Platform Experience:</b> Developed using HTML, CSS, and JavaScript, Scentit ensures a seamless user experience across multiple platforms, including desktop and mobile devices. This cross-platform compatibility allows users to access the website from their preferred devices, ensuring convenience and accessibility.</span>,
      <span><b>Intuitive User Interface:</b> Scentit delivers an intuitive and user-friendly interface, ensuring easy navigation and accessibility for users of all levels. The frontend is designed with HTML, CSS, and JavaScript to create visually appealing and interactive elements, providing a delightful shopping experience.</span>,
      <span><b>Continuous Improvement:</b> Scentit is dedicated to continuous enhancement through regular updates and user feedback. By staying updated with technological advancements and customer preferences, Scentit aims to remain a reliable and innovative platform for candle enthusiasts.</span>,
    ],
  },
  { 
    id: 7, 
    title: 'Tabibi Web', 
    category: 'Web', 
    image: TabibiWebImg,
    url:'https://youtu.be/9ya1XUMEOTs',
    githubUrl: 'https://github.com/omarelhassani12/Tabibi_panel',
    images: Object.values(TabibiWebImages),
  },
  { 
    id: 8, 
    title: 'Restaurant Reservation', 
    category: 'Design', 
    image: NoImg,
    githubUrl: 'https://github.com/omarelhassani12/restaurant_reservation_flutter_app'
  },
  { 
    id: 9, 
    title: 'BrainWave', 
    category: 'Mobile', 
    image: BarinWaveImg,
    githubUrl: 'https://github.com/omarelhassani12/school_app'
  },
  { 
    id: 10, 
    title: 'AsrooShop', 
    category: 'Mobile', 
    image: NoImg,
    githubUrl: 'https://github.com/omarelhassani12/AsrooShop-using-flutter-and-firebase'
  },
  { 
    id: 11, 
    title: 'Interns Management System', 
    category: 'Web', 
    image: NoImg,
    githubUrl: 'https://github.com/omarelhassani12/Stagiares-management-'
  },
  { 
    id: 12, 
    title: 'Staffs Management System', 
    category: 'Web', 
    image: NoImg,
    githubUrl: 'https://github.com/omarelhassani12/SimpleStaffManagement'
  },
];
