import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who is HaveN Studios?',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        HaveN Studios is a Minecraft Studio that creates
        realms, servers and more! Our priority is always quality.
      </>
    ),
  },
  {
    title: 'Learn more with just a click!',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Want to learn more about a command? Or need to know how to do something?
        Our easy to use wiki has information on everything. Learn more by using the wiki tab!
      </>
    ),
  },
  {
    title: 'What is this?',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This is the official HaveN Studios wiki! With this extensive wiki
        you can find information on almost everything, from commands all the way to upgrades!
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <h3></h3>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
