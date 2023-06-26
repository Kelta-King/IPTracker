import * as React from "react";
import './App.css';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

function App() {
  const [segment1, setSegment1] = React.useState();
  const [segment2, setSegment2] = React.useState();
  const [segment3, setSegment3] = React.useState();
  const [segment4, setSegment4] = React.useState();

  const handleSegmentChange = (evt, setter, nextId = "") => {
    const val = evt.target.value;
    if(!isNaN(val) && (val.length <= 3) && (val <= 255) && (val >= 0))
    {
      setter(val);
      if(val.length == 3 && nextId != "")
      {
        document.getElementById(nextId).focus();
      }
    }
  }
  
  return (
    <>
    <div className="App">
      <div className="ip-input-container">
          <input type="text" id="seg1" className="ip-input-item" value={segment1} onChange={(evt) => handleSegmentChange(evt, setSegment1, "seg2")} />
          <i className="ip-input-dot"></i>
          <input type="text" id="seg2" className="ip-input-item" value={segment2} onChange={(evt) => handleSegmentChange(evt, setSegment2, "seg3")}  />
          <i className="ip-input-dot"></i>
          <input type="text" id="seg3" className="ip-input-item" value={segment3} onChange={(evt) => handleSegmentChange(evt, setSegment3, "seg4")}  />
          <i className="ip-input-dot"></i>
          <input type="text" id="seg4" className="ip-input-item" value={segment4} onChange={(evt) => handleSegmentChange(evt, setSegment4, "seg5")}  />
      </div>
      <div style={{display: 'inline-block', padding:'8px'}}>
        <div style={{margin:"8px"}}>
        <RemoveRoundedIcon />
        </div>
      </div>
      <div className="ip-input-container">
          <input type="text" id="seg5" className="ip-input-item" />
      </div>
    </div>
    </>
  );
}

export default App;
