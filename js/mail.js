"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap");
const bootstrap_1 = require("bootstrap");
/**
 * Function to handle form status on page load.
 */
document.addEventListener('DOMContentLoaded', function () {
    // Get the form status element
    const formStatusElement = document.getElementById('formStatus');
    // Get the collapse element
    const collapseFour = document.getElementById('collapseFour');
    // Get the contact form element
    const contactForm = document.getElementById('contactForm');
    // Check if the collapse element and form status element exist
    if (collapseFour && formStatusElement) {
        // Create a new Bootstrap Collapse instance for the collapse element
        const bootstrapCollapse = new bootstrap_1.Collapse(collapseFour, {
            toggle: true
        });
        // Get the form status value
        const formStatus = formStatusElement.value;
        // Check the form status
        if (formStatus === 'error') {
            // Show the accordion section if there was an error
            bootstrapCollapse.show();
        }
        else if (formStatus === 'success') {
            // Hide the accordion section if the form was successfully submitted
            bootstrapCollapse.hide();
            // Reset the contact form
            if (contactForm) {
                contactForm.reset();
            }
        }
    }
});
