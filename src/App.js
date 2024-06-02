import './App.css';
import Navbar from './components/Navbar';
import data from './eve.json';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
  
  const countType = (data) => {
    let arr = [0, 0]
    for (let i = 0; i < data.length; i++) {
      const ele = data[i];
      if (ele.proto == "TCP") {
        arr[0]++;
      } else {
        arr[1]++;
      }
    }
    return [{y:arr[0],label:"TCP"},{y:arr[1],label:"UDP"}];
  }

  const countSource = (data) => {
    let arr = [{y:0,label:"8.42.77.171"},{y:0,label:"61.176.222.167"},{y:0,label:"80.211.246.121"},{y:0,label:"92.63.194.33"},{y:0,label:"194.28.115.245"}]
    for (let i = 0; i < data.length; i++) {
      const ele = data[i];
      if (ele.src_ip == "8.42.77.171") {
        arr[0].y++;
      } else if (ele.src_ip == "61.176.222.167"){
        arr[1].y++;
      } else if (ele.src_ip == "80.211.246.121"){
        arr[2].y++;
      } else if (ele.src_ip == "92.63.194.33"){
        arr[3].y++;
      } else if (ele.src_ip == "194.28.115.245"){
        arr[4].y++;
      } 
    }
    return arr;
  }

  const countPort = (data) => {
    let arr = [{y:0,label:"3306"},{y:0,label:"5915"},{y:0,label:"5432"},{y:0,label:"1433"},{y:0,label:"1521"}]
    for (let i = 0; i < data.length; i++) {
      const ele = data[i];
      if (ele.src_ip == "3306") {
        arr[0].y++;
      } else if (ele.src_ip == "5915"){
        arr[1].y++;
      } else if (ele.src_ip == "5432"){
        arr[2].y++;
      } else if (ele.src_ip == "1433"){
        arr[3].y++;
      } else if (ele.src_ip == "1521"){
        arr[4].y++;
      } 
    }
    return arr;
  }

  const options1 = {
    exportEnabled: true,
    animationEnabled: true,
    theme: "dark2",
    title: {
      text: "Protocol Type"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: countType(data)
    }]
  }

  const options2 = {
    exportEnabled: true,
    animationEnabled: true,
    theme: "dark1",
    title: {
      text: "Source's IP  Address"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: countSource(data)
    }]
  }

  const options3 = {
    exportEnabled: true,
    animationEnabled: true,
    theme: "dark1",
    title: {
      text: "Reciever's Port Number"
    },
    data: [{
      type: "pie",
      startAngle: 75,
      toolTipContent: "<b>{label}</b>: {y}",
      showInLegend: "true",
      legendText: "{label}",
      indexLabelFontSize: 16,
      indexLabel: "{label} - {y}%",
      dataPoints: countPort(data)
    }]
  }

  const countData = (data) => {
    return data.length
  }


  return (
    <div class="flex flox-col h-screen bg-gray-900">

      <div class="hidden md:flex flex-col w-64 bg-gray-800">
        <div class="flex items-center justify-center h-16 bg-gray-900">
          <span class="text-white font-bold uppercase">WiJungle Dashboard</span>
        </div>
        <div class="flex flex-col flex-1 overflow-y-auto">
          <nav class="flex-1 px-2 py-4 bg-gray-800">
            <a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
              Dashboard
            </a>
          </nav>
        </div>
      </div>

      <div class="flex flex-col flex-1 overflow-y-auto">
        <div class="flex items-center justify-between h-16 bg-gray-900 border-b border-gray-200">
          <div class="flex items-center px-4">
            <button class="text-white focus:outline-none focus:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <input class="mx-4 w-full bg-gray-900 border rounded-md px-4 py-2" type="text" placeholder="Search" />
          </div>
          <div class="flex items-center pr-4">

            <button
              class="flex items-center text-[#0C0C0C] hover:text-[#0C0C0C] focus:outline-none focus:text-[#0C0C0C]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
              </svg>
            </button>
          </div>
        </div>
        <div class="p-4 flex">
          <div class="w-[300px] rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-white">Reciever</div>
              <p class="text-white text-base">
              <CanvasJSChart options = {options3}/>
              </p>
            </div>
          </div>
          <div class="w-[300px] rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-white">Potocol</div>
              <p class="text-white text-base">
              <CanvasJSChart options = {options1}/>
              </p>
            </div>
          </div>
          <div class="w-[300px] rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-white">Source</div>
              <p class="text-gray-700 text-base">
              <CanvasJSChart options = {options2}/>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
