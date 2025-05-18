import * as THREE from 'three';

export function createLights() {
  const lights = [];
  
  const ambientLight = new THREE.AmbientLight(0x404040);
  lights.push(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  lights.push(directionalLight);
  
  return lights;
}