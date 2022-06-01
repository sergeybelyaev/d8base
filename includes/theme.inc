<?php

/**
 * @file
 * Custom theme hooks.
 */

use Drupal\block\Entity\Block;

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function d8base_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  if (($node = \Drupal::routeMatch()->getParameter('node')) && is_object($node)) {
    array_splice($suggestions, 1, 0, 'page__node__' . $node->getType());
  }
}

function d8base_theme_suggestions_block_alter(array &$suggestions, array $variables) {
  if (isset($variables['elements']['content']['#block_content'])) {
    array_splice($suggestions, 1, 0, 'block__bundle__' . $variables['elements']['content']['#block_content']->bundle());
  }
  // Region suggestion for blocks in Drupal.
  if (isset($variables['elements']['#id'])) {
    if ($block = Block::load($variables["elements"]["#id"])) {
      $region = $block->getRegion();
      // block--REGION_ID.html.twig
      $suggestions[] = 'block__' . $region;
      // block--REGION_ID--CUSTOM_BLOCK_ID.html.twig
      $suggestions[] = 'block__' . $region . '__' . $variables['elements']['#base_plugin_id'];
      // block--REGION_ID--MY_BLOCK_ID.html.twig
      $suggestions[] = 'block__' . $region . '__' . $variables['elements']['#id'];
      // block--REGION_ID--MY_BLOCK_ID--CUSTOM_BLOCK_ID.html.twig
      $suggestions[] = 'block__' . $region . '__' . $variables['elements']['#base_plugin_id'] . '__' . $variables['elements']['#id'];
    }
  }
}
