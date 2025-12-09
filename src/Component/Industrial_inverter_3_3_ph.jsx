import React from "react";

function Industrial_inverter_3_3_ph() {
  return (
    <div className="tech-spec-container">

      {/* Page Header */}
      <div className="tech-header">
        <h1>Technical Specifications</h1>
        <p>5 KVA – 200 KVA | 3 Phase Input → 3 Phase Output</p>
      </div>

      {/* Table Wrapper */}
      <div className="tech-table-wrapper">
        <table className="tech-table">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Parameter</th>
              <th>Specification</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>1.</td>
              <td>Technology</td>
              <td>DSP Based Microcontroller Technology</td>
            </tr>

            <tr>
              <td>2.</td>
              <td>Latest Design</td>
              <td>DSP Based Microcontroller Technology</td>
            </tr>

            <tr>
              <td>3.</td>
              <td>Switching Frequency</td>
              <td>
                <ul className="tech-list">
                  <li>Low Switching Losses</li>
                  <li>Purity of Sine-Wave</li>
                  <li>Ultra-fast Transient Response</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>4.</td>
              <td>Wide Input Range</td>
              <td>350 V – 470 V AC (Three Phase), 45 Hz – 55 Hz</td>
            </tr>

            <tr>
              <td>5.</td>
              <td>Accurate Output</td>
              <td>
                350 – 470 VAC (On Mains Mode)<br />
                415 V AC ±1% (On Inverter Mode)
              </td>
            </tr>

            <tr>
              <td>6.</td>
              <td>Output Power Factor</td>
              <td>0.8 lagging to unity</td>
            </tr>

            <tr>
              <td>7.</td>
              <td>Transient Response</td>
              <td>
                ±5% deviation for 100% step load<br />
                Recovers within ½ cycle
              </td>
            </tr>

            <tr>
              <td>8.</td>
              <td>Metering</td>
              <td>
                LCD Display for:<br />
                Output Voltage, Output Current, Battery Voltage
              </td>
            </tr>

            <tr>
              <td>9.</td>
              <td>On-board Indications</td>
              <td>
                <ul className="tech-list">
                  <li>Mains ON</li>
                  <li>UPS ON</li>
                  <li>Battery Backup Status</li>
                  <li>Load Status</li>
                  <li>Battery Low Warning</li>
                  <li>Overload</li>
                  <li>Short Circuit</li>
                  <li>Trip</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>10.</td>
              <td>Waveform</td>
              <td>Pure Sine Wave</td>
            </tr>

            <tr>
              <td>11.</td>
              <td>Distortion</td>
              <td>
                <ul className="tech-list">
                  <li>&lt; 2% for linear load</li>
                  <li>&lt; 5% for non-linear load</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>12.</td>
              <td>Protection</td>
              <td>
                <ul className="tech-list">
                  <li>Input Low Cut-off</li>
                  <li>Input High Cut-off</li>
                  <li>Phase Fail / Reverse</li>
                  <li>Battery Low Warning</li>
                  <li>DC Under Voltage</li>
                  <li>DC Over Voltage</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>13.</td>
              <td>Pre Alarm</td>
              <td>Battery Low</td>
            </tr>

            <tr>
              <td>14.</td>
              <td>Isolation</td>
              <td>Isolation Transformer at Output Side</td>
            </tr>

            <tr>
              <td>15.</td>
              <td>Crest Factor</td>
              <td>3 : 1</td>
            </tr>

            <tr>
              <td>16.</td>
              <td>Changeover Time</td>
              <td>2 – 3 Seconds</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Industrial_inverter_3_3_ph;
