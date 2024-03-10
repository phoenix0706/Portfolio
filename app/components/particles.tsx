import Particles from "@tsparticles/react";
import configs from "@tsparticles/configs";

export default function ParticlesComponent(props: {
  id: string;
  done: boolean;
}) {
  return (
    props.done && (
      <Particles
        style={{ zIndex: -10000 }}
        id={props.id}
        options={configs.basic}
      />
    )
  );
}
