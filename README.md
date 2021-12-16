<img alt="project logo" src="https://github.com/EN-IH-WDPT-JUN21/tEapot-Cinebase-movies-app-backend/blob/main/logo-20.png" style = "max-width: 80px;">

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
  
  
  Project Requirements
  ===========================
  
  The project will have at least these sections:
  - A section to search movies (the search should be case insensitive)
  - A movie detail
  - Login/Register section (only registered users can create playlists)
  - User profile page (if logged)
  - User playlist section (if logged)
  
  Project Architecture
  ===========================
  
  The project architecture is still evolving. Presented use case is just a first step in development
  
  <img alt="use case" src="https://github.com/EN-IH-WDPT-JUN21/tEapot-Cinebase-movies-app-backend/blob/main/structure-Page-2.png">
  
  Database MySQL Set-up
  ===========================
  
  create database SaveO;

  use SaveO;

  CREATE USER 'SaveO'@'localhost' IDENTIFIED BY 'SaveORandomPassw@ord';

  GRANT ALL PRIVILEGES ON \*.\* TO 'SaveO'@'localhost';

  FLUSH PRIVILEGES;
  
  Back End
  ===========================
  
  The back end part can be found in the following repo: https://github.com/Mat-Poreda/SaveO_Personal_Budget_Management_System_Backend
  
  
  Look and Feel
  ===========================
  
  Bespoke UI elements:
  
  <img alt="project logo" src="https://github.com/EN-IH-WDPT-JUN21/tEapot-Cinebase-movies-app-backend/blob/main/iterface.png">
  
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
  

