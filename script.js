import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, .1, 100)
camera.position.z = 3

// Canvas
const canvas = document.getElementById('webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({canvas: canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

// Animation
const animate = () => {
    window.requestAnimationFrame(animate)

    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01

    renderer.render(scene, camera)
}

animate()