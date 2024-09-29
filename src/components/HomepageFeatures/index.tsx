import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import MultipleSolvers from "@site/static/img/solver.svg";
import Materials from "@site/static/img/materials.svg";

type FeatureItem = {
  title: string;
  description: JSX.Element;
  image: () => React.ReactElement;
};

const FeatureList: FeatureItem[] = [
  {
    title: "3D Interactive Editor",
    image: () => (
      <img
        title="3D Interactive Editor"
        alt="3D Interactive Editor"
        className={styles.featureImage}
        src={"/img/editor-screen-shot.png"}
      />
    ),
    description: (
      <>
        Configure your project using an interactive 3D editor. Visualize
        sources, receivers, materials, and solutions.
      </>
    ),
  },
  {
    title: "Multiple Solvers",
    image: () => (
      <MultipleSolvers
        title="Multiple Solvers"
        className={clsx(styles.multipleSolversLogo, styles.featureSvg)}
      />
    ),
    description: (
      <>
        Band comes packed with a variety of solvers, including a raytracer, 2D
        FDTD, Image Source Method, and more.
      </>
    ),
  },
  {
    title: "Huge Material Library",
    image: () => (
      <Materials
        title="Huge Material Library"
        className={clsx(styles.materialsLogo, styles.featureSvg)}
      />
    ),
    description: (
      <>
        Browse over 1,000 acoustic materials to apply to your model, or,
        configure your own!
      </>
    ),
  },
];

function Feature(props: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center", styles.cardImageContainer)}>
        <props.image />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{props.title}</Heading>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
