import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function Box(props) {
  // このリファレンスにより、メッシュに直接アクセスすることができます
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // このコンポーネントをレンダリングループに登録し、フレームごとにメッシュを回転させます。

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.x = a;
    mesh.current.rotation.y = a;
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1.3, 1.3, 1.3]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default Box;
