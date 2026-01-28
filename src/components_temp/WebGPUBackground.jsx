import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function WebGPUBackground() {
  const containerRef = useRef();

  useEffect(() => {
    let renderer, scene, camera, animationId;

    async function init() {
      if (!navigator.gpu) {
        console.warn("WebGPU not supported");
        return;
      }

      const adapter = await navigator.gpu.requestAdapter();
      const device = await adapter.requestDevice();

      renderer = new THREE.WebGPURenderer({
        antialias: true,
        device,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.style.position = "fixed";
      renderer.domElement.style.top = "0";
      renderer.domElement.style.left = "0";
      renderer.domElement.style.zIndex = "-2";
      containerRef.current.appendChild(renderer.domElement);

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.set(0, 0, 5);

      const geometry = new THREE.TorusKnotGeometry(1, 0.4, 128, 64);
      const material = new THREE.MeshStandardMaterial({ color: 0x4488ff });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(5, 5, 5);
      scene.add(light);

      function animate() {
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.005;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      }

      animate();

      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    }

    init();

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      if (renderer && renderer.domElement)
        containerRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} />;
}
