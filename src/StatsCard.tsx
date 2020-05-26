import React from "react";
import { FormattedNumber } from "react-intl";
import { createUseStyles } from "react-jss";
import { Col, Typography, Card } from "antd";
const useStyles = createUseStyles({
  statsCard: {
    width: "100%",
    textAlign: "center",
  },
  totalNumber: {
    fontSize: "1.7em",
    marginBottom: "12px",
  },
  newNumber: {},
});
interface StatsCardProps {
  title: React.ReactNode | string;
  totalNumber: number;
  newNumber: number;
}

const StatsCard = (props: StatsCardProps) => {
  const { title, totalNumber, newNumber } = props;
  const styles = useStyles();
  return (
    <Col xs={24} md={8}>
      <Card className={styles.statsCard} hoverable>
        <Typography.Paragraph>{title}</Typography.Paragraph>
        <Typography.Paragraph className={styles.totalNumber}>
          <FormattedNumber value={totalNumber} />
        </Typography.Paragraph>
        <Typography.Paragraph className={styles.newNumber} type="warning">
          [ +<FormattedNumber value={newNumber} />]
        </Typography.Paragraph>
      </Card>
    </Col>
  );
};

export default StatsCard;
