<?php

/**
 * @file
 * Theme and preprocess functions for pages.
 */

function d8base_preprocess_page(&$variables) {
  $variables['copyright'] = theme_get_setting('copyright');
}
