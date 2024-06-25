<?php require_once('inc/sprachen.php'); ?>
<?php 
//	define("DOMAIN","http://thomas.ariadne.at/");
	
if ($sprache == "en") { 
	setlocale(LC_ALL,"en_GB.UTF8");
	setlocale(LC_TIME, 'en');
  define("TN","thomas netusil");
  define("LENGUAGE_MENU","<img src='images/assets/english.svg.png' style='height:10px;' alt='en' /> English");
  define("META_DESCRIPTION","The Projects and Vita of Thomas Netusi");
  define("META_TITLE","Portfolio Thomas Netusil");
	define("FULLSTACK","fullstack web developer");
  define("PROJECTS","my codereview projects for the fullstack web development course at codefactory, vienna");
  define("OPEN_EXTERNAL","click a button to open the page external");
  define("GITHUB_FOOTER_EXTERNAL","in the footer of each page there is a link to the github sources of the project");
  define("CERTIFICATES"," certifications and certificates of service (selection)");
  define("SKILLS", "my skills (social and professional)");
  define("CONTACT","for more information, please do not hesitate to contact me");
  define("NAME", "name");
  define("EMAIL", "email");
  define("MESSAGE", "message"); 
  define("SELF_COPY", "Send a copy to myself");
  define("SUBMIT", "send");
  define("FOOTER", "this page is created using HTML5 / PHP / SCSS / Bootstrap / TypeScript / JSON /");	
} elseif ($sprache == "es") { 
	setlocale(LC_ALL,"es_ES.UTF8");
	setlocale(LC_TIME, 'spanish');
  define("TN","thomas netusil");
  define("LENGUAGE_MENU","<img src='images/assets/spanisch.svg.png' style='height:10px;' alt='es' /> español");
  define("META_DESCRIPTION","Los proyectos y Vita de Thomas Netusil");
  define("META_TITLE","Portafolio Thomas Netusil");
	define("FULLSTACK","desarrollador web full stack");
  define("PROJECTS","mis proyectos de revisión de código para el curso de desarrollo web fullstack en CodeFactory, viena");
  define("OPEN_EXTERNAL","Haga clic en un botón para abrir la página en una nueva ventana");
  define("GITHUB_FOOTER_EXTERNAL","en el pie de cada página hay un enlace al repositorio de github del proyecto");
  define("CERTIFICATES","Certificados y testimonios (selección)");
  define("SKILLS", "mis habilidades (Profesional y social)");
  define("CONTACT","Para más información, no dude en contactarme");
  define("NAME", "nombre");
  define("EMAIL", "email");
  define("MESSAGE", "mensaje");
  define("SELF_COPY", "Enviar una copia a mi");
  define("SUBMIT", "enviar");
  define("FOOTER", "esta página fue creada usando HTML5 / PHP / SCSS / Bootstrap / TypeScript / JSON /");  
} else { 
	setlocale(LC_ALL,"de_AT.UTF8");
	setlocale(LC_TIME, 'German_Austria');
  define("TN","Thomas Netusil");
  define("LENGUAGE_MENU","<img src='images/assets/deutsch.svg.png' style='height:10px;' alt='dn' /> Deutsch");
  define("META_DESCRIPTION","Die Projekte und Vita von Thomas Netusil");
  define("META_TITLE","Portfolio Thomas Netusil");
	define("FULLSTACK","Fullstack Web Developer");
  define("PROJECTS","Meine Codereview Projekte für den Fullstack Web Developer Kurs bei CodeFactory, Wien");
  define("OPEN_EXTERNAL","Klicken Sie auf einen Button, um die Seite in einem neuen Fenster zu öffnen");
  define("GITHUB_FOOTER_EXTERNAL","im Footer jeder Seite gibt es einen Link zum Github-Quellcode des Projekts");
  define("CERTIFICATES","Zertifikate und Dienstzeugnisse (Auswahl)");
  define("SKILLS", "Meine Skills (Beruflich und Sozial)");
  define("CONTACT","Bitte kontaktieren Sie mich für weitere Informationen");
  define("NAME", "Name");
  define("EMAIL", "Email");
  define("MESSAGE", "Nachricht");
  define("SELF_COPY", "Senden Sie eine Kopie an mich");
  define("SUBMIT", "Senden");
  define("FOOTER", "Diese Seite wurde mit HTML5 / PHP / SCSS / Bootstrap / TypeScript / JSON erstellt");
}
?>