<?php
/**
 * Plugin Name: Simple Contact Form Popup
 * Plugin URI: 
 * Description: A brief description of the Plugin.
 * Version: 0.1
 * Author: Stefan Poenaru
 * Author URI: 
 * License: GPL2
 */

function insert_modal() {
    $form = do_shortcode('[contact-form-7 id="12572" title="Presupuesto"]');

    $html = <<<HTML
        <!-- The Modal -->
        <div id="presupuesto" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <h3>¡Pide Presupuesto sin Compromiso!</h3>
                $form
            </div>
        </div>
        <!-- END: The Modal -->
    HTML;

    echo $html;
}
add_action('wp_footer', 'insert_modal');

function add_my_css_and_my_js_files(){
    wp_enqueue_script('modal', plugins_url('modal.js', __FILE__), array('jquery'), null, true);
    wp_enqueue_style('modal', plugins_url('modal.css', __FILE__), false, '1.0.0', 'all');
}
add_action('wp_enqueue_scripts', "add_my_css_and_my_js_files");