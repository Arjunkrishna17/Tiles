import Tiles from "./Tiles/Tiles";

function App() {
  const data1 = {
    title: "Total Sales Q4",
    type: "number", // number/trend/comparison
    metric: {
      metric_value: "",
      metric_type: "",
      metric_heading: "",
    },

    values: [
      {
        value: "24564444",
        value_type: { type: "currency", icon: "INR" },
        value_heading: "product sales",
      },
    ],
  };

  const data2 = {
    title: "Total Sales Q4",
    type: "trend", // number/trend/comparison
    metric: {
      metric_value: "",
      metric_type: "",
      metric_heading: "",
    },

    values: [
      {
        value: "24564444",
        value_type: { type: "currency", icon: "INR" },
        value_heading: "product sales",
      },
      {
        value: "25",
        value_type: { type: "percentage", icon: "" },
        value_heading: "sales increased",
      },
    ],
  };

  const data3 = {
    title: "Total Sales Q4",
    type: "comparison", // number/trend/comparison
    metric: {
      metric_value: 50,
      metric_type: "percentage",
      metric_icon: "",
      metric_heading: "increased",
    },

    values: [
      {
        value: "24564444",
        value_type: { type: "currency", icon: "INR" },
        value_heading: "this year",
      },
      {
        value: "2056060",
        value_type: { type: "currency", icon: "INR" },
        value_heading: "last year",
      },
    ],
  };

  const data4 = {
    title: "Total Sales Q4",
    type: "comparison", // number/trend/comparison
    metric: {
      metric_value: -50,
      metric_type: "percentage",
      metric_icon: "",
      metric_heading: "decreased",
    },

    values: [
      {
        value: "24564444",
        value_type: { type: "currency", icon: "INR" },
        value_heading: "this year",
      },
      {
        value: "2056060",
        value_type: { type: "currency", icon: "INR" },
        value_heading: "last year",
      },
    ],
  };

  const data = [data1, data2, data3, data4];

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "98vh",
        background: "#F3F4F6",
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      {data.map((tileData) => (
        <Tiles data={tileData} />
      ))}
    </div>
  );
}

export default App;
