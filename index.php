<?php require_once 'mail.php' ?>
<!DOCTYPE html>
<html lang="en" data-bs-theme="auto">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- inculding Bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous" defer></script>
  <!-- end inculding Bootstrap -->
  <link rel="stylesheet" type="text/css" href="css/styles.css">
  <link rel="stylesheet" type="text/css" href="css/bootstrap.css"> <!-- Necessary for dark/light mode -->
  <meta name="author" content="Thomas Netusil">
  <meta name="description" content="The Projects and Vita of Thomas Netusil">
  <script src="js/darkLight.js" defer></script> <!-- light/Darkmode switch -->
  <script src="js/projects.js" defer></script> <!-- Necessary for the Project Cards -->
  <script src="js/skills.js" defer></script> <!-- Necessary for the Skills -->
  <link href="favicon.ico" rel="icon">
  <title>Portfolio Thomas Netusil</title>
</head>

<body class="container">
  <?php include "menue.php" ?>

  <header>
    <h3 class="text-center py-5 titel"><br>business card thomas netusil (to be continued)</h3>
  </header>

  <main>
    <div class="accordion" id="accordion">

      <!-- Project Cards start-->

      <section class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button bg-light text-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            <h3 class="text-center py-5 titel bg-light text-secondary">
              my codereview projects for the fullstack web development course at codefactory, vienna
            </h3>
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse text-secondary py-3" aria-labelledby="headingOne" data-bs-parent="#accordion">
          <!-- remove show to switch of default opening of accordeon -->
          <div class="accordion-body">
            <div id="ProjectCards" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5 pb-5">

              <!-- Cards are created in project.ts -->

            </div>
            <iframe src="../BE18-CR4-NetusilThomas/" name="content" width="100%" height="750px" style="box-shadow: 0 15px 35px gray" title="Frontend Webdev Projects"></iframe>
            <h3 class="text-center pt-5 titel">click a button to open the page external</h3>
            <p class="titel">in the footer of each page there is a link to the github sources of the project</p>
            <h3 id="ProjectButtons" class="text-center py-5 titel">

              <!-- Buttons are created in project.ts -->

            </h3>
          </div>
        </div>
      </section>

      <!-- CV and Certificates start here -->

      <section class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button bg-secondary text-light collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <h3 class="text-center py-5 titel bg-secondary text-light w-100">my certifications and certificates of
              service (selection)
              <br>
            </h3>
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse  text-light collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
          <!-- The Certifications and Letters of recomendations are included as PDF Files-->
          <div class="accordion-body text-light">
            <div class="row row-cols-1 row-cols-md-2 g-2">
              <iframe src="./images/Zertifikate_ThomasNetusil.pdf#toolbar=0" name="content" width="45%" height="800px" style="box-shadow: 0 15px 35px gray" title="Certificates"></iframe>
              <iframe src="./images/Zeugnisse_ThomasNetusil.pdf#toolbar=0" name="content" width="45%" height="800px" style="box-shadow: 0 15px 35px gray" title="certificates of service"></iframe>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills start here -->

      <section class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button bg-dark text-success collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <h3 class="text-center py-5 titel bg-dark text-success w-100">my skills (social and
              professional)
            </h3>
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
          <div class="accordion-body text-success bg-dark ITtext">
            <!-- the content is created in skills.ts using ID SkillsProgressCircles-->
            <div id="SkillsProgressCircles" class="row row-cols-1 row-cols-md-2 g-2"></div>
          </div>
        </div>
      </section>

      <!-- Contact Section Starts-->

      <section class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button bg-light text-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            <h3 class="text-center py-5 titel bg-light text-secondary w-100">please contact me for more information
              <br>
            </h3>
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse text-secondary collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
          <div class="accordion-body text-secondary">
            <!-- Wrapper container -->
            <div class="container py-4">

              <!-- Bootstrap 5 starter form -->
              <form id="contactForm" method="POST" action="">

                <!-- Name input -->
                <div class="mb-3">
                  <label class="form-label" for="name">Name</label>
                  <input class="form-control" id="name" name="name" type="text" placeholder="Name" />
                </div>

                <!-- Email address input -->
                <div class="mb-3">
                  <label class="form-label" for="emailAddress">Email Address</label>
                  <input class="form-control" id="emailAddress" name="email" type="email" placeholder="Email Address" />
                </div>

                <!-- Message input -->
                <div class="mb-3">
                  <label class="form-label" for="message">Message</label>
                  <textarea class="form-control" id="message" name="message" type="text" placeholder="Message" style="height: 10rem;"></textarea>
                </div>

                <!-- Form submit button -->
                <div class="d-grid">
                  <button class="btn btn-outline-dark text-secondary btn-lg" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>

  <footer>
    <h5 class="text-center pt-5 titel">this page is created using HTML5 / PHP / SCSS / TypeScript / JSON / <a href="https://github.com/thomas-wien/Portfolio.git" target="_blank" rel="noopener noreferrer">see github</a>
    </h5>
  </footer>

</body>

</html>