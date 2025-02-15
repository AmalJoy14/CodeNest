import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import axios from "axios";
import Loader from "../loader";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
      const response = await axios.get("http://localhost:3000/profile/profileData", {
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

    const { username } = this.state.user;
    const easySolved = this.state.user.easySolved || 1;
    const mediumSolved = this.state.user.mediumSolved || 0;
    const hardSolved = this.state.user.hardSolved || 0;
    const totalSolved = easySolved + mediumSolved + hardSolved;


    const options = {
      animationEnabled: true,
      title: {
        text: `Problem Solved`,
      },
      subtitles: [
        {
          text: `Total Solved: ${totalSolved}`,
          verticalAlign: "center",
          fontSize: 20,
          dockInsidePlotArea: true,
        },
      ],
      data: [
        {
          type: "doughnut",
          showInLegend: true,
          indexLabel: "{name}: {y}",
          bevelEnabled: true,
          innerRadius: "80%",
          yValueFormatString: "#,###",
          dataPoints: [
            { name: "Easy", y: easySolved, color: "#4CAF50" },  // Green
            { name: "Medium", y: mediumSolved, color: "#ffc107" },  // Orange
            { name: "Hard", y: hardSolved, color: "#F44336" }   // Red
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default ProblemChart;
