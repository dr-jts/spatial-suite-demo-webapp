import React, { useState } from 'react';
import {
  Card,
  CardBody,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text,
} from '@patternfly/react-core';
import MapSearch from 'components/MapSearch';
import EditForm from './components/EditForm';
import styles from './index.module.css';

/** @typedef {import('api').Parcel} Parcel */

/** @type {Parcel | null} */
const selectedParcelInitialState = null;

const ChooseParcelText = () => (
  <TextContent>
    <Text>Please choose a parcel.</Text>
  </TextContent>
);

const Categories = () => {
  const [selectedParcel, setSelectedParcel] = useState(selectedParcelInitialState);

  const handleCancelButtonClick = () => {
    // Deselect the parcel
    setSelectedParcel(selectedParcelInitialState);
  };

  const handleSaveButtonClick = parcel => {
    // TODO: Send parcel updates to backend
    setSelectedParcel(parcel);
  };

  const classes = selectedParcel ? `${styles.card} ${styles.expanded}` : `${styles.card}`;

  return (
    <PageSection variant={PageSectionVariants.light} className={styles.pageSection}>
      <MapSearch onSelectParcel={setSelectedParcel} />

      <Card className={classes}>
        <CardBody>
          {
          selectedParcel
            ? (
              <EditForm
                onCancelButtonClick={handleCancelButtonClick}
                onSaveButtonClick={handleSaveButtonClick}
                parcel={selectedParcel}
              />
            )
            : <ChooseParcelText />
          }
        </CardBody>
      </Card>
    </PageSection>
  );
};

export default Categories;
