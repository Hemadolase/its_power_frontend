import React from "react";

function TechnicalSpecification_servo_3ph() {
  return (
    <div className="tech-spec-container">

      {/* PAGE HEADER */}
      <div className="tech-header">
        <h1>Technical Specifications</h1>
        <p>6 KVA – 500 KVA | 3 Phase – 3 Phase Servo Stabilizer</p>
      </div>

      {/* TABLE */}
      <div className="tech-table-wrapper">
        <table className="tech-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Parameter</th>
              <th>Specification</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1.</td>
              <td>Input Voltage Range</td>
              <td>360V – 470V (Three Phase)</td>
            </tr>

            <tr>
              <td>2.</td>
              <td>Input Frequency Range</td>
              <td>50 Hz</td>
            </tr>

            <tr>
              <td>3.</td>
              <td>Nominal Output Voltage</td>
              <td>415V (Internally settable to 380V or 400V)</td>
            </tr>

            <tr>
              <td>4.</td>
              <td>Type of Stabilizer</td>
              <td>Suitable for unbalanced loads and wide input variations</td>
            </tr>

            <tr>
              <td>5.</td>
              <td>Output Voltage Regulation</td>
              <td>±1% of nominal output</td>
            </tr>

            <tr>
              <td>6.</td>
              <td>Average Correction Rate</td>
              <td>70 V / sec</td>
            </tr>

            <tr>
              <td>7.</td>
              <td>Servo Motor Driver</td>
              <td>AC Synchronous Stepper Motor</td>
            </tr>

            <tr>
              <td>8.</td>
              <td>Single Phasing Prevention</td>
              <td>Voltage sensing method</td>
            </tr>

            <tr>
              <td>9.</td>
              <td>Fault Annunciation Panel</td>
              <td>
                <ul className="tech-list">
                  <li>Input Present (each phase)</li>
                  <li>Output Normal (each phase)</li>
                  <li>Input / Output High (each phase)</li>
                  <li>Input / Output Low (each phase)</li>
                  <li>Phase Reverse</li>
                  <li>Overload</li>
                  <li>Output Trip</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>10.</td>
              <td>Resetting Mode</td>
              <td>Automatic restart (Manual option available)</td>
            </tr>

            <tr>
              <td>11.</td>
              <td>Housing</td>
              <td>Dust-protected cabinet with industrial finish</td>
            </tr>

            <tr>
              <td>12.</td>
              <td>Input / Output Terminations</td>
              <td>
                8-way connector + cable gland mounting plates
              </td>
            </tr>

            <tr>
              <td>13.</td>
              <td>Efficiency</td>
              <td>&gt; 97%</td>
            </tr>

            <tr>
              <td>14.</td>
              <td>Metering</td>
              <td>
                Analog meter for Voltage, Current, Frequency (Input & Output)
              </td>
            </tr>

            <tr>
              <td>15.</td>
              <td>Under / Over Voltage Cutoff</td>
              <td>
                20V ±4V above nominal <br />
                40V ±4V below nominal
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TechnicalSpecification_servo_3ph;
