import React, { Fragment } from 'react';

// Layout
import { Actions } from '../../Layout/Actions/Actions';
import { Calendar } from '../../Layout/Calendar/Calendar';
import { Sidebar } from '../../Layout/Sidebar/Sidebar';

export const Home = () => {
  return (
    <Fragment>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-home"></i> Home
              </h1>
            </div>
          </div>
        </div>
      </header>
      <Actions />
      <section id="track">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Calendar />
            </div>
            <div className="col-md-3">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
