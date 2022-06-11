<?php

/**
 * @file
 * Theme and preprocess functions for pages.
 */

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function d8base_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  if (($node = \Drupal::routeMatch()->getParameter('node')) && is_object($node)) {
    array_splice($suggestions, 1, 0, 'page__node__' . $node->getType());
  }
}

function d8base_preprocess_page(&$variables) {
  $variables['copyright'] = theme_get_setting('copyright');
}
