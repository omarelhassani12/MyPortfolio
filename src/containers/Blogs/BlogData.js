  export const blogs = [
    {
      title: "Understanding Laravel Sanctum Api Auth",
      summary: "provides a comprehensive guide on implementing API authentication using Laravel Sanctum.",
      date: "2023-04-15",
      langaugs:["PHP"],
      Frameworks:["Laravel"],
      url: "https://github.com/omarelhassani12/laravel_sanctum_api_auth_search/blob/main/README.md"
    },
    {
      title: "Node.js MySQL Login System",
      summary: "Learn how to create a secure login system using Node.js and MySQL database.",
      date: "2023-05-20",
      langaugs:["Node.js", "SQL"],
      Frameworks:[],
      url: "https://github.com/omarelhassani12/node_mysql_login"
    },
    {
      title: "Node.js Sessions",
      summary: "Learn how to implement sessions in a Node.js application for managing user authentication and state.",
      date: "2023-05-20",
      langaugs:["Node.js"],
      Frameworks:["Express.js"],
      url: "https://github.com/omarelhassani12/nodejs_sessions"
    },
    {
      title: "Building a Starter Express API",
      summary: "Explore the process of creating a starter template for building APIs with Express.js, featuring common middleware and configurations.",
      date: "2023-06-05",
      langaugs:["Node.js"],
      Frameworks:["Express.js"],
      url: "https://github.com/omarelhassani12/starter-express-api"
    },
    {
      title: "Node.js MySQL Cloudinary Multer",
      summary: "Discover how to integrate Cloudinary and Multer with a Node.js and MySQL backend for efficient file uploads.",
      date: "2023-06-10",
      langaugs:["Node.js", "SQL"],
      Frameworks:[],
      url: "https://github.com/omarelhassani12/nodejs-mysql-cloudinary-multer"
    },
    {
      title: "Generating PDFs with Node.js",
      summary: "Learn how to generate PDF documents dynamically using Node.js with libraries like Puppeteer and PDFKit.",
      date: "2023-08-20",
      langaugs:["Node.js"],
      Frameworks:[],
      url: "https://github.com/omarelhassani12/nodejs-pdf"
    },
    {
      title: "Implementing Biometric Authentication in Flutter with Fingerprint Lock",
      summary: "Discover how to implement biometric authentication in Flutter mobile applications using the Fingerprint Lock project as an example. This project demonstrates the use of the local_auth package to interact with the device's fingerprint capabilities.",
      date: "2023-11-05",
      langaugs:["Dart"],
      Frameworks:["Flutter"],
      url: "https://github.com/omarelhassani12/Fingerprint_lock"
    },
  ].sort((a, b) => new Date(b.date) - new Date(a.date));