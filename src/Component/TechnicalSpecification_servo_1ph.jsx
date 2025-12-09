import React from "react";

function TechnicalSpecification_servo_1ph() {
  return (
    <div className="tech-spec-container">

      {/* HEADER */}
      <div className="tech-header">
        <h1>Technical Specifications</h1>
        <p>1 Phase Servo Stabilizer (1 KVA – 20 KVA)</p>
      </div>

      {/* TABLE */}
      <div className="tech-table-wrapper">
        <table className="tech-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Parameter</th>
              <th>Specifications</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1.</td>
              <td>Input Voltage Range</td>
              <td>170V – 270V (Standard)</td>
            </tr>

            <tr>
              <td>2.</td>
              <td>Input Supply Frequency</td>
              <td>45 Hz – 55 Hz</td>
            </tr>

            <tr>
              <td>3.</td>
              <td>Output Voltage</td>
              <td>230V ±1%</td>
            </tr>

            <tr>
              <td>4.</td>
              <td>Voltage Regulation</td>
              <td>±1%</td>
            </tr>

            <tr>
              <td>5.</td>
              <td>Rate of Correction</td>
              <td>25 V / second</td>
            </tr>

            <tr>
              <td>6.</td>
              <td>Efficiency</td>
              <td>97%</td>
            </tr>

            <tr>
              <td>7.</td>
              <td>Waveform Distortion</td>
              <td>Nil</td>
            </tr>

            <tr>
              <td>8.</td>
              <td>Effect of Load Power Factor</td>
              <td>Nil</td>
            </tr>

            <tr>
              <td>9.</td>
              <td>Ambient Temperature</td>
              <td>0°C – 50°C</td>
            </tr>

            <tr>
              <td>10.</td>
              <td>Type</td>
              <td>Air Cooled</td>
            </tr>

            <tr>
              <td>11.</td>
              <td>Servo Motor Driver</td>
              <td>AC Synchronous Stepper Motor</td>
            </tr>

            <tr>
              <td>12.</td>
              <td>Indications</td>
              <td>
                <ul className="tech-list">
                  <li>Mains On</li>
                  <li>High / Low Cut-off</li>
                  <li>Output On</li>
                </ul>
              </td>
            </tr>

          </tbody>

        </table>
      </div>
    </div>
  );
}

export default TechnicalSpecification_servo_1ph;
