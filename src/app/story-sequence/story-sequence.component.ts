import { Component, Input, OnInit } from '@angular/core';
import * as THREE from 'three';
import { SceneConfig } from '../scene-config';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-story-sequence',
  templateUrl: './story-sequence.component.html',
  styleUrls: ['./story-sequence.component.css'],
})
export class StorySequenceComponent implements OnInit {
  // scene config object (cameras and renderers)
  sceneConfig: SceneConfig = new SceneConfig();

  @Input()
  storyPartId: number;

  constructor() {}

  // load scene config
  readSceneConfig() {
    const pathToSceneConfig =
      '../data/storypart_' + this.storyPartId + '_sceneConfig.json';

    // read the scene config into sceneConfig
  }

  ngOnInit() {
    this.readSceneConfig();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    // Controls
    let orbitControls = new OrbitControls(camera);

    animate();
  }
}
