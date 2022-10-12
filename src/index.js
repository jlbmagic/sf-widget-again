/**
 * Default sample
 */
import {
  CircularGauge,
  GaugeTheme,
  ILoadedEventArgs,
} from "@syncfusion/ej2-circulargauge";
let circulargauge;
window.loadGauge = (json) => {
  const obj = JSON.parse(json);
  const value = obj.data || 50;
  circulargauge = new CircularGauge({
    axes: [
      {
        lineStyle: { width: 10, color: "transparent" },
        labelStyle: {
          position: "Outside",
          useRangeColor: true,
          font: { size: "12px", fontFamily: "Segoe UI", fontStyle: "Regular" },
        },
        majorTicks: { height: 10, offset: 5 },
        minorTicks: { height: 0 },
        annotations: [
          {
            content:
              '<div><span style="font-size:14px; font-family:Segoe UI">Speedometer</span></div>',
            radius: "30%",
            angle: 0,
            zIndex: "1",
          },
          {
            content:
              '<div><span style="font-size:20px; font-family:Segoe UI">65 MPH</span></div>',
            radius: "40%",
            angle: 180,
            zIndex: "1",
          },
        ],
        startAngle: 0,
        endAngle: 0,
        minimum: 0,
        maximum: 120,
        radius: "80%",
        ranges: [
          { start: 0, end: 40, color: "#30B32D" },
          { start: 40, end: 80, color: "#FFDD00" },
          { start: 80, end: 120, color: "#F03E3E" },
        ],
        pointers: [
          {
            value: value,
            radius: "60%",
            pointerWidth: 8,
            cap: { radius: 7 },
            needleTail: { length: "18%" },
          },
        ],
      },
    ],
  });
  circulargauge.appendTo("#gauge");
};

window.updateValue = (json) => {
  const obj = JSON.parse(json);
  const value = obj.data;
  circulargauge.setPointerValue(0, 0, value);
};
let nIntervId;
const randomButton = document.getElementById("random");
const getRandomValueFromFM = () => {
  FileMaker.PerformScript("update Gauge Value", "");
};
const toggleInterval = () => {
  if (!nIntervId) {
    randomButton.innerText = "Stop Interval";
    nIntervId = setInterval(getRandomValueFromFM, 5000);
  } else {
    randomButton.innerText = "Start Interval";
    clearInterval(nIntervId);
    nIntervId = null;
  }
};

randomButton.addEventListener("click", toggleInterval);
