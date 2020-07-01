import React, { Component, Fragment } from 'react';

// LAYOUT
import DailyPerformanceChart from '../Layout/DailyPerformance/Chart';

export default class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // AJAX Calls Here
    this.setState({
      chartData: {
        labels: [
          'Sydney',
          'Melbourne',
          'Brisbane',
          'Perth',
          'Adelaide',
          'Gold Coast',
        ],
        datasets: [
          {
            label: 'Population',
            data: [4627345, 4246375, 2189878, 1896548, 1225235, 591473],
            // backgroundColor: 'green',
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(255, 99, 132, 0.6)',
            ],
          },
        ],
      },
    });
  }
  render() {
    return (
      <Fragment>
        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-chart-bar"></i> Progress
                </h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {/* <ProgressBar />
              <ThisWeek />
              <CompletionRate />
              <CheckInTime /> */}
              <DailyPerformanceChart
                chartData={this.state.chartData}
                location="Australia"
                legendPosition="bottom"
              />
              {/* <YearlyPerformance /> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}