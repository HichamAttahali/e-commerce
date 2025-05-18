import * as THREE from 'three';
import { createScene } from './scene';
import { createLights } from './lights';
import { createPlayer } from './player';
import { createEnvironment } from './environment';

let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;

const container = document.getElementById('game-container')!;
const scene = createScene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
container.appendChild(renderer.domElement);

const lights = createLights();
lights.forEach(light => scene.add(light));

const environment = createEnvironment();
environment.forEach(mesh => scene.add(mesh));

const player = createPlayer();
scene.add(player);

camera.position.set(0, 2, 5);
player.add(camera);

const onKeyDown = (event: KeyboardEvent) => {
  switch (event.code) {
    case 'KeyW':
      moveForward = true;
      break;
    case 'KeyS':
      moveBackward = true;
      break;
    case 'KeyA':
      moveLeft = true;
      break;
    case 'KeyD':
      moveRight = true;
      break;
  }
};

const onKeyUp = (event: KeyboardEvent) => {
  switch (event.code) {
    case 'KeyW':
      moveForward = false;
      break;
    case 'KeyS':
      moveBackward = false;
      break;
    case 'KeyA':
      moveLeft = false;
      break;
    case 'KeyD':
      moveRight = false;
      break;
  }
};

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  
  player.rotation.y -= event.movementX * 0.002;
  camera.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, camera.rotation.x - event.movementY * 0.002));
});

document.addEventListener('click', () => {
  container.requestPointerLock();
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const speed = 0.1;
const animate = () => {
  requestAnimationFrame(animate);

  if (moveForward) player.translateZ(-speed);
  if (moveBackward) player.translateZ(speed);
  if (moveLeft) player.translateX(-speed);
  if (moveRight) player.translateX(speed);

  renderer.render(scene, camera);
};

animate();