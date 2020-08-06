import React from "react";

import { Table, Typography } from "antd";
import { FormattedMessage, FormattedNumber } from "react-intl";
import { ColumnsType } from "antd/lib/table";

function onChange(pagination, filters, sorter, extra) {
  console.log("params", pagination, filters, sorter, extra);
}

const CountriesTable = ({ data, isValidating }) => {
  const columns: ColumnsType<any> = [
    {
      title: <FormattedMessage id="location" defaultMessage="Location" />,
      dataIndex: "Country",
      key: "location",
      sorter: (a, b) => 1,
      width: "200px",
      defaultSortOrder: "ascend",
      fixed: "left",
    },
    {
      title: <FormattedMessage id="confirmed" defaultMessage="Confirmed" />,
      children: [
        {
          title: <FormattedMessage id="total" defaultMessage="Total" />,
          width: "120px",
          key: "totalConfirmed",
          dataIndex: "TotalConfirmed",
          sorter: (a, b) => a.TotalConfirmed - b.TotalConfirmed,
          sortDirections: ["descend", "ascend"],
          render: (text) => <FormattedNumber value={text} />,
          align: "right",
        },
        {
          title: <FormattedMessage id="new" defaultMessage="New" />,
          width: "120px",
          key: "newConfirmed",
          dataIndex: "NewConfirmed",
          sorter: (a, b) => a.NewConfirmed - b.NewConfirmed,
          sortDirections: ["descend", "ascend"],
          render: (text) => (
            <Typography.Text type="warning">
              [ +<FormattedNumber value={text} />]
            </Typography.Text>
          ),
          align: "left",
        },
      ],
    },
    {
      title: <FormattedMessage id="recovered" defaultMessage="Recovered" />,
      children: [
        {
          title: <FormattedMessage id="total" defaultMessage="Total" />,
          width: "120px",
          dataIndex: "TotalRecovered",
          key: "totalRecovered",
          sorter: (a, b) => a.TotalRecovered - b.TotalRecovered,
          sortDirections: ["descend", "ascend"],
          render: (text) => <FormattedNumber value={text} />,
          align: "right",
        },
        {
          title: <FormattedMessage id="new" defaultMessage="New" />,
          width: "120px",
          dataIndex: "NewRecovered",
          key: "newRecovered",
          sorter: (a, b) => a.NewRecovered - b.NewRecovered,
          sortDirections: ["descend", "ascend"],
          render: (text) => (
            <Typography.Text type="warning">
              [ +<FormattedNumber value={text} />]
            </Typography.Text>
          ),
          align: "left",
        },
      ],
    },
    {
      title: <FormattedMessage id="passed" defaultMessage="Passed" />,
      children: [
        {
          title: <FormattedMessage id="total" defaultMessage="Total" />,
          width: "120px",
          dataIndex: "TotalDeaths",
          key: "totalPassed",
          sorter: (a, b) => a.TotalDeaths - b.TotalDeaths,
          sortDirections: ["descend", "ascend"],
          render: (text) => <FormattedNumber value={text} />,
          align: "right",
        },
        {
          title: <FormattedMessage id="new" defaultMessage="New" />,
          width: "120px",
          dataIndex: "NewDeaths",
          key: "newPassed",
          sorter: (a, b) => a.NewDeaths - b.NewDeaths,
          sortDirections: ["descend", "ascend"],
          render: (text) => (
            <Typography.Text type="warning">
              [ +<FormattedNumber value={text} />]
            </Typography.Text>
          ),
          align: "left",
        },
      ],
    },
  ];
  return (
    <Table
      loading={isValidating}
      columns={columns}
      dataSource={data}
      onChange={onChange}
      scroll={{ x: 750, y: 500 }}
      style={{ marginTop: "12px" }}
    />
  );
};

export default CountriesTable;
