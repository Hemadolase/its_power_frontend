import React from "react";

function TechnicalSpecification() {
  return (
    <div className="tech-spec-container">

      {/* Title Section */}
      <div className="tech-header">
        <h1>Technical Specifications</h1>
        <p>Detailed performance, safety, and operational features of the UPS system.</p>
      </div>

      {/* Table */}
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
              <td>DSP Based Microcontroller Design</td>
            </tr>

            <tr>
              <td>3.</td>
              <td>Switching Frequency</td>
              <td>High-frequency PWM with ultra-fast transient response</td>
            </tr>

            <tr>
              <td>4.</td>
              <td>Input Voltage Range</td>
              <td>170V – 270V AC (Single Phase), 45–55 Hz</td>
            </tr>

            <tr>
              <td>5.</td>
              <td>Output Accuracy</td>
              <td>230V AC ±1% (Single Phase), 50 Hz ±0.1%</td>
            </tr>

            <tr>
              <td>6.</td>
              <td>Output Power Factor</td>
              <td>0.8 lag to unity</td>
            </tr>

            <tr>
              <td>7.</td>
              <td>Transient Response</td>
              <td>±5% for 100% step load, recovery within ½ cycle</td>
            </tr>

            <tr>
              <td>8.</td>
              <td>Metering</td>
              <td>
                <ul className="tech-list">
                  <li>Output Voltage</li>
                  <li>Output Current</li>
                  <li>Battery Voltage</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>9.</td>
              <td>Indications</td>
              <td>
                <ul className="tech-list">
                  <li>Mains ON</li>
                  <li>UPS ON</li>
                  <li>Battery Backup</li>
                  <li>Load Status</li>
                  <li>Battery Low</li>
                  <li>Overload</li>
                  <li>Short Circuit</li>
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
                  <li>&lt; 2% (Linear Load)</li>
                  <li>&lt; 5% (Non-linear Load)</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>12.</td>
              <td>Protection</td>
              <td>
                <ul className="tech-list">
                  <li>Input Low / High Cutoff</li>
                  <li>Phase Failure</li>
                  <li>Battery Low</li>
                  <li>DC Under / Over Voltage</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td>13.</td>
              <td>Pre-Alarm</td>
              <td>Battery Low</td>
            </tr>

            <tr>
              <td>14.</td>
              <td>Isolation</td>
              <td>Isolation Transformer at Output</td>
            </tr>

            <tr>
              <td>15.</td>
              <td>Bypass</td>
              <td>Manual Bypass (Optional)</td>
            </tr>

            <tr>
              <td>16.</td>
              <td>Crest Factor</td>
              <td>3 : 1</td>
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
}

export default TechnicalSpecification;
