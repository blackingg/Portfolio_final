import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { MotionConfig } from "framer-motion";
import { ScrollManager } from "./components/ScrollManager";
import { useState, useEffect } from "react";
import { Menu } from "./components/Menu";
import { framerMotionConfig } from "./config";
import { LoadingScreen } from "./components/LoadingScreen";
import { Cursor } from "./components/Cursor";

function App() {
	const [section, setSection] = useState(0);
	const [menuOpened, setMenuOpened] = useState(false);
	const [started, setStarted] = useState(false);

	useEffect(() => {
		setMenuOpened(false);
	}, [section]);

	return (
		<>
			<LoadingScreen
				started={started}
				setStarted={setStarted}
			/>
			<MotionConfig
				transition={{
					...framerMotionConfig,
				}}
			>
				<Canvas
					shadows
					camera={{ position: [50, 80, 65] }}
				>
					<color
						attach="background"
						args={["#e7f7cd"]}
					/>
					<ScrollControls
						pages={4}
						damping={0.1}
					>
						<ScrollManager
							section={section}
							onSectionChange={setSection}
						/>
						<Scroll>
							<Suspense>
								{started && (
									<Experience
										section={section}
										menuOpened={menuOpened}
									/>
								)}
							</Suspense>
						</Scroll>

						<Scroll html>{started && <Interface />}</Scroll>
					</ScrollControls>
				</Canvas>

				<Menu
					onSectionChange={setSection}
					menuOpened={menuOpened}
					setMenuOpened={setMenuOpened}
				/>
				<Cursor />
			</MotionConfig>
		</>
	);
}

export default App;
