import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [carb, setCarb] = useState(0);
  const [vols, setVols] = useState(2.5);

  useEffect(() => {
    const carbAmount = vols * 1.96;
    setCarb(carbAmount / 10);
  }, [vols]);

  return (
    <>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Carbonation for Carlos</h1>
        <span
          style={{
            display: "flex",
            gap: "0.25rem",
          }}
        >
          <input
            type="number"
            id="carbVol"
            min="0"
            value={vols}
            onChange={(e) => setVols(Number(e.target.value))}
            style={{
              width: "4rem",
              textAlign: "end",
              padding: "0",
            }}
          />
          <label htmlFor="carbVol">
            vol CO<sub>2</sub>
          </label>
        </span>
        <span
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: "0.25rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <output
            id="carbAmount"
            style={{
              fontSize: "2rem",
            }}
          >
            {carb.toFixed(4)}
          </output>
          <label htmlFor="carbAmount">
            <sup>g</sup>&frasl;<sub>100ml</sub>
          </label>
        </span>
      </main>
    </>
  );
}

export default App;
