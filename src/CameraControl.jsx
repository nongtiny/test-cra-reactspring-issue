/* eslint-disable */
import React, { forwardRef, useEffect, useRef } from 'react';
import {
	MOUSE,
	Vector2,
	Vector3,
	Vector4,
	Quaternion,
	Matrix4,
	Spherical,
	Box3,
	Sphere,
	Raycaster,
	MathUtils,
} from 'three';
import { extend, useFrame, useThree } from '@react-three/fiber';
import CameraControlsDefault from 'camera-controls';

const subsetOfTHREE = {
	MOUSE: MOUSE,
	Vector2: Vector2,
	Vector3: Vector3,
	Vector4: Vector4,
	Quaternion: Quaternion,
	Matrix4: Matrix4,
	Spherical: Spherical,
	Box3: Box3,
	Sphere: Sphere,
	Raycaster: Raycaster,
	MathUtils: {
		DEG2RAD: MathUtils.DEG2RAD,
		clamp: MathUtils.clamp,
	},
};

CameraControlsDefault.install({ THREE: subsetOfTHREE });
extend({ CameraControlsDefault });

export const CameraControls = forwardRef((_, ref) => {
	const cameraControls = useRef(null);
	const camera = useThree((state) => state.camera);
	const renderer = useThree((state) => state.gl);
	useFrame((_, delta) => {
		cameraControls.current?.update(delta)
	});
	useEffect(() => () => cameraControls.current?.dispose(), []);
	return <cameraControlsDefault ref={mergeRefs(cameraControls, ref, camera)} args={[camera, renderer.domElement]} />;
});

function mergeRefs(...refs) {
	return (instance) => {
		if (instance) {
			instance.minPolarAngle = 1;
			instance.maxPolarAngle = Math.PI / 2.1;
			instance.minDistance = 0.78;
			instance.maxDistance = 7;
			instance.dollyToCursor = true;
			instance.dollySpeed = 0.5;
			instance.dampingFactor = 0.09;
			instance.draggingDampingFactor = 0.15;

			// // let startPosition = 0;
			// // let target = new Vector3()
			// instance.addEventListener( 'update', function() {
			// 	console.log(instance.getPosition())
			// })
			// instance.addEventListener( 'update', function() {
			// 	// if (Math.abs(target.z) - Math.abs(startPosition) < 0) {
			// 	// 	instance.reset(true);
			// 	// }
			// })
		}
		for (const ref of refs) {
			if (typeof ref === 'function') {
				ref(instance);
			} else if (ref) {
				ref.current = instance;
			}
		}
	};
}
