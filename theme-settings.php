<?php

/*function d8base_form_system_theme_settings_alter(&$form, Drupal\Core\Form\FormStateInterface $form_state) {
  $form['d8base_settings']['copyright'] = array(
    '#type'          => 'textfield',
    '#title'         => t('Copyright'),
    '#default_value' => theme_get_setting('copyright'),
    '#description'   => t('Place copyright here.'),
  );
	$form['d8base_settings']['mobile_logo'] = [
	  '#type' => 'managed_file',
	  '#title' => t('Mobile logo'),
	  '#default_value' => theme_get_setting('mobile_logo'),
	  '#upload_validators' => array(
		  'file_validate_extensions' => array('gif png jpg jpeg'),
		  'file_validate_size' => array(25600000),
	  ),
	  '#upload_location' => 'public://',
	];
	$form['#submit'][] = 'd8base_form_system_theme_settings_submit';
}
  
function d8base_form_system_theme_settings_submit($form, &$form_state) {
	if ($form_state->hasValue('mobile_logo')) {
	  // Load the file via file.fid.
	  $fid_mobile_logo = $form_state->getValue('mobile_logo');
	  if ( is_array( $fid_mobile_logo ) ) {
		  $fid_mobile_logo = reset($fid_mobile_logo);
    }
    $file = \Drupal\file\Entity\File::load((int) $fid_mobile_logo);
    if ($file && $file->isTemporary()) {
      $file->set('status', FILE_STATUS_PERMANENT);
      $file->save();
    }
	}
}*/