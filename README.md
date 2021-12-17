
<br />
<p align="center">

  <h3 align="center">SaveO</h3>

  <p align="center">
    Personal budget management system created by:
    <br />
    ·
    <a href="https://github.com/Mat-Poreda"><strong>Mateusz Poreda</strong></a>
    ·
  </p>
  
  
  Promotional Video
  ===========================
  
  Watch our promotional video:
  
  [![Promo video](src/assets/img/promo_vid.png)](https://app.animaker.com/video/G9ZJHDG652J17TK8)
  
  Project Architecture
  ===========================
  
  The project architecture is still evolving. Presented use case is just a first step in development
  
  <img alt="use case" src="src/assets/img/SaveO_UseCase.svg">
  
  Database MySQL Set-up
  ===========================
  ```
  create database SaveO;

  use SaveO;

  CREATE USER 'SaveO'@'localhost' IDENTIFIED BY 'SaveORandomPassw@ord';

  GRANT ALL PRIVILEGES ON \*.\* TO 'SaveO'@'localhost';

  FLUSH PRIVILEGES;
  ```
  Back End
  ===========================
  
  The back end part can be found in the following repo: https://github.com/Mat-Poreda/SaveO_Personal_Budget_Management_System_Backend
  
  
  Look and Feel
  ===========================
  
  UI overview:
  
  <img alt="slideshow" src="src/assets/img/slides.gif">
  
  Additional features
  ===========================
  
  Saveo uses Auth0 authorisation and authentication service.
  
  You can select your profile picture by clicking on the default image.
  
  Contributing
  ===========================
  
  Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are 
  **greatly appreciated**.

  1. Fork the Project
  2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
  3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
  4. Push to the Branch (`git push origin feature/AmazingFeature`)
  5. Open a Pull Request


  License
  ===========================

  Distributed under the MIT License. See `LICENSE` for more information


  Thank you!
  ===========================
  
  P.S. Try a route that doesn't exist, its fun to explore...
  

