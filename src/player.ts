import * as THREE from 'three';

export function createPlayer() {
  const player = new THREE.Group();
  
  const geometry = new THREE.CapsuleGeometry(0.5, 1, 4, 8);
  const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const body = new THREE.Mesh(geometry, material);
  
  body.castShadow = true;
  body.receiveShadow = true;
  
  player.add(body);
  player.position.y = 2;
  
  return player;
}