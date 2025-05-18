import * as THREE from 'three';

export function createEnvironment() {
  const meshes = [];
  
  // Ground
  const groundGeometry = new THREE.PlaneGeometry(100, 100);
  const groundMaterial = new THREE.MeshPhongMaterial({ 
    color: 0x228B22,
    side: THREE.DoubleSide 
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  meshes.push(ground);
  
  // Random cubes as obstacles
  for (let i = 0; i < 20; i++) {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({ 
      color: Math.random() * 0xffffff 
    });
    const cube = new THREE.Mesh(geometry, material);
    
    cube.position.x = Math.random() * 40 - 20;
    cube.position.z = Math.random() * 40 - 20;
    cube.position.y = 1;
    
    cube.castShadow = true;
    cube.receiveShadow = true;
    
    meshes.push(cube);
  }
  
  return meshes;
}