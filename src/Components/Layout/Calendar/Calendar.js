import React, { Fragment } from 'react';

export const Calendar = () => {
  return (
    <Fragment>
      <table className="table table-bordered table-striped mt-3">
        <thead>
          <tr>
            <th colSpan="7">
              <span className="btn-group">
                <a href="/#" className="btn">
                  <i className="fas fa-chevron-left"></i>
                </a>
                <a href="/#" className="btn active">
                  February 2012
                </a>
                <a href="/#" className="btn">
                  <i className="fas fa-chevron-right"></i>
                </a>
              </span>
            </th>
          </tr>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="muted">29</td>
            <td className="muted">30</td>
            <td className="muted">31</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
          </tr>
          <tr>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
          </tr>
          <tr>
            <td>12</td>
            <td>13</td>
            <td>14</td>
            <td>15</td>
            <td>16</td>
            <td>17</td>
            <td>18</td>
          </tr>
          <tr>
            <td>19</td>
            <td className="btn-primary">
              <strong>20</strong>
            </td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
            <td>24</td>
            <td>25</td>
          </tr>
          <tr>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td className="muted">1</td>
            <td className="muted">2</td>
            <td className="muted">3</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  );
};

export default Calendar;
