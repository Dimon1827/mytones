import React from 'react';
import TopWrapper from '../top-wrapper/TopWrapper';
import * as styles from './collection-item/Collection.module.scss';
import CollectionItem from './collection-item/CollectionItem';
import collections from './collections-data';

const Collections = () => {
  return (
    <section className={styles.collections}>
      <TopWrapper text={'Top Collection'} />
      <ul className={styles.collectionList}>
        {collections.map((item, index) => {
          return (
            <CollectionItem key={index} to={item.to} image={item.image}>
              {item.name}
            </CollectionItem>
          );
        })}
      </ul>
    </section>
  );
};

export default Collections;
