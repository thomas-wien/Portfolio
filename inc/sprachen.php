<?php 
class Sprache {
    private $languages = ['en', 'es', 'de'];
    private $language;

    /**
     * Constructor for the class.
     *
     * Sets the language of the object based on the value of the 'language' parameter in the $_REQUEST superglobal.
     * If the 'language' parameter is not set or is not in the list of supported languages, the language is set
     * based on the first two characters of the 'HTTP_ACCEPT_LANGUAGE' server variable.
     *
     * @throws None
     * @return void
     */
    public function __construct() {
        if (isset($_REQUEST['language']) && in_array($_REQUEST['language'], $this->languages)) {
            $this->language = $_REQUEST['language'];
        } else {
            $this->language = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
            if (!in_array($this->language, $this->languages)) {
                $this->language = 'de'; // Fallback auf Deutsch
            }
        }
    }

    /**
     * Returns the language of the object.
     *
     * @return string The language of the object.
     */
    public function getLanguage() {
        return $this->language;
    }
}

// Use the class to get the language
$language = new Sprache();
$sprache = $language->getLanguage();
?>
