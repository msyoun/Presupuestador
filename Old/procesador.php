<?php

  $Ejemplo = array('ventana' => array(
    0 => array(
      'linea' => 0,
      'ancho' => 1500,
      'alto' => 1100,
      'v1' => 1,
      'c1' => 1,
      'v2' => 1,
      'h' => 0
    ),
    1 => array(
      'linea' => 0,
      'ancho' => 1500,
      'alto' => 1200,
      'v1' => 1,
      'c1' => 1,
      'v2' => 1,
      'h' => 0
    ),
  ));

  foreach ($Ejemplo['ventana'] as $ventanas => $value) {

  }

  public function Corrediza($v)
  {
    $AnchoTotal = array(
      0 => array(2 => $v['ancho']+93, 3 => $v['ancho']+93, 4 => $v['ancho']+96),
      1 => array(2 => $v['ancho']+93, 3 => $v['ancho']+93, 4 => $v['ancho']+96),
      2 => array(2 => $v['ancho']+93, 3 => $v['ancho']+93, 4 => $v['ancho']+96),
      3 => array(2 => $v['ancho']+93, 3 => $v['ancho']+93, 4 => $v['ancho']+96)
    );
    $AltoTotal = array(
      0 => $v['alto']-68,
      1 => $v['alto']-68,
      2 => $v['alto']-68,
      3 => $v['alto']-68
    );
    if (!isset($v('o'))) {
      $MetroSF = $AnchoTotal[$v['linea'][2]] * 2 + $AltoTotal[$v['linea']] * 4;
    } else {
      $MetroSF = $AnchoTotal[$v['linea'][2]] * 2 + $AltoTotal[$v['linea']] * 4;
    }
  }


?>
