import { Office } from "./Office";
import { motion } from "framer-motion-3d";
import { animate, useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../config";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export const Experience = (props) => {
	const { section, menuOpened } = props;

	const cameraPosition = useMotionValue();
	const cameraLookAt = useMotionValue();

	useEffect(() => {
		animate(cameraPosition, menuOpened ? -5 : 50, {
			...framerMotionConfig,
		});
		animate(cameraLookAt, menuOpened ? 5 : 0, {
			...framerMotionConfig,
		});
	}, [menuOpened]);

	useFrame((state) => {
		state.camera.position.x = cameraPosition.get();
		state.camera.lookAt(cameraLookAt.get(), 0, 0);
	});
	return (
		<>
			<ambientLight intensity={1} />
			<motion.group
				position={[10, 1, 1]}
				scale={[0.18, 0.18, 0.18]}
				rotation-y={-Math.PI / 4}
				animate={{
					y: section === 0 ? 0 : -1,
				}}
			>
				<Office section={section} />
			</motion.group>
		</>
	);
};
