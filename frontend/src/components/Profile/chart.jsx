import React, { Component } from "react";
import axios from "axios";
import ReactApexChart from "react-apexcharts";
import Loader from "../loader";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

class ProblemChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isLoading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(`${BACKEND_URL}/profile/profileData`, {
        withCredentials: true,
      });
      this.setState({ user: response.data, isLoading: false });
    } catch (error) {
      console.error("Failed to fetch profile data:", error);
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <Loader />;
    }

    if (!this.state.user) {
      return <p>Error loading data</p>;
    }

    const { easySolved = 0, mediumSolved = 0, hardSolved = 0 } = this.state.user;
    const totalSolved = easySolved + mediumSolved + hardSolved;

    const options = {
      chart: {
        type: "donut",
      },
      labels: ["Easy", "Medium", "Hard"],
      colors: ["#4CAF50", "#FFC107", "#F44336"], // Green, Orange, Red
      legend: {
        position: "bottom",
      },
      plotOptions: {
        pie: {
          donut: {
            size: "70%",
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val.toFixed(1)}%`,
      },
      title: {
        text: `Total Solved: ${totalSolved}`,
        align: "center",
        margin: 20,
        style: {
          fontSize: "18px",
        },
      },
    };

    return (
      <div>
        {/* <h2>Problem Solved</h2> */}
        <ReactApexChart options={options} series={[easySolved, mediumSolved, hardSolved]} type="donut" height={350} />
      </div>
    );
  }
}

export default ProblemChart;
