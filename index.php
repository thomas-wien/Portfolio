<?php require_once 'inc/mail.php' ?>
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
  <meta name="author" content="Thomas Netusil">
  <meta name="description" content="The Projects and Vita of Thomas Netusil">
  <script src="js/darkLight.js" defer></script> <!-- light/Darkmode switch -->
  <script src="dist/bundle.js" defer></script> <!-- Necessary for the Project Cards and Skills -->
  <link href="favicon.ico" rel="icon">
  <title>Portfolio Thomas Netusil</title>
</head>

<body class="container">
  <?php include "inc/menue.php" ?>

  <header>
    <h2 class="text-center titel mt-5 pt-3">thomas netusil</h2>
    <p class="text-center titel mb-4">fullstack web developer</p>
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
 
              <!-- Cards are created in project.ts data is in projects.json -->
            
            </div>
            <iframe src="../BE18-CR5-NetusilThomas/" name="content" width="100%" height="750px" style="box-shadow: 0 15px 35px gray" title="Frontend Webdev Projects"></iframe>
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
            <h3 class="text-center py-5 titel bg-secondary text-light w-100">my certifications and certificates of service (selection)
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
            <!-- the content is created in skills.ts using ID SkillsProgressCircles data is in skills.json -->
            <div id="SkillsProgressCircles" class="row row-cols-1 row-cols-md-2 g-2"></div>
          </div>
        </div>
      </section>

      <!-- Contact Section Starts -->
      <section class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button bg-light text-secondary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                <h3 class="text-center py-5 titel bg-light text-secondary w-100">please contact me for more information<br></h3>
                <?php if (!empty($errors)): ?>
                            <div class="alert alert-danger">
                                <ul>
                                    <?php foreach ($errors as $error): ?>
                                        <li><?php echo htmlspecialchars($error); ?></li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                        <?php elseif (!empty($successMessage)): ?>
                            <div class="alert alert-success">
                                <?php echo htmlspecialchars($successMessage); ?>
                            </div>
                        <?php endif; ?>
            </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse text-secondary collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
            <div class="accordion-body text-secondary">
                <!-- Wrapper container -->
                <div class="container py-4">
                    <!-- Bootstrap 5 starter form -->
                    <form id="contactForm" method="POST" action="">
                      <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">
                      <input type="hidden" id="formStatus" value="<?php echo htmlspecialchars($formStatus); ?>">

                        <!-- Name input -->
                        <div class="mb-3">
                            <label class="form-label" for="name">Name</label>
                            <input class="form-control" id="name" name="name" type="text" placeholder="Name" value="<?php echo isset($name) ? htmlspecialchars($name) : ''; ?>" />
                        </div>

                        <!-- Email address input -->
                        <div class="mb-3">
                            <label class="form-label" for="emailAddress">Email Address</label>
                            <input class="form-control" id="emailAddress" name="email" type="email" placeholder="Email Address" value="<?php echo isset($email) ? htmlspecialchars($email) : ''; ?>" />
                        </div>

                        <!-- Message input -->
                        <div class="mb-3">
                            <label class="form-label" for="message">Message</label>
                            <textarea class="form-control" id="message" name="message" placeholder="Message" style="height: 10rem;"><?php echo isset($message) ? htmlspecialchars($message) : ''; ?></textarea>
                        </div>

                        <!-- Copy to self checkbox -->
                        <div class="mb-3 form-check">
                            <input class="form-check-input" type="checkbox" id="copyToSelf" name="copyToSelf" <?php echo isset($copyToSelf) && $copyToSelf ? 'checked' : ''; ?>>
                            <label class="form-check-label" for="copyToSelf">Send a copy to myself</label>
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
</body>

</html>
