import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { ScrollManager } from "./components/ScrollManager";
import { useState, useEffect } from "react";
import { Menu } from "./components/Menu";
import { LoadingScreen } from "./components/LoadingScreen";

function App() {
	const [section, setSection] = useState(0);
	const [menuOpened, setMenuOpened] = useState(false);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setMenuOpened(false);
	}, [section]);

	return (
		<>
			{isLoading ? (
				<LoadingScreen />
			) : (
				<Canvas
					shadows
					camera={{ position: [3, 3, 3], fov: 30 }}
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
							<Experience />
						</Scroll>

						<Scroll html>
							<Interface />
						</Scroll>
					</ScrollControls>
				</Canvas>
			)}
			<Menu
				onSectionChange={setSection}
				menuOpened={menuOpened}
				setMenuOpened={setMenuOpened}
			/>
		</>
	);
}

export default App;
