<?php

/**
 * @file
 * Theme and preprocess functions for forms.
 */

use Drupal\Core\Form\FormStateInterface;

/**
* Implements hook_form_alter()
*/
function d8base_form_alter(&$form, FormStateInterface $form_state, $form_id) {
  if ('search_block_form' == $form_id) {
    static $search_block_form_counter = 1;
    $form['keys']['#attributes']['placeholder'][] = t('Search');
    if ($search_block_form_counter == 1) {
      $form['keys']['#attributes']['accesskey'][] = 4;
    }
    $search_block_form_counter++;
  }
}
